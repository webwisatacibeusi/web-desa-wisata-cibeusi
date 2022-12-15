import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import AsimetriImage from "../components/landing/AsimetriImage";
import {Container, Heading, VStack} from "@chakra-ui/react";
import GalleryItem from "../components/landing/GalleryItem";

export default function Gallery() {
    const imageSample = 'https://res.cloudinary.com/dz86avoad/image/upload/v1670647811/DSC_00864_19e4b46684.jpg';
    const images = [
        {
            src: imageSample
        },
        {
            src: imageSample
        },
        {
            src: imageSample
        },
        {
            src: imageSample
        },
        {
            src: imageSample
        },
        {
            src: imageSample
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
                        {images.map(image => (
                            <GalleryItem key={image.src} img={image.src}/>
                        ))}
                    </div>
                </VStack>
            </Container>

            <Footer/>

        </>
    );
}