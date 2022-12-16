import {Heading} from '@chakra-ui/react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import HeroAbout from '../components/landing/HeroAbout';
import Wisata from '../components/landing/Wisata';
import {Article} from '../components/landing/Article';
import Footer from '../components/landing/Footer';

export const getStaticProps = async () => {
    const res = await fetch(
        'https://www.production-vohbr3y-blyxbfm5ri3hc.us-2.platformsh.site/api/artikel-terbaru?populate[0]=Artikels&populate[1]=Artikels.Thumbnail&populate[2]=Artikels.Tags&populate[3]=Artikels.Detail_Artikel',
        {
            method: 'GET',
        }
    );
    const data = await res.json();
    const res2 = await fetch(
        'https://www.production-vohbr3y-blyxbfm5ri3hc.us-2.platformsh.site/api/carousel?populate=Gambar',
        {
            method: 'GET',
        }
    );
    const data2 = await res2.json();
    const res3 = await fetch(
        'https://www.production-vohbr3y-blyxbfm5ri3hc.us-2.platformsh.site/api/deskripsi-wisata?populate=*',
        {
            method: 'GET',
        }
    );
    const data3 = await res3.json();

    const res4 = await fetch(
        "https://www.production-vohbr3y-blyxbfm5ri3hc.us-2.platformsh.site/api/carousel?populate=*",
        {
            method: "GET"
        })
    const data4 = await res4.json()
    return {
        props: {
            article: data.data,
            carousel: data2.data,
            wisata: data3.data,
            hero: data4.data
        },
    };
};

export default function Home({article, carousel, wisata, hero}) {
    return (
        <>
            <Navbar/>
            <HeroSection data={hero}/>
            <HeroAbout data={wisata}/>
            <Wisata data={carousel}/>
            <Article data={article.Artikels}/>
            <Footer/>
        </>
    );
}
