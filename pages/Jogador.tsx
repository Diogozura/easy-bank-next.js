import * as React from 'react';
import NumberFormat, { InputAttributes } from 'react-number-format';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button, FormControlLabel, FormLabel, Input, Radio, RadioGroup } from '@mui/material';
import { CoresRestantes } from '../interface/CoresRestantes';
import { InferGetStaticPropsType } from 'next';
import Image from "next/image";
import styled from "styled-components"
import nookies from 'nookies'
import Topo from '../src/components/Header';
import Footer from '../src/components/Footer';
import { Titulo } from '../src/components/Titulo';
import { Text } from '../src/screens/HomeScreen';
import { authService } from '../src/services/auth/authService';
import { useRouter } from 'next/router';


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
export const CorJogadores = styled.aside`
    display: grid;
    justify-items: center;
    margin: 1em;
    width: 90px;
    @media only screen and (max-width: 850px){
        width:70px;
    }
`
export const ExplicaTela = styled.article`
    margin: auto;
    width: 800px;
    text-align: center;
    @media only screen and (max-width: 850px){
        width: 90%;
    }
`

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
  }
  
  const NumberFormatCustom = React.forwardRef<
    NumberFormat<InputAttributes>,
    CustomProps
  >(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="R$"
      />
    );
  });
  
  
  
  export default function FormattedInputs({ items }: InferGetStaticPropsType<typeof getStaticProps>) {
   console.log(items)
      const [values, setValues] = React.useState({
        nome: '',
        cor: '',
    });
    const router = useRouter()
   
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };
  
    return (
        <>
            <Topo children={undefined} />
            <Titulo>Hora de Criar Jogador</Titulo>

            <ExplicaTela >
            <Text>
            selecione sua cor e seu nome e avance em iniciar game.
            </Text>
            </ExplicaTela>
            <Form onSubmit={(event) => {
          event.preventDefault()
          
                authService.criarJogador({
                    identificador: values.cor,
                    namePlayer: values.nome,
                })

                    .then(() => {
                        router.push('/jogo')
                    })
                    .catch((err) => {
                        alert(err)
                    })
            }}>
           <FormControl variant="standard" >
          
          </FormControl>
         
          <TextField
            id="standard-basic"
            required
            value={values.nome}
            margin="normal"
            onChange={handleChange}
            name="nome"
            label="Nome"
            variant="standard" />
           <FormLabel id="demo-controlled-radio-buttons-group">Escolha seu icone</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={values.cor}
          onChange={handleChange}
          >
             <AvatarCores>
                    
                    {items.coresRestante.map((cor) => (
                      <CorJogadores>
                           
                            <FormControlLabel
                                value={cor.identificador}
                                name="cor"
                                control={<Radio />}
                                label={<Image
                                 width={150}
                                height={150}
                                src={`./avatar/${cor.identificador}.svg`}
                                
                                />}
                                labelPlacement="top"
                            />
                      </CorJogadores>
                      
                 ))}
                  
                             </AvatarCores>
        </RadioGroup>
          <Button type="submit" onClick={() => {
            console.log("fui")
            }} variant="outlined">Entrar</Button>
            </Form>
            <Footer/>
      </>
    );
  }
  
  
export const getStaticProps = async (ctx = null) => {
  const cookie = nookies.get(ctx)
  
    const res = await fetch(`https://ffgames134.herokuapp.com/api/coresRestantes?keyRoom=MU6VH8IZ`);
    const items: CoresRestantes = await res.json();
    console.log(cookie.chave)
    return {
      props: {
        items,
      },
     
    };
  };