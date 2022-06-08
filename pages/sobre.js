import Head from "next/head";
import Link from "next/link";
import Footer from "../src/components/Footer";
import Topo, { Title } from "../src/components/Header/header";
import { Box, Text } from "../src/screens/HomeScreen";

export default function Error404( ) {
    return (
        <>
             <Head>
            <title>Quem Somos - Easy Imobiliário </title>
             <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topo />

            <Title>Quem Somos?</Title>
            <Box>
            <Text>
                Somos a solução para seus problema
           </Text>
            </Box>
           
           <Footer/>
        </>
)
}