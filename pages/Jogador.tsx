import styled from "styled-components"
import Topo from '../src/components/Header'
import React from "react";
import Image from "next/image";
import Footer from "../src/components/Footer";
import { Botao } from "../src/components/Botao";
import { Titulo } from "../src/components/Titulo";
import { Input } from "../src/components/Input";
import { useRouter } from "next/router";
import { tokenService } from "../src/services/auth/tokenService";
import { authService } from "../src/services/auth/authService";
import nookies from 'nookies'
import useCores from "../src/services/auth/coresResta";



// estilo da pagina 
export const Body = styled.body`
    background-image:url('/image/fundo.png') ;
`

export const Form = styled.form`
    width: 500px;
    margin: auto;
    margin-top: 2em;
    margin-bottom: 3em;
    background-color: white; 
    border-radius: 10px;

    justify-items: center;
    display: grid;
    @media only screen and (max-width: 600px) {
       width : 90%;
    }
`
export const AvatarCores = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    /* width: 300px; */
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 600px) {
       /* width : 80%; */
       padding: 0px;
    }
`
export const Coress = styled.aside`
    display: grid;
    justify-items: center;
    margin: 0px 10px;

    width: 95px;
`


export default function CriaPlayer(props) {
    const router = useRouter()
    const restaCores = useCores()

    const cor = restaCores.data?.coresRestante

    const [values, setValues] = React.useState({
        usuario: '',
        cores: '',
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
  



    return (
        <Body>
            <Topo children={undefined} />
            <Titulo>Hora de Criar Jogador</Titulo>
            <Form onSubmit={(event) => {
                event.preventDefault()
                console.log(values.cores, values.usuario)
                authService.criarJogador({
                    identificador: values.cores,
                    namePlayer: values.usuario,
                })

                    .then(() => {
                        router.push('/jogo')
                    })
                    .catch((err) => {
                        console.log(err)
                        alert("preencha todos os campos")
                    })
            }}>
                <Input
                    placeholder="Usuário" name="usuario"
                    value={values.usuario}
                    onChange={handlenChange}
                />
                <AvatarCores >
                    {/* {content} */}
                    {cor?.map((post) => (
                        <Coress key={post.identificador}>

                                 <label
                                    htmlFor={post.identificador}>
                                    <Image
                                        width={80}
                                        height={80}
                                        src={`./avatar/${post.identificador}.svg`}
                    
                                    />
                                </label>
                                <input
                                    name="cores"
                                    type="radio"
                                    id={post.identificador}
                                    value={post.identificador}
                                    onChange={handlenChange}
                                />
                            </Coress>
                    ))}
                </AvatarCores>


                <Botao>Confirmar</Botao>

            </Form>

            <Footer />
        </Body>
    )
}