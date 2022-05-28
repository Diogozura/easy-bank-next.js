import Image from 'next/image';
import react from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Cores } from '../../../pages/criarJogador';
import { authService } from '../../services/auth/authService';
import useSession from '../../services/auth/jogador';
import { Botao } from '../Botao';
import { Input } from '../Input';
import nookies from 'nookies'
import { useRouter } from 'next/router';

import { SaldoFlag } from '../BoxJogador';
import ToggleSwitch from '../ToggleSwitch';
import { tokenService } from '../../services/auth/tokenService';
import styled from 'styled-components';


const ToggleSwitchBanco = styled.aside`
    text-align: center;
    display: flex;
    justify-content: space-between;
`



export default function TransfereDinheiro(props,ctx = null) {
    const [isChecked, setChecked] = react.useState(true)
    const session = useSession()
    const dadosjogador = session.data.players
    const dadosuser = session.data
    const cookie = nookies.get(ctx)
    tokenService.save(cookie.chave, cookie.Player, isChecked? 0: dadosuser.idPlayer)

 
    const [values, setValues] = react.useState({
        user: '',
        cores: '',
        valor:'',
    })
    
    function handlenChange(event) {
        const fieldValue = event.target.value;
        const fieldName = event.target.name;

        setValues((currenetValues) => {
            return {
                ...currenetValues,
                [fieldName]: fieldValue,
            }
        })
    }

    const router = useRouter()
    // base para funcionar as funções do ReactStrap 
    const [modal, setModal] = react.useState(false);

    // Toggle for Modal
    const toggle = () => setModal(!modal);
    
    const user = () => {
        return (
            <Cores>
                 <label
                    name="cores"
                    value='banco'
                    htmlFor='banco'>
                    <Image src={`./avatar/${dadosuser.identificador}.svg`} width="60" height="60" />
                </label>
                <input
                    name="user"
                    type="radio"
                    id='banco'
                    value={dadosuser.idPlayer}
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
                    
                    <Image src='./icon/Bancoicon.svg' width="60" height="60" />
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



    const conteudo = dadosjogador?.map((post) => (
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
        <>

            <Botao
                color="danger"
                onClick={toggle}
            >
                Transferir
            </Botao>
            <Modal
                toggle={toggle}
                isOpen={modal}
            >
                <ModalHeader toggle={toggle}>
                    {isChecked?dadosuser.namePlayer : "Banco"}
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        
                      
                        authService.transfereDinheiro({
                            idPlayerPara: parseInt(values.user),
                            valor: parseInt(values.valor),
                        })
                            .then(() => {
                                alert("tudo certo")
                               
                        })
                    }}>
                        {/* {dadosuser.playerBank ? user() : <Banco />} */}
                       { isChecked? banco()  : user() }
                        {conteudo}

                        <Input
                            placeholder="valor a transferir"
                            type='number'
                            name='valor'
                            value={values.valor}
                            onChange={handlenChange}
                        />

                        <Botao >Transferir</Botao>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={toggle}
                    >
                        Do Something
                    </Button>
                    {' '}
                    <Button onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            {dadosuser.playerBank ? <SaldoFlag>
                <Image src='./icon/Bancoicon.svg' width="48" height="48" />
                <h3>Banco</h3>
                <ToggleSwitchBanco>
                <p>on</p>
                    <ToggleSwitch isChecked={isChecked} onClick={handleCheck}/> 
                    <p>off</p>
                </ToggleSwitchBanco>
             
                </SaldoFlag>: null }
        
        </>


    )
}