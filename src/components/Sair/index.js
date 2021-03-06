import router from "next/router";
import react from "react";
import { Botao } from "../Botao";
import { tokenService } from '../../services/auth/tokenService'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { authService } from "../../services/auth/authService";

import Image from "next/image";
import { Cores, Form } from '../../../pages/Jogador';

export default function Sair({data}) {
    function handleClick() {
        tokenService.delete()
        router.push('/')
    }
  

    const [values, setValues] = react.useState({
        user: '',
        cores: '',
    })

    function handleChange(event) {
        const fieldValue = event.target.value;
        const fieldName = event.target.name;

        setValues((currenetValues) => {
            return {
                ...currenetValues,
                [fieldName]: fieldValue,
            }
        })
    }
    const [modal, setModal] = react.useState(false)
    const toggle = () => setModal(!modal)

    const conteudo = data.players?.map((jogadores) => (
        <>
            <Cores key={jogadores.idPlayer}>
                <label
                    name="cores"
                    value={jogadores.identificador}
                    htmlFor={jogadores.identificador}>

                    <Image
                        width={60}
                        height={60}
                        src={`./avatar/${jogadores.identificador}.svg`}

                    />
                </label>
                <input
                    name="user"
                    type="radio"
                    id={jogadores.identificador}
                    value={jogadores.idPlayer || ''}
                    onChange={handleChange}
                />

            </Cores>
        </>
    ))

    const troca = () => {
        return (
            <Form onSubmit={(event) => {
                
                event.preventDefault();
                console.log(values)
                console.log()
                authService.Sair({
                    idPlayerPara: parseInt(values.user),
                })
                    .then(() => {
                        tokenService.delete()
                        router.push('/')
                    })
                    .catch((err) => {
                       
                        alert('algo n??o saiu como o previsto ')
                    })

            }}>

                Passar Bat??o para o novo Banco
                {conteudo}
                <Botao >
                    Trocar e sair
                </Botao>
            </Form>
        )
    }

    const sair = () => {
        return (
            <>
                <h3>Tem certeza que deseja sair?</h3>
                <Botao
                key={data.idPlayer}
                onClick={handleClick}
              >
                Sair
            </Botao>
            </>
            
           
        )
    }
 
    return (
        <>

            <Botao
                color="danger"
                onClick={toggle}
            >
                Sair
            </Botao>
            <Modal
                toggle={toggle}
                isOpen={modal}>

                <ModalHeader

                    toggle={toggle}

                >
                    Sair
                </ModalHeader> 
                <ModalBody>
                    {data.playerBank && data.players.length != 0 ?  troca() : sair()}
                </ModalBody>
                <ModalFooter>

                    <Button onClick={toggle}>
                        Cancelar
                    </Button>

                </ModalFooter>
            </Modal>
        </>

    )
}