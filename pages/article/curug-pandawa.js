import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import {Container, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import SampleImgae from '../../public/wisata/wisata-sample3.png'
import Image from 'next/image'
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
                            <Text fontWeight={"semibold"} textAlign={"center"} key={tag.id}
                                  color={"gray.700"}>{tag.tag}</Text>
                        ))}
                    </HStack>
                    <Heading textAlign={"center"} fontWeight={"extrabold"}>Curug Pandawa Nih Bos Lagi sering
                        hujan</Heading>
                    <Text fontWeight={"semibold"} color={"gray.700"}>
                        {"10 November 2022"} |{" "}
                        {"Iman Nurohman"}
                    </Text>
                    <img src={imageSample} alt={"image post"}
                           className={"lg:min-w-max max-h-screen object-cover rounded-tr-3xl rounded-bl-3xl aspect-video"}/>
                    <VStack my={"6"} w={"full"}>
                            <ReactMarkdown className={"prose-slate min-w-fit lg:prose-xl"} remarkPlugins={[remarkGfm]} >{`${markdown}`}</ReactMarkdown>
                    </VStack>
                </VStack>
            </Container>
            <Footer/>
        </>

    )
}