import {Container, Heading, Text, VStack, Box, HStack, IconButton, Flex} from "@chakra-ui/react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {useState} from "react";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";
import WisataImage from '../../public/landing/wisata.png';
import Image from "next/image";

export default function Wisata() {
    const urlImageSample = 'https://images.unsplash.com/photo-1670595441992-19edcb97700c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80';
    const [slideRef, setSildeRef] = useState(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const corouselItem = [
        {
            id: 1,
            title: "Wisata",
            image: urlImageSample,
        },
        {
            id: 2,
            title: "Wisata 2",
            image: urlImageSample,
        },
        {
            id: 3,
            title: "Wisata 3",
            image: urlImageSample,
        },
    ]
    return (
        <>
            <Box bgColor={"colorfive.500"}>
                <Container maxW={'1268px'}>
                    <VStack spacing={"8"} paddingY={"10"}>
                        <Heading color={"colorone.main"} fontWeight={"bold"} size={"3xl"}>Wisata</Heading>
                        <Text color={"colorthree.main"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                            quam vel justo semper luctus tempus sit amet mauris. Morbi orci ligula</Text>
                        <Container maxW={'1268px'}>
                            <Slider {...settings} ref={setSildeRef} className={""}>
                                {corouselItem.map((item) => (
                                    <div
                                        className={"relative rounded-tl-2xl rounded-br-2xl overflow-hidden h-[170px] sm:h-[500px] md:min-h-[500px] w-[50px]"}>
                                        <img src={item.image} alt={"image"}
                                             className={"absolute brightness-[.75] object-cover bottom-0 h-auto w-auto"}/>
                                        <h1 className={"absolute text-white font-semibold text-2xl bottom-0 right-0 p-2 md:p-6"}>{item.title}</h1>
                                    </div>
                                ))}
                            </Slider>
                        </Container>
                        <HStack>
                            <IconButton aria-label={"prev"} icon={<BiLeftArrow/>}
                                        onClick={() => slideRef?.slickPrev()}/>
                            <IconButton aria-label={"next"} icon={<BiRightArrow/>}
                                        onClick={() => slideRef?.slickNext()}/>
                        </HStack>
                    </VStack>
                </Container>
            </Box>
        </>
    )
}