import * as React from 'react';
import NumberFormat, { InputAttributes } from 'react-number-format';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button, FormControlLabel, FormLabel, Input, Radio, RadioGroup } from '@mui/material';
import styled from 'styled-components';
import { Cores } from '../interface/Cores';
import { InferGetStaticPropsType } from 'next';
import Topo from '../src/components/Header/header';
import { Titulo } from '../src/components/Titulo';
import { AvatarCores, CorJogadores, ExplicaTela, Form } from "./Jogador"
import { Text } from '../src/screens/HomeScreen';
import { authService } from '../src/services/auth/authService';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Footer from '../src/components/Footer';

const Formula = styled.form`
  display: grid;
  width: 600px;
  margin: auto;
  margin-top: 4em;
`

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const NumberFormatCustom = React.forwardRef<
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



export default function FormattedInputs({ items, ChaveValor }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [values, setValues] = React.useState({
    valor: '',
    nome: '',
    cor: '',
    chave:ChaveValor.keyRoom
  });
    console.log()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const router = useRouter()
    return (
      <>
         <Topo />
         <Titulo>Hora de Criar Jogador e Sala</Titulo>
      <ExplicaTela>
        <Text>
          Clique em criar sala e selecione o valor inicial para cada jogador.
          Em alguns jogos recomenda-se a quantia inicial de 2.558.000.
          Em seguida selecione seu nome e sua cor.
          Abaixo estará o código da sala para você compartilhar com seus amigos.
          Clique novamente em Começar Partida para ir para a sala do jogo
          (ao criar a sala você se tornará automaticamente o banco no jogo).
        </Text>
            </ExplicaTela>
            
      <Form onSubmit={(event) => {
        event.preventDefault()
        console.log(values.cor, values.nome)
        authService.criarSala({
          keyRoom: values.chave,
          valorInicial: values.valor,
          identificador: values.cor,
          namePlayer: values.nome,
        })

          .then((dados) => {
            router.push('/jogo')
            console.log(dados)
          })
          .catch((err) => {
            console.log(err)
            alert("preencha todos os campos")
          })

      }}>
         <FormControl variant="standard" >
        
        </FormControl>
        <TextField
          label="Valor inicial"
          value={values.valor}
          onChange={handleChange}
          name="valor"
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: NumberFormatCustom as any,
          }}
          variant="standard"
        />
        <TextField
          id="standard-basic"
          value={values.nome}
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
                    
            {items.cores.map((cor) => (
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
        <Input value={ChaveValor.keyRoom} name="chave"/>
        <Button type="submit" onClick={() => {
          console.log("fui")
          }} variant="outlined">enviar</Button>
            </Form>
            
      <Footer/>
      </>
);
}
type Chave = {
      keyRoom: string;
};

export const getStaticProps = async () => {
  const res = await fetch('https://ffgames134.herokuapp.com/api/cores');
  const items: Cores = await res.json();
  const chave = await fetch('https://ffgames134.herokuapp.com/createRoom/');
  
  const ChaveValor:Chave = await chave.json()
  return {
    props: {
      items,ChaveValor
    },
    revalidate: 10,
  };
};