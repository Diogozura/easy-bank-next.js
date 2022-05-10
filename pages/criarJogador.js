import { Button } from "reactstrap";
import styled from "styled-components"
import Topo from '../src/components/Header/header'
import React from "react";
import Image from "next/image";
import Footer from "../src/components/Footer";
import { Botao } from "../src/components/Botao";
import { Titulo } from "../src/components/Titulo";
import { Input } from "../src/components/Input";
import { useRouter } from "next/router";
import { tokenService } from "../src/services/auth/tokenService"




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
    @media only screen and (max-width: 420px) {
       width : 90%;
    }
`

export const AvatarCores = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    width: 300px;
    justify-content: space-around;
    flex-wrap: wrap;

    @media only screen and (max-width: 420px) {
       width : 80%;
    }
`
export const Cores = styled.aside`
    display: grid;
    justify-items: center;
margin: 15px;
`

// codigo da pagina 
export default function CriaPlayer({ resta }, props) {
    const router = useRouter()

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
    // const cor = `${post.identificador}`


    const content = resta.map((post) =>

        <Cores key={post.identificador}>

            <label
                htmlFor={post.identificador}>
                <Image
                    width={60}
                    height={60}
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
        </Cores>

    );

    return (
        <Body>
            <Topo />
            <Titulo>Hora de Criar Jogador</Titulo>
            <Form onSubmit={(event) => {
                event.preventDefault()
                console.log(values.cores, values.usuario)

                criarPlayer.criar({
                    identificador: values.cores,
                    namePlayer:values.usuario,
                })
               
                    .then(() => {
                         router.push('/jogo')
                    })
                    .catch(() => {
                        alert("preencha todos os campos")
                    })
            }}>
                <Input
                    placeholder="Usuário" name="usuario"
                    value={values.usuario}
                    onChange={handlenChange}
                />
                <AvatarCores >
                    {content}
                </AvatarCores>


                <Botao>Confirmar</Botao>

            </Form>


            {/* <pre>
                {JSON.stringify(values, null, 2)}
            </pre> */}
            <Footer />
        </Body>
    )
}


const keyRoom = tokenService.get()
export async function getStaticProps() {

    const res = await fetch(`https://ffgames134.herokuapp.com/api/coresRestantes?keyRoom=${keyRoom}`)
    const posts = await res.json()
    const resta = posts.coresRestante
    const cor = resta
    console.log(cor)


    return {
        props: {
            resta,
        },
    }
}