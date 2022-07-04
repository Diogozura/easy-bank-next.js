import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { validaToken } from '../../services/auth/validaToken'
import nookies from 'nookies'
import { tokenService } from '../../services/auth/tokenService'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { TextField } from '@mui/material'
import { authService } from '../../services/auth/authService'

const Form = styled.form`
display: grid;
justify-items: center;
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
    const router = useRouter()
    const [values, setValue] = React.useState({
        token: cookie.chave,
    })
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

    function handleChange(event) {
        const fieldValue = event.target.value.toUpperCase();
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

            validaToken.validar({
                keyRoom: values.token,
            })
                .then((res) => { 
                    {
                        cookie.chave && cookie.Player !=
                            'undefined' ? router.push('/jogo')
                            : router.push('/Jogador') 
                        tokenService.save(values.token, '', '')
                    }   
                })
                .catch((res) => {
                    alert(res)
                    handleClose()
                })

        }}>

          
            <TextField 
                id="standard-basic"
                name="token"
                multiline
                value={values.token}
                onChange={handleChange}
                label="Código da sala"
                variant="standard" />
        
         
            <Botao  onClick={handleToggle}
                bgBotao="#22192c"
                color="white"
            >
                Entrar
            </Botao>
            <Backdrop
                
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress   />
            </Backdrop>
        </Form>

    )
}
