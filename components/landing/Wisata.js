/* eslint-disable @next/next/no-img-element */
import {
  Container,
  Heading,
  Text,
  VStack,
  Box,
  HStack,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

export default function Wisata({ data }) {
  const [slideRef, setSildeRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Box bgColor={'colorfive.500'}>
        <Container maxW={'1268px'}>
          <VStack spacing={'8'} paddingY={'10'}>
            <Heading color={'colorone.main'} fontWeight={'bold'} size={'3xl'}>
              Wisata
            </Heading>
            <Text color={'colorthree.main'}>{data.Judul}</Text>
            <Container maxW={'1268px'}>
              <Slider {...settings} ref={setSildeRef} className={''}>
                {data.Gambar.map(item => (
                  <div
                    key={item.id}
                    className={
                      'relative rounded-tl-2xl rounded-br-2xl overflow-hidden h-[170px] sm:h-[500px] md:min-h-[500px] w-[50px]'
                    }>
                    <img
                      src={item.url}
                      alt={'image'}
                      className={
                        'absolute brightness-[.75] object-cover bottom-0 h-auto w-auto'
                      }
                    />
                    <h1
                      className={
                        'absolute text-white font-semibold text-2xl bottom-0 right-0 p-2 md:p-6'
                      }>
                      {item.caption}
                    </h1>
                  </div>
                ))}
              </Slider>
            </Container>
            <HStack>
              <IconButton
                aria-label={'prev'}
                icon={<BiLeftArrow />}
                onClick={() => slideRef?.slickPrev()}
              />
              <IconButton
                aria-label={'next'}
                icon={<BiRightArrow />}
                onClick={() => slideRef?.slickNext()}
              />
            </HStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
