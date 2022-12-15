import {
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Box,
} from '@chakra-ui/react';
import Image from 'next/image';

import imageAbout from '../../public/landing/about.png';
export default function HeroAbout({ data }) {
  return (
    <Container maxW={'1268px'} marginY={'20'}>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 min-h-[400px]'>
        <VStack alignItems={'left'} justifyContent={'center'}>
          <Heading
            size={'3xl'}
            textColor={'colorone.main'}
            fontWeight={'extrabold'}>
            {data.Judul}
          </Heading>
          <Text textColor={'gray.600'}>{data.Deskripsi}</Text>
        </VStack>
        <Box
          display={'flex'}
          alignItems='center'
          justifyContent={'center'}
          // borderRadius={"lg"}
        >
          <Box
            borderTopLeftRadius={'3xl'}
            borderBottomRightRadius={'3xl'}
            overflow={'hidden'}>
            <img
              src={data.Gambar.url}
              alt='desa cibeusi'
              className={
                'object-cover transition-all duration-300 hover:scale-110'
              }
            />
          </Box>
        </Box>
      </div>
    </Container>
  );
}
