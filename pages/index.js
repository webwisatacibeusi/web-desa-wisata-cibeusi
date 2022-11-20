
import {Heading} from "@chakra-ui/react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import HeroAbout from "../components/landing/HeroAbout";
import Wisata from "../components/landing/Wisata";
import Article from "../components/landing/Article";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <HeroAbout/>
        <Wisata/>
        <Article/>
        <Footer/>
    </>
  )
}
