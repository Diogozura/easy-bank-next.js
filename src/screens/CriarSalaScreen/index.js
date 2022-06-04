// import CriarSala from '../src/screens/CriarSalaScreen'
import Topo from "../../components/Header/header"
import react from "react"
import Footer from '../../components/Footer'
import { useRouter } from "next/router"
import { Input } from "../../components/Input"
import { Titulo } from "../../components/Titulo"
import { AvatarCores, Body, Cores, Form } from "../../../pages/criarJogador"
import { Botao } from "../../components/Botao"
import Image from "next/image"
import { cores } from "../../services/auth/cores"
import { criaToken } from "../../services/auth/criaToken"
import { authService } from "../../services/auth/authService"
import useSWR, { useSWRConfig } from 'swr'
import {  useFetch } from "../../services/auth/authGetService"


// export default CriarSala
// posts will be populated at build time by getStaticProps()



function CriarSala({ posts, children, ...props }) {
  const { data:chave } = useFetch('https://ffgames134.herokuapp.com/createRoom/', { refreshInterval: 0 })
  const { data: cor } = useFetch('https://ffgames134.herokuapp.com/api/cores', { refreshInterval: 0 })
 
  
  // console.log(cor)
  
  const router = useRouter()
  // https://ffgames134.herokuapp.com/api/cores


  // const fetcher = (url) => fetch(url).then((res) => res.json());

  // const api =  `${process.env.NEXT_PUBLIC_BACKEND_URL}createRoom/`
  // const { data, error } = useSWR(
  //     api,
  //      fetcher, {
  //        refreshInterval : 30000,  
  //    }
  // );
  // if (error) return "An error has occurred.";
  // if (!data) return "Loading...";

  
  const [values, setValues] = react.useState({
    usuario: '',
    valor: '',
    cores: '',
    token: ''
   
  })

  if (!chave) return "Loading...";
  if (!cor) return "Loading...";

  console.log(chave.keyRoom)
  console.log(cor.cores)

 

  function handlenChange(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;


    setValues((currenetValues) => {
      return {
        ...currenetValues,
        [fieldName]: fieldValue
      }
    })
  }


  const content = cor.cores.map((post) => (
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
        placeholder=""
        id={post.identificador}
        value={post.identificador}
        onChange={handlenChange}
      />
    </Cores>

  )
  );  


  return (

    <Body>

      <Topo />
      <Titulo>Hora de Criar Jogador e Sala</Titulo>

      <Form onSubmit={(event) => {
        event.preventDefault()
          console.log(values.cores, values.usuario)
          console.log('Fui Clicado' + ' ' + values.usuario + ' ' + values.valor)
          console.log(JSON.stringify(values, null, 2))

          authService.criarSala({
            keyRoom: chave.keyRoom,
            valorInicial: values.valor,
            identificador: values.cores,
            namePlayer: values.usuario,
          })

          .then(() => {
            router.push('/jogo')
            console.log('top')
          })
          .catch(() => {
            alert("preencha todos os campos")
          })

      }}>

        <Input
          type="number"
          placeholder="Valor de Inicio"
          name="valor"
          value={values.valor}
          onChange={handlenChange}
        />

        <Input
          placeholder="Usuário"
          type="text"
          name="usuario"
          value={values.usuario}
          onChange={handlenChange}
        />
        <AvatarCores>
          {content}
        </AvatarCores>
        <Input
          type="text"
          name="token"
          placeholder={chave.keyRoom}
          value={chave.keyRoom}
          onChange={handlenChange}
        />
        <Botao>
          Começar Partida
        </Botao>
      </Form>

      <Footer />
    </Body>
  )
}

export default CriarSala