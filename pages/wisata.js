import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import Footer from "../components/landing/Footer";
import {Box, Button, Center, Container, Flex, Grid, GridItem, Heading} from "@chakra-ui/react";
import WisataItem from "../components/landing/WisataItem";
import WisataFoto from "../public/wisata/wisata-sample.png";

export default function Wisata() {
    const WisataData = [
        {
            id: 1,
            title: "Wisata cibeusi",
            location: "subang, subang",
            image: WisataFoto,
            rating: 4.5,
            to: '/wisata/curug-pandawa'
        },
        {
            id: 2,
            title: "Wisata cibeusi",
            location: "subang, subang",
            image: WisataFoto,
            rating: 4.5,
            to: '/wisata/curug-pandawa'
        },{
            id: 2,
            title: "Wisata cibeusi",
            location: "subang, subang",
            image: WisataFoto,
            rating: 4.5,
            to: '/wisata/curug-pandawa'
        },{
            id: 2,
            title: "Wisata cibeusi",
            location: "subang, subang",
            image: WisataFoto,
            rating: 4.5,
            to: '/wisata/curug-pandawa'
        },{
            id: 2,
            title: "Wisata cibeusi",
            location: "subang, subang",
            image: WisataFoto,
            rating: 4.5,
            to: '/wisata/curug-pandawa'
        },{
            id: 2,
            title: "Wisata cibeusi",
            location: "subang, subang",
            image: WisataFoto,
            rating: 4.5,
            to: '/wisata/curug-pandawa'
        },
    ]
    return (
        <>
            <Navbar/>
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
                        alignItems={"center"}
                        gap={"10"}
                    >
                        <Heading
                            color={"white"}
                            fontWeight={"extrabold"}
                            size={{
                                base: "3xl",
                                md: "4xl"
                            }}
                            textAlign={"center"}
                        >
                            Selamat Datang di Desa Wisata Cibeusi
                        </Heading>
                    </Flex>
                </Container>
            </Box>
            <Container maxW={"container.xl"}>
                <Grid templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                }}>
                    {WisataData.map((wisata) => (
                    <GridItem key={wisata.id}>
                        <WisataItem image={wisata.image} to={wisata.to} rating={wisata.rating} title={wisata.title} location={wisata.location}/>
                    </GridItem>
                    ))}
                </Grid>
            </Container>
            <Footer/>
        </>
    )
}