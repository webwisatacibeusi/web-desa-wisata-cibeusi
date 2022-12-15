import { Heading, HStack, VStack, Text } from '@chakra-ui/react';
import { FiMap, FiStar } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export default function WisataItem(props) {
  return (
    <>
      <Link href={props.to}>
        <VStack gap={'6'} py={'10'}>
          <div className=' overflow-hidden w-[350px] md:w-auto rounded-tl-2xl rounded-br-2xl'>
            {props.image.map(image => (
              <img
                key={image.id}
                src={image.url}
                alt={props.name}
                className='object-cover  transition-all duration-300 hover:scale-110'
              />
            ))}
          </div>
          <HStack
            justifyContent={'space-between'}
            w={'full'}
            px={{
              base: '4',
              md: '6',
            }}>
            <Heading>{props.title}</Heading>
            <HStack>
              <Text>{props.rating}</Text>
              <FiStar />
            </HStack>
          </HStack>
          <HStack
            justifyContent={'start'}
            w={'full'}
            px={{
              base: '4',
              md: '6',
            }}>
            <FiMap />
            <Text>{props.location}</Text>
          </HStack>
        </VStack>
      </Link>
    </>
  );
}
