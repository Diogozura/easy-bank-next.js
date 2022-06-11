import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import react from "react";
import styled from "styled-components"
import { Botao } from "../src/components/Botao";
import Footer from "../src/components/Footer";
import Topo from "../src/components/Header/header";
import { Input } from "../src/components/Input";
import { Titulo } from "../src/components/Titulo";
import { useFetch } from "../src/services/auth/authGetService";
import { authService } from "../src/services/auth/authService";
import nookies from 'nookies'
import { Text } from "../src/screens/HomeScreen";


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
export const ExplicaTela = styled.article`
    margin: auto;
    width: 800px;
    text-align: center;
    @media only screen and (max-width: 850px){
        width: 90%;
    }
`


// codigo da pagina 
export default function CriaJogador( ctx = null) {
    const cookie = nookies.get(ctx)
    const {error, data: cor } = useFetch(`https://ffgames134.herokuapp.com/api/coresRestantes?keyRoom=${cookie.chave}`, { refreshInterval: 0 })
    
    const [values, setValues] = react.useState({
        usuario: '',
        cores: '',
    })

    
    const router = useRouter()
    
    if (!cor) return "Loading...";
    if (error) return "Deu ruim...";
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
   
    
    const content = cor.coresRestante?.map((post) => (
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
           
            </Head>
            <Topo />
            <Titulo>Hora de Criar Jogador</Titulo>

            <ExplicaTela >
            <Text>
            selecione sua cor e seu nome e avance em iniciar game.
            </Text>
            </ExplicaTela>
           
            <Form onSubmit={(event) => {
                event.preventDefault()
                authService.criarJogador({
                    identificador: values.cores,
                    namePlayer: values.usuario,
                })

                    .then(() => {
                        router.push('/jogo')
                    })
                    .catch((err) => {
                        alert(err)
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


                <Botao passHref>Confirmar</Botao>

            </Form>
            <Footer />
        </>
    )
}