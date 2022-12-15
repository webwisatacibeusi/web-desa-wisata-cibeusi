import Navbar from '../../components/landing/Navbar';
import HeroSection from '../../components/landing/HeroSection';
import Footer from '../../components/landing/Footer';
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import WisataItem from '../../components/landing/WisataItem';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://www.production-vohbr3y-blyxbfm5ri3hc.us-2.platformsh.site/api/wisatas?populate=*',
    {
      method: 'GET',
    }
  );
  const data = await res.json();
  return {
    props: {
      wisata: data.data,
    },
  };
};
export default function Index({ wisata }) {
  console.log(wisata);
  return (
    <>
      <Navbar />
      <Box
        position={'relative'}
        h={'89vh'}
        _before={{
          content: '""',
          bgImage: 'url(/landing/bg-main.png)',
          bgSize: 'cover',
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 1,
          zIndex: '-999',
        }}>
        <Container maxW={'1268px'}>
          <Flex
            direction={'column'}
            w={'full'}
            h={'89vh'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'10'}>
            <Heading
              color={'white'}
              fontWeight={'extrabold'}
              size={{
                base: '3xl',
                md: '4xl',
              }}
              textAlign={'center'}>
              Selamat Datang di Desa Wisata Cibeusi
            </Heading>
          </Flex>
        </Container>
      </Box>
      <Container maxW={'container.xl'}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}>
          {wisata.map(wisata => (
            <GridItem key={wisata.id}>
              <WisataItem
                image={wisata.Gambar}
                to={`wisata/${wisata.Detail_Wisata.Slug}`}
                // rating={wisata.rating}
                title={wisata.Detail_Wisata.Nama}
                // location={wisata.Detail_Lokasi}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
