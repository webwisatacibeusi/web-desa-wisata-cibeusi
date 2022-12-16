import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import AsimetriImage from "../components/landing/AsimetriImage";
import {Container, Heading, VStack} from "@chakra-ui/react";
import GalleryItem from "../components/landing/GalleryItem";

export const getStaticProps = async () => {
    const res = await fetch(
        'https://www.production-vohbr3y-blyxbfm5ri3hc.us-2.platformsh.site/api/galeri?populate=*',
        {
            method: 'GET',
        }
    );

    const data = await res.json();

    return {
        props: {
            gallery: data.data,
        },
    };
};


export default function Gallery(data) {
    let images = data.gallery.List_Gambar;

    return (
        <>
            <Navbar/>
            <Container maxW={"container.xl"}>
                <VStack rowGap={"10"} my={"10"}>
                    <Heading textAlign={"center"} size={"2xl"}>Gallery <br/><span className={"text-colorone-500"}> Desa Wisata Cibeusi</span></Heading>
                    <div className="gap-4 space-y-4 sm:columns-2 md:columns-3">
                        {images.map(image => (
                            <GalleryItem
                                key={image.id}
                                img={image.formats.medium.url}/>
                        ))}
                    </div>
                </VStack>
            </Container>

            <Footer/>

        </>
    );
}