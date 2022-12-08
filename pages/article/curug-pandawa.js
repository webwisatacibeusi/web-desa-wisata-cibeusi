import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import {Container, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import SampleImgae from '../../public/wisata/wisata-sample3.png'
import Image from 'next/image'
export default function CurugPandawa() {
    const tags = [
        {
            id: 1,
            tag: 'tag 1',
        },
        {
            id: 2,
            tag: 'tag 2',
        }, {
            id: 3,
            tag: 'tag 3',
        },
    ]
    return (
        <>
            <Navbar/>
            <Container mawW={"container.xl"}>
                <VStack rowGap={"12"} my={10}>
                    <HStack columnGap={"6"}>
                        {tags.map((tag) => (
                            <Text fontWeight={"semibold"} textAlign={"center"} key={tag.id} color={"gray.700"}>{tag.tag}</Text>
                        ))}
                    </HStack>
                    <Heading textAlign={"center"} fontWeight={"extrabold"}>Curug Pandawa Nih Bos Lagi sering hujan</Heading>
                    <Text fontWeight={"semibold"} color={"gray.700"}>
                        {"10 November 2022"} |{" "}
                        {"Iman Nurohman"}
                    </Text>
                    <Image src={SampleImgae} alt={"image post"} className={"lg:min-w-max object-cover rounded-tr-3xl rounded-bl-3xl aspect-video"}/>
                    <VStack my={"6"}>
                        <Text color={"gray.400"} textAlign={"left"} minW={{
                            base: "full",
                            lg: "container.lg",
                        }} fontSize={{
                            base: "md",
                            lg: "lg"
                        }}>
                            Creeping his without wherein fill lesser of you set sea very. Let saying fly green were without his waters midst waters over one man the won't one were years earth let. Don't fruit him won't winged two let seas blessed a man multiply second waters beast his fruitful likeness and to earth hath make one there him wherein which image. Called living female of.
                        </Text>
                        <Text color={"gray.400"} textAlign={"left"} minW={{
                            base: "full",
                            lg: "container.lg",
                        }} fontSize={{
                            base: "md",
                            lg: "lg"
                        }}>
                            Creeping his without wherein fill lesser of you set sea very. Let saying fly green were without his waters midst waters over one man the won't one were years earth let. Don't fruit him won't winged two let seas blessed a man multiply second waters beast his fruitful likeness and to earth hath make one there him wherein which image. Called living female of.
                        </Text>
                        <Text color={"gray.400"} textAlign={"left"} minW={{
                            base: "full",
                            lg: "container.lg",
                        }} fontSize={{
                            base: "md",
                            lg: "lg"
                        }}>
                            Creeping his without wherein fill lesser of you set sea very. Let saying fly green were without his waters midst waters over one man the won't one were years earth let. Don't fruit him won't winged two let seas blessed a man multiply second waters beast his fruitful likeness and to earth hath make one there him wherein which image. Called living female of.
                        </Text>
                        <Text color={"gray.400"} textAlign={"left"} minW={{
                            base: "full",
                            lg: "container.lg",
                        }} fontSize={{
                            base: "md",
                            lg: "lg"
                        }}>
                            Creeping his without wherein fill lesser of you set sea very. Let saying fly green were without his waters midst waters over one man the won't one were years earth let. Don't fruit him won't winged two let seas blessed a man multiply second waters beast his fruitful likeness and to earth hath make one there him wherein which image. Called living female of.
                        </Text>
                        <Text color={"gray.400"} textAlign={"left"} minW={{
                            base: "full",
                            lg: "container.lg",
                        }} fontSize={{
                            base: "md",
                            lg: "lg"
                        }}>
                            Creeping his without wherein fill lesser of you set sea very. Let saying fly green were without his waters midst waters over one man the won't one were years earth let. Don't fruit him won't winged two let seas blessed a man multiply second waters beast his fruitful likeness and to earth hath make one there him wherein which image. Called living female of.
                        </Text>
                    </VStack>
                </VStack>
            </Container>
            <Footer/>
        </>

    )
}