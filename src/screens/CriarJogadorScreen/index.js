import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import react from "react";
import { Button } from "reactstrap";
import styled from "styled-components"
import { Botao } from "../../components/Botao";
import Footer from "../../components/Footer";
import Topo from "../../components/Header/header";
import { Input } from "../../components/Input";
import { Titulo } from "../../components/Titulo";
import { useFetch } from "../../services/auth/authGetService";
import { authService } from "../../services/auth/authService";
import nookies from 'nookies'




// estilo da pagina 


export const Form = styled.form`
    width: 500px;
    margin: auto;
    margin-top: 2em;
    margin-bottom: 3em;
    background-color: white; 
    border-radius: 10px;

    justify-items: center;
    display: grid;
    @media only screen and (max-width: 520px) {
       width : 90%;
    }
`
export const AvatarCores = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    /* width: 300px; */
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
    width: 70px;
`


// codigo da pagina 
export default function CriaPlayer(props, ctx = null) {
    const router = useRouter()
    const cookie = nookies.get(ctx)
    const { data: cor } = useFetch(`https://ffgames134.herokuapp.com/api/coresRestantes?keyRoom=${cookie.chave}`, { refreshInterval: 0 })

    const [values, setValues] = react.useState({
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
    if (!cor) return "Loading...";
    // const cor = `${post.identificador}`
    // console.log(cores.coresRestante) 
    console.log(cor)
    const content = cor.coresRestante.map((post) => (
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
    ))




    return (
        <>
             <Head>
            <title>Criar player - Easy Imobiliário </title>
             <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topo />
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
                        // alert(err)
                        err
                    })
            }}>
                <Input
                    placeholder="Usuário" name="usuario"
                    value={values.usuario}
                    onChange={handlenChange}
                />
                <AvatarCores
                >
                    {content}
                </AvatarCores>


                <Botao >Confirmar</Botao>

            </Form>


            <pre>
                {JSON.stringify(values, null, 2)}
         </pre>
            <Footer />
        </>
    )
}