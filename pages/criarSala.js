// import CriarSala from '../src/screens/CriarSalaScreen'
import Footer from "../src/components/Footer"
import Topo from "../src/components/Header/header"
import React from 'react'
import { useRouter } from "next/router"
import { Input } from "../src/components/Input"
import { Titulo } from "../src/components/Titulo"
import { AvatarCores, Body, Cores, Form } from "./criarJogador"
import { Botao } from "../src/components/Botao"
import Image from "next/image"
import { authService } from "../src/services/auth/authService"


// export default CriarSala
// posts will be populated at build time by getStaticProps()


function CriarSala({ posts, corDeVerdade, children, ...props }) {
  const router = useRouter()

  // console.log(posts.keyRoom)

  const [values, setValues] = React.useState({
    usuario: '',
    valor: '',
    cores: '',
    token: posts.keyRoom,
    // keyRoom
    // valorInicial
    // identificador
    // namePlayer
  })
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


  const content = corDeVerdade.map((post) => (
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
        // console.log('Fui Clicado' + ' ' + values.usuario + ' ' + values.valor)
        // console.log(JSON.stringify(values, null, 2))
        authService.criarSala({
          keyRoom: posts.keyRoom,
          valorInicial: values.valor,
          identificador: values.cores,
          namePlayer: values.usuario,
        })

          .then(() => {
            router.push('/jogo')
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
        {/* <pre>{colo}</pre> */}


        {/* <p>{restosta}</p> */}
        <Input
          type="text"
          name="token"
          placeholder={posts.keyRoom}
          value={posts.keyRoom}
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