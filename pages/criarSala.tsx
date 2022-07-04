import react from 'react';
import NumberFormat, { InputAttributes } from 'react-number-format';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button, FormControlLabel, FormLabel, Input, Radio, RadioGroup } from '@mui/material';
import Topo from '../src/components/Header';
import { Titulo } from '../src/components/Titulo';
import { AvatarCores, Coress, Form } from "./Jogador"
import { Text } from '../src/screens/HomeScreen';
import { authService } from '../src/services/auth/authService';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Footer from '../src/components/Footer';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { BoxTexto, Texto } from '../src/components/Textos';
import Head from 'next/head';
import useCores from '../src/services/auth/cores';
import useSWR from 'swr';
import { useFetch } from '../src/services/auth/authGetService';



interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const NumberFormatCustom = react.forwardRef<
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




export default function FormattedInputs() {
  const router = useRouter()
  const { data: chave } = useFetch('https://ffgames134.herokuapp.com/createRoom/')
  const { data: cor } = useFetch('https://ffgames134.herokuapp.com/api/cores')
  

   const [values, setValues] = react.useState({
    nome: '',
    cor: '',
    token: '', 
    valor:'2558000'
  })

  
  
  if (!chave) return "Loading...";
  if (!cor) return "Loading...";
  const handlenChange = (event) => {
    
    const fieldValue = event.target.value;
    const fieldName = event.target.name;


    
    setValues((currenetValues) => {
      return {
        ...currenetValues,
        [fieldName]: fieldValue
      }
    })
  
  }
  
 
  
   return (
      <>
         <Head> <title>Criar Sala - Easy Imobiliário game</title> </Head>
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
          keyRoom: chave.keyRoom,
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
          onChange={handlenChange}
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
          onChange={handlenChange}
          name="nome"
            label="Nome"
            margin="normal"
          variant="standard" />
         <FormLabel id="demo-controlled-radio-buttons-group">Escolha seu icone</FormLabel>
          <RadioGroup
            
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={values.cor}
        onChange={handlenChange}
                >
                    <AvatarCores>
            {cor.cores.map((cor) => (
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
        <p>Código da Sala: {chave.keyRoom}</p>
          <Button
            type="submit"
            variant="outlined"
          >Criar Sala
          </Button>

            </Form>
            
      <Footer/>
      </>
);
}


