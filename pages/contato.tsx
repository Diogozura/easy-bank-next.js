import { faBehance, faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import styled from 'styled-components';
import Footer from "../src/components/Footer";

import Topo from "../src/components/Header";
import { Titulo } from '../src/components/Titulo';
import { Box, Text } from "../src/screens/HomeScreen";

const RedesContato = styled.aside`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
`
const A = styled.a`
    margin: 10px;
`

export default function Error404() {
    return (
        <>
            <Head>
                <title>Contato - Easy Imobiliário </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topo children={undefined}  />

            <Titulo>Contato </Titulo>
         
           
            <Text style={{
                textAlign: 'center',
                padding: "20px"
            }}>
                Dúvida ou sugestão de melhorias para nosso projeto, chama no insta <br /> 
                Quer montar um projeto Exclusivo é na 2eSes
                </Text>
                
               

          

            <RedesContato>
             
                <Link href="https://www.instagram.com/easybankgame/" passHref>
                    <A><FontAwesomeIcon icon={faInstagram} className="fa-2x" color='red' /> </A>
                </Link>
              
                <Link href="mailto:easybankgame@gmail.com" passHref>
                    <A><FontAwesomeIcon icon={faEnvelope} className="fa-2x fa-wrench fa-gradient" aria-hidden="true" color="black" /> </A>
                </Link>
             
                <Link href="https://2esestechnology.com.br/" passHref>
                    <A><FontAwesomeIcon icon={faGlobe} className="fa-2x" /> </A>
                </Link>
            </RedesContato>
            <Footer style={{
                bottom: '0',
                position: 'fixed',
            }} />
        </>
    )
}

