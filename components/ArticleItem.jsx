/* eslint-disable @next/next/no-img-element */
import { FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { HStack, Heading } from '@chakra-ui/react';

const ArticleItem = ({ children, img, title, publish, slug, tags }) => {
  return (
    <>
      <Link href={`/article/${slug}`}>
        <div className='flex flex-col w-[350px] md:w-[384px] h-full space-y-4'>
          <div className=' overflow-hidden w-[350px] md:w-auto rounded-tl-2xl rounded-br-2xl'>
            <img
              src={img}
              alt='post image'
              className='object-cover transition-all duration-300 hover:scale-110'
            />
          </div>
          <span className='text-thePrimary font-semibold text-sm'>
            {new Date(publish).toLocaleDateString('id-ID', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <HStack justifyContent={'space-between'}>
            <Heading>{title}</Heading>
          </HStack>
          <p className='text-gray-400 text-md'>{children}</p>
          <div className='flex gap-x-3'>
            {tags.map(tag => (
              <div
                className='rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start'
                key={tag.id}>
                {tag.Nama}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ArticleItem;
