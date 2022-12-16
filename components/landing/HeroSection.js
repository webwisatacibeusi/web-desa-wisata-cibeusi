import {Box, Button, Container, Flex, Heading, IconButton, Link} from "@chakra-ui/react";
import HeroImage from "../../public/landing/bg-main.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {useState} from "react";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";
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

export default function HeroSection({data}) {

    const [slideRef, setSildeRef] = useState(null);
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2300,
        autoplaySpeed: 2300,
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
    }
    const [useCarousel, setUseCarousel] = useState([])
    data.Gambar.map(item => {
        useCarousel.push({
            id: item.id,
            title: item.name,
            image: item.url,
            to: "/wisata",
        })
    })
    return (
        <>

            <Slider {...settings} ref={setSildeRef} className={""}>
                {useCarousel.map(item => (
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
                                        justifySelf={"left"}>Explore</Button>
                                </Link>
                            </Container>
                        </div>
                        <img src={item.image} alt="image"
                             className={"absolute object-cover brightness-75 w-full sm:-translate-x-1/2 sm:-translate-y-1/2 sm:top-1/2 sm:left-1/2 top-0 left-0 h-full"}/>
                    </div>
                ))}
            </Slider>
        </>
    )
}