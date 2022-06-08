import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../src/components/Footer";
import Topo, { Title } from "../src/components/Header/header";
import { Box, Text } from "../src/screens/HomeScreen";

export default function Error404( ) {
    return (
        <>
             <Head>
            <title>Contato - Easy Imobiliário </title>
             <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topo />

            <Title>Contato dos Desenvolvedores</Title>
            <Box>
                
            <Text>
                Desevolvedor Front end
            </Text>
            </Box>
            <Box>
            <Text>
                Desevolvedor back end
            </Text>
            </Box>
            <Box>
            <Text>
               Design, UX/UI
            </Text>
            </Box>

            <Box>
                <a>insta</a>
            </Box>
           
           <Footer/>
        </>
)
}