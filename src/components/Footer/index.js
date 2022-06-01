
import Link from 'next/link'
import styled from 'styled-components'


const Rodape = styled.footer`
    background-color:#22192C ;
    display: flex;
    justify-content: space-around;
    padding: 15px;
    width:100%;
    bottom: 0;
   
    @media only screen and (max-width: 550px) {
        flex-direction: column;
        align-items: center;
    }
   
`

const A = styled.a`
color: #FFFF;
padding: 1px;
text-decoration: none;
cursor: pointer;
@media only screen and (max-width: 550px){
    margin: 5px;
}
&:hover{    
    color: #FFFF;
    text-decoration: underline;
    }
`


export default function Footer() {

    return (

        <Rodape>


            <Link href="/termosUso">
                <A>Termos de Uso</A>    
            </Link>
            <Link href="/termosPrivacidade">
                <A>
                    Política de Privacidade
                </A>

            </Link>
            <A href="https://2esestechnology.com.br/">Desenvolvido por 2eSes</A>

        </Rodape>)
}