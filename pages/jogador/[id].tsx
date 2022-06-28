import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router';
import api from '../../src/services/auth/api';
import useCores from '../../src/services/auth/coresResta';
import React from "react";
import { AvatarCores, Body, Coress, Form } from '../jogador';
import Topo from '../../src/components/Header';
import { Titulo } from '../../src/components/Titulo';
import { authService } from '../../src/services/auth/authService';
import { Input } from '@mui/material';
import Image from 'next/image';
import { Botao } from '../../src/components/Botao';
import Footer from '../../src/components/Footer';

type User = {
    coresRestante: [{
        identificador: string;
        identificadorHexadecimal: string;
    }]
   
  }

type Props = {
  data: User;
}

export default function User({ data }: Props) {
    const router = useRouter()
    const restaCores = useCores()

    const cor = restaCores.data?.coresRestante

    const [values, setValues] = React.useState({
        usuario: '',
        cores: '',
    })
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
  return (
    <Body>
    <Topo children={undefined} />
    <Titulo>Hora de Criar Jogador</Titulo>
    <Form onSubmit={(event) => {
        event.preventDefault()
        console.log(values.cores, values.usuario)
        authService.criarJogador({
            identificador: values.cores,
            namePlayer: values.usuario,
        })

            .then(() => {
                router.push('/jogo')
            })
            .catch((err) => {
                console.log(err)
                alert("preencha todos os campos")
            })
    }}>
        <Input
            placeholder="Usuário" name="usuario"
            value={values.usuario}
            onChange={handlenChange}
        />
        <AvatarCores >
            {/* {content} */}
            {data.coresRestante.map((post) => (
                <Coress key={post.identificador}>

                         <label
                            htmlFor={post.identificador}>
                            <Image
                                width={80}
                                height={80}
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
                    </Coress>
            ))}
        </AvatarCores>


        <Botao>Confirmar</Botao>

    </Form>


   
    <Footer />
</Body>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [],
    fallback: 'blocking'
    // fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const response = await api.get(`/api/coresRestantes?keyRoom=${id}`);

  return {
    props: {
      id,
      data: response.data,
    }
  }
}