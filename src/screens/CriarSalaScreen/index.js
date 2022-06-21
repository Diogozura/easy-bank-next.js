
import Topo from "../../components/Header/header"
import react from "react"
import Footer from '../../components/Footer'
import { useRouter } from "next/router"
import { Input } from "../../components/Input"
import { Titulo } from "../../components/Titulo"
import { Botao } from "../../components/Botao"
import Image from "next/image"
import { authService } from "../../services/auth/authService"
import { useFetch } from "../../services/auth/authGetService"
import Head from "next/head"
import { AvatarCores, Cores, ExplicaTela, Form } from "../../../pages/Jogador"
import { Text } from "../HomeScreen"


function CriarSala({ posts, children, ...props }) {
  const { data: chave } = useFetch('https://ffgames134.herokuapp.com/createRoom/', { refreshInterval: 0 })
  const { data: cor } = useFetch('https://ffgames134.herokuapp.com/api/cores', { refreshInterval: 0 })




  const router = useRouter()


  const [maskedValue, setMaskedValue] = react.useState('');
  const [values, setValues] = react.useState({
    usuario: '',
    cores: '',
    token: '', 
    valor:''
  })

  if (!chave) return "Loading...";
  if (!cor) return "Loading...";
  { chave.erro == 'chave invalida' ? router.push('/?error=401') : null }




  const handlenChange = (event, maskedValue) => {
    event.preventDefault();

    const fieldValue = event.target.value;
    const fieldName = event.target.name;


    
    setValues((currenetValues) => {
      return {
        ...currenetValues,
        [fieldName]: fieldValue
      }
    })
    setMaskedValue(maskedValue);
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
  // console.log(values.token, values.cores, values.valor, values.usuario)

  return (

    <>
      <Head>
        <title>Criar Sala - Easy Imobiliário </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

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
        console.log(maskedValue, values.cores, values.usuario)
        authService.criarSala({
          keyRoom: chave.keyRoom,
          valorInicial: values.valor,
          identificador: values.cores,
          namePlayer: values.usuario,
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

        <Input
          type="number"
          placeholder="Valor de Inicio"
          name="valor"
          required="required"
          value={values.valor}
          onChange={handlenChange}
        />
        {/* <IntlCurrencyInput
          type="text"
          required
          name="valor"
          placeholder="valor a transferir"
          dValue={values.valor}
          currency="BRL"
          config={currencyConfig}
          autoFocus={true}
          autoSelect={true}

          onChange={handlenChange}
          style={{
            borderRadius: "10px",
            textAlign: "center",
            padding: "5px",
            margin: "10px",
          }}
        /> */}
        {/* <pre>{JSON.stringify(maskedValue, null, 2)}</pre>
        <pre>{JSON.stringify(values, null, 2)}</pre> */}

        <Input
          placeholder="Usuário"
          type="text"
          name="usuario"
          required="required"
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
    </>
  )
}

export default CriarSala