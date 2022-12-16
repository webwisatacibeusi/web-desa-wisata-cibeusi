/* eslint-disable react/no-unescaped-entities */
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import {
    Box,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    Text,
    VStack,
} from '@chakra-ui/react';
import AsimetriImage from '../components/landing/AsimetriImage';
import logo from '../public/logo/logo400.png';
import Image from 'next/image';

export const getStaticProps = async () => {
    const res = await fetch(
        'https://www.production-vohbr3y-blyxbfm5ri3hc.us-2.platformsh.site/api/tentang?populate=*',
        {
            method: 'GET',
        }
    );
    const data = await res.json();

    const res2 = await fetch(
        'https://www.production-vohbr3y-blyxbfm5ri3hc.us-2.platformsh.site/api/deskripsi-wisata?populate=*',
        {
            method: 'GET',
        }
    );
    const data2 = await res2.json();
    return {
        props: {
            data: data.data,
            about: data2.data
        },
    };
};

export default function About({data, about}) {
    return (
        <>
            <Navbar/>
            <Container maxW={'container.xl'}>
                <VStack rowGap={'10'} my={'10'}>
                    <Heading textAlign={'center'} size={'2xl'}>
                        <span className={'text-colorone-500'}> {data.Judul}</span>
                    </Heading>
                    <AsimetriImage/>
                    <VStack gap={6}>
                        <Text
                            color={'gray.400'}
                            textAlign={'left'}
                            minW={{
                                base: 'full',
                                lg: 'container.lg',
                            }}
                            fontSize={{
                                base: 'md',
                                lg: 'lg',
                            }}>
                            {data.Deskripsi}
                        </Text>
                    </VStack>
                </VStack>
            </Container>
            <HStack h={''} bgColor={'colorfive.main'} py={'10'}>
                <Container maxW={'container.xl'}>
                    <Grid
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            lg: 'repeat(2, 1fr)',
                        }}
                        gap={'10'}>
                        <GridItem>
                            <VStack
                                alignItems={'self-start'}
                                justifyContent={'center'}
                                h={'full'}
                                gap={'4'}>
                                <Heading size={'2xl'}>Pengelolaan Wisata Desa Cibeusi</Heading>
                                <Text color={'gray.800'}>
                                    {about.Deskripsi}
                                </Text>
                            </VStack>
                        </GridItem>
                        <GridItem>
                            <Flex
                                alignContent={'center'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                h={'full'}>
                                <Image src={logo} alt={'logo'} className={'self-center'}/>
                            </Flex>
                        </GridItem>
                    </Grid>
                </Container>
            </HStack>
            <Container maxW={'container.xl'}>
                <VStack rowGap={'10'} my={'10'}>
                    <Heading size={'xl'}>
                        Lokasi{' '}
                        <span className={'text-colorone-500'}> Desa Wisata Cibeusi</span>
                    </Heading>
                    <Box w={'full'} h={'auto'} py={'10'} pos={'relative'} pb={'56.25%'}>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31709.809281790454!2d107.74763196634868!3d-6.556212946517052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e693c919ece3ed5%3A0x630f121657291f0!2sSubang%2C%20Subang%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1671191083744!5m2!1sen!2sid'
                            height={450}
                            style={{border: 0}}
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                            className={'absolute top-0 left-0 w-full h-full'}
                        />
                    </Box>
                </VStack>
            </Container>
            <Footer/>
        </>
    );
}
