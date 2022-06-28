import { faBehance, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Footer from "../../components/Footer"
import styled from 'styled-components'
import Head from "next/head"
import { Texto, Titulo } from "../../components/Textos"
import Topo from "../../components/Header"

const Dev = [{
    id:'1',
    nome: 'Diogo',
    cor:'#22192C',
    funcao: 'Front-end',
    redes: [{
        instagram: 'https://www.instagram.com/diogo__zura/',
        linkldin: 'https://www.linkedin.com/in/diogo-silva-santos-251bb5192/',
        github: 'https://github.com/diogozura',
        be:'https://www.behance.net/diogozura'
    }]
}, {
    id:'2',
    nome: 'Danilo',
    cor:"#E6332A",
    funcao: 'Back-End',
    redes: [{
        instagram: 'https://www.instagram.com/filitecxz/',
        linkldin: 'https://www.linkedin.com/in/danilo-silva-santos-555b5396/',
        github:'https://github.com/dancxz'
       
    }]
    },
    {
        id:'3',
        nome: 'Iago',
        cor:'#951B81',
        funcao: 'Design',
        redes: [{
            instagram: 'https://www.instagram.com/_inhagu/',
            linkldin: 'https://www.linkedin.com/in/iago-de-sousa-santos-4502a2164/',
            be:'https://www.behance.net/iagodesousa'
        }]
    }
]

export default function Sobre() {
    return (
        <>
        <Head>
            <title>Quem Somos - Easy Imobiliário </title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Topo children={undefined} />

        <Titulo >Quem Somos?</Titulo>
        
        <Texto style={{
            maxWidth: '600px',
            textAlign: 'center',
            padding: '20px',
            margin: 'auto',
        }}>
               Somos desenvolvedores da 2eSes tecnology , um projeto que temos como objetivo ajudar seu negocio alavancar, questões de automação e site é com a gente , se quer um projeto pessoa entre em contato 
            </Texto>
            <>
                {Dev.map((user) => (
                    <Desenvolvedores key={user.id} style={{
                        background:`${user.cor}`
                    }}>
                         <Image style={{
                borderRadius: '50px'
            }}
                src={`/user/${user.nome}.png`}
                alt="ad"
                width={300}
                height={360}

                        />
                        <aside>
                            <h2>{user.nome}</h2> 
                            <br/>
                            <h3>{user.funcao}</h3>
                            <br/>
                            <div>
                            <h3>Contato</h3>
                         <Lista >{user.redes.map((rede) => (
                          <>
                              <Item><a href={`${rede.linkldin}`}><FontAwesomeIcon icon={faLinkedin} className="fa-3x" color="white" /></a></Item> 
                              <Item><a href={`${rede.instagram}`}><FontAwesomeIcon icon={faInstagram} className="fa-3x" color="white" /></a></Item>
                              <Item>{rede.github? <a href={`${rede.github}`}><FontAwesomeIcon icon={faGithub} className="fa-3x"  color="white"/></a> : null}</Item>
                              <Item>{rede.be? <a href={`${rede.be}`}><FontAwesomeIcon icon={faBehance} className="fa-3x"  color="white"/></a> : null}</Item>

                                  {/* <a href={`${rede.be}`}><FontAwesomeIcon icon={faBehance} className="fa-2x"  color="black"/></a> */}
                          </>
                       
                      ))}</Lista>
                            </div>
                      
                        </aside>
                      
        </Desenvolvedores>
                ))}
            </>

        <Footer />
    </>
    )
}


const Desenvolvedores = styled.article`
display: flex;
justify-content: flex-start;
align-items: center;
flex-Wrap: wrap;
text-Align: center;
margin: 2em;
width: 645px;
border-radius: 50px;
color: white;
@media only screen and (max-width: 850px){
    justify-content: space-around;
    width: 90%;
}
`
const Lista = styled.ul`
    display: flex;
    flex-wrap: wrap;
`
const Item = styled.li`
    text-decoration: none;
    list-style: none;
    margin: 0 1em;
`