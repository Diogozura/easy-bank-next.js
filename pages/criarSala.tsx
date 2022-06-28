import * as React from 'react';
import NumberFormat, { InputAttributes } from 'react-number-format';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button, FormControlLabel, FormLabel, Input, Radio, RadioGroup } from '@mui/material';
import styled from 'styled-components';
import { Cores } from '../interface/Cores';
import { InferGetStaticPropsType } from 'next';
import Topo from '../src/components/Header';
import { Titulo } from '../src/components/Titulo';
import { AvatarCores, Coress, Form } from "./jogador"
import { Text } from '../src/screens/HomeScreen';
import { authService } from '../src/services/auth/authService';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Footer from '../src/components/Footer';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { BoxTexto, Texto } from '../src/components/Textos';



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
    valor: '2558000',
    nome: '',
    cor: '',
    chave:ChaveValor.keyRoom
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const router = useRouter()
    return (
      <>
         <Topo children={undefined}  />
         <Titulo>Hora de Criar Jogador e Sala</Titulo>
        <BoxTexto>
        <Texto>
          Clique em criar sala e selecione o valor inicial para cada jogador.
          Em alguns jogos recomenda-se a quantia inicial de 2.558.000.
          Em seguida selecione seu nome e sua cor.
          Abaixo estará o código da sala para você compartilhar com seus amigos.
          Clique novamente em Começar Partida para ir para a sala do jogo
          (ao criar a sala você se tornará automaticamente o banco no jogo).
        </Texto>
            </BoxTexto>
            
      <Form onSubmit={(event) => {
        event.preventDefault()
        authService.criarSala({
          keyRoom: values.chave,
          valorInicial: values.valor,
          identificador: values.cor,
          namePlayer: values.nome,
        })

          .then(() => {
            router.push('/jogo')
          
          })
          .catch((err) => {
            alert("preencha todos os campos")
          })

      }}>
         <FormControl variant="standard" >
        
        </FormControl>
        <TextField
          label="Valor inicial"
            value={values.valor} 
            required
          onChange={handleChange}
            name="valor"
            margin="normal"
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: NumberFormatCustom as any,
          }}
          variant="standard"
        />
        <TextField
          id="standard-basic"
            value={values.nome}
            required
          onChange={handleChange}
          name="nome"
            label="Nome"
            margin="normal"
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
              <Coress>
                   
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
              </Coress>
              
         ))}
                     </AvatarCores>
           
      </RadioGroup>
        <p>Código da Sala: {ChaveValor.keyRoom}</p>
          <Button
            onClick={handleToggle}
            type="submit"
            variant="outlined"
          >Criar Sala
          </Button>
          <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress   />
      </Backdrop>

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