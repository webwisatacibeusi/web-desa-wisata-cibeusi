import {Container, Heading, Text, VStack, Box} from "@chakra-ui/react";
import WisataFoto from "../../public/wisata/wisata-sample2.png"
import Image from "next/image";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";

export default function CurugPandawa() {
    return (
        <>

            <Navbar/>
            <Container maxW={"container.xl"}>

                <VStack w={"full"} alignItems={"start"} w={"full"} gap={"6"}>
                    <Heading>Curug Pandawa Lime</Heading>
                    <Image src={WisataFoto} alt="Curug Pandawa Lime"/>
                    <Heading size={"md"}>Deskripsi</Heading>
                    <Text fontSize={"md"} color={"gray.500"} lineHeight={"8"}>
                        Creeping his without wherein fill lesser of you set sea very. Let saying fly green were without
                        his waters midst waters over one man the won't one were years earth let. Don't fruit him won't
                        winged two let seas blessed a man multiply second waters beast his fruitful likeness and to
                        earth hath make one there him wherein which image. Called living female of.Creeping his without
                        wherein fill lesser of you set sea very. Let saying fly green were without
                        his waters midst waters over one man the won't one were years earth let. Don't fruit him won't
                        winged two let seas blessed a man multiply second waters beast his fruitful likeness and to
                        earth hath make one there him wherein which image. Called living female of.Creeping his without
                        wherein fill lesser of you set sea very. Let saying fly green were without
                        his waters midst waters over one man the won't one were years earth let. Don't fruit him won't
                        winged two let seas blessed a man multiply second waters beast his fruitful likeness and to
                        earth hath make one there him wherein which image. Called living female of.
                    </Text>
                    <Text fontSize={"md"} color={"gray.500"} lineHeight={"8"}>
                        Creeping his without wherein fill lesser of you set sea very. Let saying fly green were without
                        his waters midst waters over one man the won't one were years earth let. Don't fruit him won't
                        winged two let seas blessed a man multiply second waters beast his fruitful likeness and to
                        earth hath make one there him wherein which image. Called living female of.Creeping his without
                        wherein fill lesser of you set sea very. Let saying fly green were without
                        his waters midst waters over one man the won't one were years earth let. Don't fruit him won't
                        winged two let seas blessed a man multiply second waters beast his fruitful likeness and to
                        earth hath make one there him wherein which image. Called living female of.Creeping his without
                        wherein fill lesser of you set sea very. Let saying fly green were without
                        his waters midst waters over one man the won't one were years earth let. Don't fruit him won't
                        winged two let seas blessed a man multiply second waters beast his fruitful likeness and to
                        earth hath make one there him wherein which image. Called living female of.
                    </Text>
                    <Box w={"full"} h={"auto"} py={"10"}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5884434944446!2d107.7234755182639!3d-6.939689841946797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c323777ca3a1%3A0x355eff6734ed9167!2sUniversitas%20Pendidikan%20Indonesia%20-%20Kampus%20UPI%20Cibiru!5e0!3m2!1sen!2sid!4v1670474615600!5m2!1sen!2sid"
                            width={1286} height={450} style={{border: 0}} allowFullScreen loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>
                    </Box>

                </VStack>
            </Container>
            <Footer/>
        </>
    )
}