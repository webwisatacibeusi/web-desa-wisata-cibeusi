import {Container, Heading, Text, VStack, Box, HStack, IconButton, Flex} from "@chakra-ui/react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {useState} from "react";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";
import WisataImage from '../../public/landing/wisata.png';

export default function Wisata() {
    const [slideRef, setSildeRef] = useState(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    }
    const corouselItem = [
        {
            id: 1,
            title: "Wisata",
            image: WisataImage,
        },
        {
            id: 2,
            title: "Wisata 2",
            image: WisataImage,
        },
        {
            id: 3,
            title: "Wisata 3",
            image: WisataImage,
        },
    ]
    return (
        <>
            <Box bgColor={"colorfive.500"}>
                <Container maxW={'1268px'} >
                    <VStack spacing={"8"} paddingY={"10"}>
                        <Heading color={"colorone.main"} fontWeight={"bold"} size={"3xl"}>Wisata</Heading>
                        <Text color={"colorthree.main"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a quam vel justo semper luctus tempus sit amet mauris. Morbi orci ligula</Text>
                        <Container maxW={'1268px'}>
                            <Slider {...settings} ref={setSildeRef} styles={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                                {corouselItem.map((item) => (
                                    <Flex key={item.id} alignItems={"start"} h={"full"} justifyContent={"center"}>
                                        <Box  maxW={"400px"} h={"280px"} pos={"relative"} overflow={"hidden"} borderTopLeftRadius={'3xl'}  borderBottomRightRadius={'3xl'}     _before={{
                                            content: '""',
                                            bgImage: 'url(/landing/wisata.png)',
                                            bgSize: 'cover',
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            left: 0,
                                            bottom: 0,
                                            opacity: 1,
                                            zIndex: -999
                                        }} >
                                            <VStack p={6} alignItems={"start"} h={"full"} justifyContent={"end"}>
                                                <Heading color={"white"}>{item.title}</Heading>
                                            </VStack>
                                        </Box>
                                    </Flex>
                                ))}
                            </Slider>
                        </Container>
                        <HStack>
                            <IconButton aria-label={"prev"} icon={<BiLeftArrow/>} onClick={() => slideRef?.slickPrev()} />
                            <IconButton aria-label={"next"} icon={<BiRightArrow/>} onClick={() => slideRef?.slickNext()} />
                        </HStack>
                    </VStack>
                </Container>
            </Box>
        </>
    )
}