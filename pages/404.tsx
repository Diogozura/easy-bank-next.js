import Head from "next/head";
import Link from "next/link";
import Footer from "../src/components/Footer";
import Topo from "../src/components/Header";
import { Titulo } from "../src/screens/HomeScreen";

export default function Error404( ) {
    return (
        <>
            <Head>
            <title>Criar player - Easy Imobiliário </title>
             <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topo children={undefined} />

            <Titulo margin="2em">Error 404</Titulo>
            <Link href="/">
                <a>Voltar para Home</a>
            </Link>
           <Footer/>
        </>
)
}