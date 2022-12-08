import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import {Box, Container, Flex, Grid, GridItem, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import AsimetriImage from "../components/landing/AsimetriImage";
import logo from '../public/logo/logo400.png';
import Image from 'next/image'

export default function About() {
    return (
        <>
            <Navbar/>
            <Container maxW={"container.xl"}>
                <VStack rowGap={"10"} my={"10"}>
                    <Heading textAlign={"center"} size={"2xl"}>Tentang <br/><span className={"text-colorone-500"}> Desa Wisata Cibeusi</span></Heading>
                    <AsimetriImage/>
                    <VStack gap={6}>
                        <Text color={"gray.400"} textAlign={"left"} minW={{
                            base: "full",
                            lg: "container.lg",
                        }} fontSize={{
                            base: "md",
                            lg: "lg"
                        }}>
                            Creeping his without wherein fill lesser of you set sea very. Let saying fly green were
                            without his waters midst waters over one man the won't one were years earth let. Don't fruit
                            him won't winged two let seas blessed a man multiply second waters beast his fruitful
                            likeness and to earth hath make one there him wherein which image. Called living female of.
                        </Text>
                        <Text color={"gray.400"} textAlign={"left"} minW={{
                            base: "full",
                            lg: "container.lg",
                        }} fontSize={{
                            base: "md",
                            lg: "lg"
                        }}>
                            Creeping his without wherein fill lesser of you set sea very. Let saying fly green were
                            without his waters midst waters over one man the won't one were years earth let. Don't fruit
                            him won't winged two let seas blessed a man multiply second waters beast his fruitful
                            likeness and to earth hath make one there him wherein which image. Called living female of.
                        </Text>
                    </VStack>
                </VStack>
            </Container>
            <HStack h={""} bgColor={"colorfive.main"} py={"10"}>
                <Container maxW={"container.xl"}>
                    <Grid templateColumns={{
                        base: "repeat(1, 1fr)",
                        lg: "repeat(2, 1fr)",
                    }} gap={"10"}>
                        <GridItem>
                            <VStack alignItems={"self-start"} justifyContent={"center"} h={"full"} gap={"4"}>
                                <Heading size={"2xl"}>Pengelolaan Wisata Desa Cibeusi</Heading>
                                <Text color={"gray.800"}>Creeping his without wherein fill lesser of you set sea very.
                                    Let saying fly green
                                    were without his waters midst waters over one man the won't one were years earth
                                    let.</Text>
                                <Text color={"gray.800"}>Creeping his without wherein fill lesser of you set sea very.
                                    Let saying fly green
                                    were without his waters midst waters over one man the won't one were years earth
                                    let.</Text>
                            </VStack>
                        </GridItem>
                        <GridItem>
                            <Flex alignContent={"center"} justifyContent={"center"} alignItems={"center"} h={"full"}>
                                <Image src={logo} alt={"logo"} className={"self-center"}/>
                            </Flex>
                        </GridItem>
                    </Grid>
                </Container>
            </HStack>
            <Container maxW={"container.xl"}>
                <VStack rowGap={"10"} my={"10"}>

                <Heading size={"xl"}>Lokasi <span className={"text-colorone-500"}> Desa Wisata Cibeusi</span></Heading>
                <Box w={"full"} h={"auto"} py={"10"} pos={"relative"} pb={"56.25%"}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5884434944446!2d107.7234755182639!3d-6.939689841946797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c323777ca3a1%3A0x355eff6734ed9167!2sUniversitas%20Pendidikan%20Indonesia%20-%20Kampus%20UPI%20Cibiru!5e0!3m2!1sen!2sid!4v1670474615600!5m2!1sen!2sid"
                         height={450} style={{border: 0}} allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" className={"absolute top-0 left-0 w-full h-full"} />
                </Box>
                </VStack>
            </Container>
            <Footer/>
        </>
    )
}