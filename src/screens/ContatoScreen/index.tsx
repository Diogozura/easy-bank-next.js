import Head from "next/head"
import Topo from "../../components/Header"
import { Texto, Titulo } from "../../components/Textos"
import styled from 'styled-components'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons"
import Footer from "../../components/Footer"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

const RedesContato = styled.aside`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
align-items: center;
`
const A = styled.a`
margin: 1em;
`

export default function Contato() {
    return (
        <>
            <Head>
                <title>Contato - Easy Imobiliário </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topo children={undefined}  />

            <Titulo>Contato</Titulo>
         
            <Texto >
                Dúvida ou sugestão de melhorias para nosso projeto, chama no insta <br /> 
                Quer montar um projeto Exclusivo é na 2eSes
            </Texto> 

            <RedesContato>

                <Card sx={{ maxWidth: 300, margin:'1m' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="/image/2s2.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" sx={{ fontFamily:'Museo700' }} component="div">
          2eSes technology 
          </Typography>
       
                        
                        <Typography><Texto> Esse site foi desenvolvido por 2eSes technology, entre em contato pelo nosso email ou Instagram .</Texto></Typography>
       
      </CardContent>
                    <CardActions >
                    <Link href="https://2esestechnology.com.br/" passHref>
                    <A><FontAwesomeIcon icon={faGlobe} className="fa-2x" /> </A>
                        </Link>
                        <Link href="https://2esestechnology.com.br/" passHref>
                    <A><FontAwesomeIcon icon={faInstagram} className="fa-2x" color='red' /> </A>
                        </Link>
                        <Link href="mailto:easybankgame@gmail.com" passHref>
                    <A><FontAwesomeIcon icon={faEnvelope} className="fa-2x fa-wrench fa-gradient" aria-hidden="true" color="black" /> </A>
                </Link>
      
      </CardActions>
                </Card>
                
                 <Card sx={{ maxWidth: 300, margin:'1m' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image="/image/github.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" sx={{ fontFamily:'Museo700' }} component="div">
         Docs
          </Typography>
       
                        
                        <Typography><Texto> Repositório do projeto do Easy imobiliário game </Texto></Typography>
       
      </CardContent>
                    <CardActions >
                    <Link href="https://2esestechnology.com.br/" passHref>
                    <A><FontAwesomeIcon icon={faGithub} className="fa-2x"  color="black"/> </A>
                        </Link>
                      
      
      </CardActions>
    </Card>
            </RedesContato>
            <Footer />
        </>
    )
}