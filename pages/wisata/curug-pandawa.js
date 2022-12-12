import {Container, Heading, Text, VStack, Box,AspectRatio} from "@chakra-ui/react";
import WisataFoto from "../../public/wisata/wisata-sample2.png"
import Image from "next/image";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function CurugPandawa() {
    const imageSample = 'https://res.cloudinary.com/dz86avoad/image/upload/v1670647811/DSC_00864_19e4b46684.jpg';
    const markdown = `A paragraph with *emphasis* and **strong importance**.
## Heading
![DSC00882.JPG](https://res.cloudinary.com/dz86avoad/image/upload/v1670650491/DSC_00882_ed830ed272.jpg)
Creeping his without wherein fill lesser of you set sea very. Let saying fly green were without his waters midst waters over one man the won't one were years earth let. Don't fruit him won't winged two let seas blessed a man multiply second waters beast his fruitful likeness and to earth hath make one there him wherein which image. Called living female of.
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| 1 | 2 |

`;
    const sampleData =
        {
            id: 1,
            title: 'Curug Pandawa',
            image: 'https://res.cloudinary.com/dz86avoad/image/upload/v1670647811/DSC_00864_19e4b46684.jpg',
            description: 'Curug Pandawa Nih Bos Lagi sering hujan',
            tags: [
                {
                    id: 1,
                    tag: 'tag 1',
                },
                {
                    id: 2,
                    tag: 'tag 2',
                },
            ],
            date: '10 November 2022',
            maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5884434944446!2d107.7234755182639!3d-6.939689841946797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c323777ca3a1%3A0x355eff6734ed9167!2sUniversitas%20Pendidikan%20Indonesia%20-%20Kampus%20UPI%20Cibiru!5e0!3m2!1sen!2sid!4v1670474615600!5m2!1sen!2sid'
        }
    ;
    return (
        <>

            <Navbar/>
            <Container maxW={"container.xl"}>
                <VStack w={"full"} alignItems={"start"} w={"full"} gap={"6"}>
                    <Heading>{sampleData.title}</Heading>
                    <img src={sampleData.image} alt={sampleData.title} className={"rounded-tl-2xl rounded-br-2xl"}/>
                    <Heading size={"md"}>Deskripsi</Heading>
                    <Container maxW={"container.md"} justifyContent={'center'} display={"flex"} alignItems={"center"} alignContent={"center"}>
                    <ReactMarkdown
                        className={"prose-slate min-w-fit lg:prose-xl prose-img:rounded-tl-2xl prose-img:rounded-br-2xl prose-headings:underline"}
                        remarkPlugins={[remarkGfm]}>{`${markdown}`}
                    </ReactMarkdown>
                    </Container>
                    <Box w={"full"} h={"auto"} py={"10"} pos={"relative"} pb={"56.25%"}>
                        <iframe
                            src={sampleData.maps}
                            height={450} style={{border: 0}} allowFullScreen loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={"absolute top-0 left-0 w-full h-full"}/>
                    </Box>
                </VStack>
            </Container>
            <Footer/>
        </>
    )
}