import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import Footer from "../../components/Footer"
import styled from 'styled-components'
import Head from "next/head"
import { Texto, Titulo } from "../../components/Textos"
import Topo from "../../components/Header"

const Dev = [{
    id:'1',
    nome: 'Diogo',
    funcao: 'Front-end',
    redes: [{
        instagram: '',
        linkldin: '',
        github:'diogozura'
    }]
}, {
    id:'2',
    nome: 'Iago',
    funcao: 'Front-end',
    redes: [{
        instagram: '',
        linkldin: '',
       
    }]
    },
    {
        id:'3',
        nome: 'Danilo',
        funcao: 'Front-end',
        redes: [{
            instagram: '',
            linkldin: '',
            github:'dancxz'
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

        <Titulo style={{
            marginTop: '3em',
        }}>Quem Somos?</Titulo>
        
        <Texto style={{
            maxWidth: '600px',
            textAlign: 'center',
            padding: '20px',
            margin: 'auto',
        }}>
               Somos desenvolvedores da 2eSes tecnology , um projeto que temos como objetivo ajudar seu negocio alavancar, questões de automação e site é com a gente , se quer um projeto pessoa entre em contato 
            </Texto>
            <ul>
                {Dev.map((user) => (
                    <>
                        <li>{user.nome}</li>
                        <li>{user.redes.map((rede) => (
                            <p>{rede.github}</p>
                        ))}</li>
        </>
                ))}
            </ul>

            

        <Devs
            nome={"Diogo"}
            cor={'#22192C'}
            funcao={"Front-End "}
            link={"https://www.linkedin.com/in/diogo-silva-santos-251bb5192/"} children={undefined} color={undefined} rede={undefined} rede2={undefined} link2={undefined} />

        <Devs
            nome={"Danilo"}
            cor={'#E6332A'}
            funcao={"Back-End "}
            rede={'Github'}
            link={"https://www.linkedin.com/in/danilo-silva-santos-555b5396/"} children={undefined} color={undefined} rede2={undefined} link2={undefined} />

        <Devs
            nome={"Iago"}
            cor={'#951B81'}
            funcao={"Design"}
            rede={'Be'}
            link={"https://www.linkedin.com/in/iago-de-sousa-santos-4502a2164/"} children={undefined} color={undefined} rede2={undefined} link2={undefined} />

        <Footer />
    </>
    )
}

function Devs({ children, nome, cor,color, rede, rede2, link, link2, funcao,  ...props }) {
    const userImage = `/user/${nome}.png`

    return (
        <Desenvolvedores style={{
            background:`${cor}`
        }}>
            <Image style={{
                borderRadius: '50px'
            }}
                src={userImage}
                alt="ad"
                width={300}
                height={360}

            />
            <aside style={{
                margin: '50px'
            }}>
                <h2>{nome}</h2>
                <h2>{funcao}</h2>
                <Link href={link}><a> <FontAwesomeIcon icon={faLinkedin} className="fa-3x fa-inverse" color={color} /> </a></Link>
            </aside>


        </Desenvolvedores>
    )

}
const Desenvolvedores = styled.article`
display: flex;
justify-content: flex-start;
align-items: center;
flex-Wrap: wrap;
text-Align: center;
margin: 2em;
width: 600px;
border-radius: 50px;
color: white;
@media only screen and (max-width: 850px){
    justify-content: space-around;
    width: 90%;
}
`