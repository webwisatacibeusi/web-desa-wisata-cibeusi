import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import AsimetriImage from "../components/landing/AsimetriImage";
import {Container, Heading, VStack} from "@chakra-ui/react";
import img1 from '../public/landing/1.png';
import img2 from '../public/landing/2.png';
import img3 from '../public/landing/3.png';
import img4 from '../public/landing/4.png';
import img5 from '../public/landing/5.png';
import img6 from '../public/landing/6.png'
import GalleryItem from "../components/landing/GalleryItem";

export default function Gallery() {
    const images = [
        {
            src: img1
        },
        {
            src: img2
        },
        {
            src: img3
        },
        {
            src: img4
        },
        {
            src: img5
        },
        {
            src: img6
        }
    ]
    return (
        <>
            <Navbar/>
            <Container maxW={"container.xl"}>
                <VStack rowGap={"10"} my={"10"}>
                    <Heading textAlign={"center"} size={"2xl"}>Gallery <br/><span className={"text-colorone-500"}> Desa Wisata Cibeusi</span></Heading>
                    <AsimetriImage/>
                    <div className="gap-4 space-y-4 sm:columns-2 md:columns-3">
                        <GalleryItem img={img1}/>
                        <GalleryItem img={img2}/>
                        <GalleryItem img={img3}/>
                        <GalleryItem img={img4}/>
                        <GalleryItem img={img5}/>
                        <GalleryItem img={img6}/>
                        <GalleryItem img={img5}/>
                        <GalleryItem img={img4}/>
                        <GalleryItem img={img6}/>
                        {images.map(image => {
                            <GalleryItem img={image.src}/>
                        })}
                    </div>
                </VStack>
            </Container>

            <Footer/>

        </>
    );
}