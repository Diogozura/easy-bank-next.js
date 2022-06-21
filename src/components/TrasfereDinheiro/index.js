import Image from 'next/image';
import react from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { authService } from '../../services/auth/authService';
import { Botao } from '../Botao';
import { Input } from '../Input';
import nookies from 'nookies'
import { useRouter } from 'next/router';
import { SaldoFlag, BoxTrasnfere } from '../BoxJogador';
import ToggleSwitch from '../ToggleSwitch';
import { tokenService } from '../../services/auth/tokenService';
import styled from 'styled-components';
import { Cores, Form } from '../../../pages/Jogador';


const ToggleSwitchBanco = styled.aside`
    text-align: center;
    display: flex;
    justify-content: space-between;
`
const JogadoresTransfere = styled.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default function TransfereDinheiro({ data }, ctx = null) {
    const [isChecked, setChecked] = react.useState(true)

    const cookie = nookies.get(ctx)
    tokenService.save(cookie.chave, cookie.Player, isChecked ? data.idPlayer : 0)


    const [maskedValue, setMaskedValue] = react.useState('');

    const [values, setValues] = react.useState({
        user: '',
        cores: '',
        valor:'',
    })
    function handlenChange(event, maskedValue) {
        const fieldValue = event.target.value;
        const fieldName = event.target.name;

        setMaskedValue(maskedValue);
        setValues((currenetValues) => {
            return {
                ...currenetValues,
                [fieldName]: fieldValue,
            }
        })
    }


    // base para funcionar as funções do ReactStrap 
    const [modal, setModal] = react.useState(false);

    // Toggle for Modal
    const toggle = () => setModal(!modal);

    const user = () => {
        return (
            <Cores key={data.idPlayer}>
                <label
                    name="cores"
                    value='banco'
                    htmlFor='banco'>
                    <Image src={`./avatar/${data.identificador}.svg`} alt={data.namePlayer} width="60" height="60" />
                    <h3>{data.namePlayer}</h3>
                </label>
                <input
                    name="user"
                    type="radio"
                    id='banco'
                    value={data.idPlayer}
                    onChange={handlenChange}
                />
            </Cores>

        )
    }
    const banco = () => {
        return (
            <Cores>
                <label
                    name="cores"
                    value='banco'
                    htmlFor='banco'>

                    <Image src='./icon/Bancoicon.svg' alt="icon do Banco" width="60" height="60" />
                    <h3>Banco</h3>
                </label>
                <input
                    name="user"
                    type="radio"
                    id='banco'
                    value='0'
                    onChange={handlenChange}
                />
            </Cores>

        )
    }
    const handleCheck = () => {
        setChecked((preventState) => !preventState)
    }
    const handleClear = () => {

    }


    const conteudo = data.players?.map((post) => (
        <>
            <Cores key={post.idPlayer}>
                <label
                    name="cores"
                    value={post.identificador}
                    htmlFor={post.identificador}>
                   
                    <Image
                        width={60}
                        height={60}
                        src={`./avatar/${post.identificador}.svg`}

                    />
                    <h3>{post.namePlayer}  {post.idPlayer}</h3>
                </label>
                <input
                    name="user"
                    type="radio"
                    id={post.identificador}
                    value={post.idPlayer}
                    onChange={handlenChange}
                />

            </Cores>

        </>
    ))
    return (
        <BoxTrasnfere key={data.idPlayer} >

            <Botao
                color="danger"
                onClick={toggle}
            >
                Transferir
            </Botao>
            <Modal
                size="lg"
                toggle={toggle}
                isOpen={modal}
            >
                <ModalHeader toggle={toggle} className="bg-info text-white ">
                    <h2 >Area de Transferência Bancaria :</h2> {isChecked ? data.namePlayer : "Banco"}
                </ModalHeader>
                <ModalBody  >
                    <Form onSubmit={(event) => {
                        event.preventDefault();
                        console.log(parseInt(values.user), parseInt(values.valor))

                        authService.transfereDinheiro({
                            idPlayerPara: parseInt(values.user),
                            valor:parseInt(values.valor),
                        })
                            .then((res) => {
                                <p>tudo certo</p>
                                alert("transação Concluída ")
                                toggle()
                                console.log(res)
                                //    router.reload()
                            })
                            .catch((err) => {
                                alert(err)
                                console.log((err))
                            })

                    }}>


                        <JogadoresTransfere>
                            {isChecked ? banco() : user()}
                            {conteudo}
                        </JogadoresTransfere>


                        <Input
                            type="number"
                            placeholder="Valor de Inicio"
                            name="valor"
                            required="required"
                            value={values.valor}
                            onChange={handlenChange}
                        />
                        {/* <IntlCurrencyInput type="text" required name="valor" placeholder="valor a transferir" value={values.valor} currency="BRL" config={currencyConfig}
                            onChange={handlenChange}
                            style={{
                                borderRadius: "10px",
                                textAlign: "center",
                                padding: "5px",
                                margin: "10px",
                            }}
                        /> */}
                        {/* <pre>{JSON.stringify(maskedValue, null, 2)}</pre> */}
                        {/* <pre>{JSON.stringify(maskedValue, null, 2) }</pre> */}
                        <Botao type="submit">Transferir</Botao>
                    </Form>
                </ModalBody>
                <ModalFooter className="bg-info text-center">

                    <Button onClick={toggle} color="danger">
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            <div>
                {data.playerBank ? <SaldoFlag>
                    <Image src='./icon/Bancoicon.svg' width="48" height="48" />
                    <h3>Banco</h3>
                    <ToggleSwitchBanco>
                        <p>on</p>
                        <ToggleSwitch isChecked={isChecked} onClick={handleCheck} />
                        <p>off</p>
                    </ToggleSwitchBanco>

                </SaldoFlag> : null}
            </div>


        </BoxTrasnfere>


    )
}