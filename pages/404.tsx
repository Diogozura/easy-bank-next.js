import Head from "next/head";
import Link from "next/link";
import Footer from "../src/components/Footer";
import Topo from "../src/components/Header";
import { Titulo } from "../src/screens/HomeScreen";

export default function Error404() {
    return (
        <>
            <Head>
            <title>Error 404 - Easy Imobiliário </title>
            </Head>
            <Topo children={undefined} />

            <Titulo>Error 404</Titulo>
            <Link href="/" prefetch>
                <a>Voltar para Home</a>
            </Link>
           <Footer/>
        </>
)
}