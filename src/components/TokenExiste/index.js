import React from 'react'
import styled from 'styled-components'
import { Router, useRouter } from 'next/router'
import { validaToken } from '../../services/auth/validaToken'
import nookies from 'nookies'
import { route } from 'next/dist/server/router'
import { tokenService } from '../../services/auth/tokenService'

const Form = styled.form`
display: grid;
justify-items: center;

`
const Input = styled.input`
margin-top: 2em;
border: none;
font-size: 1.2em;
border-bottom: 2px solid rgb(0, 0, 0);
width: 300px;
text-align: center;
@media only screen and (max-width: 850px){
    width: 80%;
    
}
`
const Botao = styled.button`
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
    background: ${props => props.bgBotao};
    color: ${props => props.color};
    border-radius: 20px;
    margin: 5px 0;
    &:hover{
      color: ${props => props.color};
      text-decoration: underline;
    }
`


export default function TokenExiste(ctx = null) {
    const cookie = nookies.get(ctx)
    console.log(cookie.chave)
    const router = useRouter()
    const [values, setValue] = React.useState({
        token: cookie.chave,
    })

    function handleChange(event) {
        const fieldValue = event.target.value;
        const fieldName = event.target.name;

        setValue((currentValues) => {
            return {
                ...currentValues,
                [fieldName]: fieldValue,
            }
        })
    }

    return (
        <Form onSubmit={(event) => {
            event.preventDefault();
            console.log(JSON.stringify(values, null, 2))
            // console.log(values.token)
            validaToken.validar({
                keyRoom: values.token,
            })
                .then((res) => {
                    
                    console.log(res)
                    { cookie.chave ? router.push('/jogo') : router.push('/criarJogador') }
                    tokenService.save(cookie.chave || values.token , cookie.Player)
                    // console.log(values.token)
                    
                })
                .catch((res) => {
                    
                    alert(res)
                })

        }}>

            <Input
                placeholder="Código da sala"
                type="text"
                name="token"
                value={values.token}
                onChange={handleChange}
            />
            {/* <pre>
                {JSON.stringify(values, null, 2)}
            </pre> */}
            <Botao
                bgBotao="#22192c"
                color="white"
            >
                Entrar
            </Botao>

        </Form>
    )
}
