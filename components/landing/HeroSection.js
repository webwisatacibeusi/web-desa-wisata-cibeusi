import {Box, Button, Container, Flex, Heading, IconButton, Link} from "@chakra-ui/react";
import HeroImage from "../../public/landing/bg-main.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {useState} from "react";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";

const backup = () => {
    return (
        <>
            <Box
                position={"relative"}
                h={"89vh"}
                _before={{
                    content: '""',
                    bgImage: "url(/landing/bg-main.png)",
                    bgSize: "cover",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    opacity: 1,
                    zIndex: "-999",
                }}
            >
                <Container maxW={"1268px"}>
                    <Flex
                        direction={"column"}
                        w={"full"}
                        h={"89vh"}
                        justifyContent={"center"}
                        gap={"10"}
                    >
                        <Heading
                            color={"white"}
                            fontWeight={"extrabold"}
                            size={{
                                base: "3xl",
                                md: "4xl",
                                // lg: "5xl",
                            }}
                        >
                            Lorem Ipsum Dolor Sit Amet Ipsum Dolor Sit Amet
                        </Heading>
                        <Button
                            alignSelf={"flex-start"}
                            px={"100px"}
                            borderBottomLeftRadius={"none"}
                            borderTopRightRadius={"none"}
                        >
                            Explore
                        </Button>
                    </Flex>
                </Container>
            </Box>
        </>
    );
}


function NextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "none"}}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "none"}}
            onClick={onClick}
        />
    );
}

export default function HeroSection() {
    const urlImageSample = 'https://images.unsplash.com/photo-1670595441992-19edcb97700c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80';
    const [slideRef, setSildeRef] = useState(null);
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2300,
        autoplaySpeed: 2300,
        slidesToShow: 1,
        fade: true,
        // vertical: true,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        // adaptiveHeight: true,
        // arrows: false,
    }
    const carouselItem = [
        {
            id: 1,
            title: "All Hail hydra",
            image: urlImageSample,
            to: "wisata",
        },
        {
            id: 2,
            title: "Keep It Simple, Stupid",
            image: urlImageSample,
            to: "wisata",
        },
        {
            id: 2,
            title: "Index",
            image: urlImageSample,
            to: "wisata",
        },

    ]
    return (
        <>

            <Slider {...settings} ref={setSildeRef} className={""}>
                {carouselItem.map(item => (
                    <div key={item.id} className={"relative h-[89vh] overflow-hidden"}>
                        <div
                            className="flex flex-col container-xl absolute text-2xl font-semibold -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-5xl z-10 w-full">
                            <Container maxW={"container.xl"} display={"flex"} flexDirection={"column"} rowGap={"10"}>
                                <h1 className={"text-white"}>{item.title}</h1>
                                <Link href={item.to}>

                                <Button colorScheme={"colorone"} alignSelf={"left"} w={{
                                    base: "full",
                                    md: "sm",
                                }}
                                        borderBottomLeftRadius={"none"}
                                        borderTopRightRadius={"none"}
                                        justifySelf={"left"}>explore</Button>
                                </Link>
                            </Container>
                        </div>
                        <img src={item.image} alt="image"
                             className={"absolute object-cover brightness-75 w-full sm:-translate-x-1/2 sm:-translate-y-1/2 sm:top-1/2 sm:left-1/2 top-0 left-0 h-full"}/>
                    </div>
                ))}
            </Slider>
            {/*<IconButton aria-label={"prev"} icon={<BiLeftArrow/>}*/}
            {/*            onClick={() => slideRef?.slickPrev()}/>*/}
            {/*<IconButton aria-label={"next"} icon={<BiRightArrow/>}*/}
            {/*            onClick={() => slideRef?.slickNext()}/>*/}
        </>
    )
}
