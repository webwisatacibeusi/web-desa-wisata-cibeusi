/* eslint-disable @next/next/no-img-element */
import {Badge, Container, Heading, Text, VStack} from '@chakra-ui/react';
import Link from 'next/link';
import {useState} from "react";

export const Article = ({data}) => {
    const [popularPost, setPopularPost] = useState([]);
    const imageSample =
        'https://res.cloudinary.com/dz86avoad/image/upload/v1670647811/DSC_00864_19e4b46684.jpg';
    const subString = (str, length) => {
        if (str.length > length) {
            return str.substring(0, length) + '...';
        } else {
            return str;
        }
    }
    const tags = [
        {
            id: 1,
            tag: 'tag 1',
        },
        {
            id: 2,
            tag: 'tag 2',
        },
        {
            id: 3,
            tag: 'tag 3',
        },
    ];
    return (
        <>
            <Container maxW={'1268px'}>
                <VStack paddingY={'10'} spacing={'10'}>
                    <Heading
                        fontWeight={'extrabold'}
                        size={{
                            base: '2xl',
                            md: '3xl',
                            lg: '4xl',
                        }}>
                        Baca Articel <span className='text-colortwo-500'>Terbaru</span> Kami{' '}
                    </Heading>
                    <Text maxW={'700px'} align={'center'} color={'gray.500'}>
                        Lihat tentang Article terbaru kami, dan dapatkan informasi terbaru tentang Desa Wisata Cibeusi
                    </Text>
                    <Badge
                        colorScheme={'green'}
                        variant={'subtle'}
                        size={'xl'}
                        borderRadius={'full'}>
                        <Badge
                            variant={'subtle'}
                            borderRadius={'full'}
                            colorScheme={'gray'}>
                            Artikel Baru
                        </Badge>{' '}
                        Lihat Artikel Terbaru{' '}
                    </Badge>
                    <h1 className='text-2xl font-bold'>Postingan terkini</h1>
                    <div className='grid overflow-hidden md:grid-cols-2 grid-cols-1 grid-rows-1'>
                        {data.map((post, index) => {
                            if (index <= 0) {
                                return (
                                    <div className='md:row-span-2' key={post.id}>
                                        <div className='flex flex-col gap-y-5 justify-items-stretch'>
                                            <div className='rounded-tl-2xl rounded-br-2xl md:w-[592px] overflow-hidden'>
                                                <img
                                                    src={post.Thumbnail.url}
                                                    alt='tumbnail post'
                                                    className='transition-all duration-300 hover:scale-110 object-cover w-full'
                                                />
                                            </div>
                                            <h3 className='text-thePrimary font-semibold text-md'>
                                                {new Date(post.publishedAt).toLocaleDateString(
                                                    'id-ID',
                                                    {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    }
                                                )}
                                            </h3>
                                            <Link href={`/article/${post.Detail_Artikel.Slug}`}>
                                                <h1 className='text-xl font-semibold hover:underline'>
                                                    {post.Detail_Artikel.Judul}
                                                </h1>
                                            </Link>
                                            <p className='text-gray-400'>
                                                {subString(post.Detail_Artikel.Konten, 100)}
                                            </p>
                                            <div className='flex flex-wrap justify-start items-start space-x-3'>
                                                {post.Tags.map(tag => (
                                                    <div
                                                        className='rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start'
                                                        key={tag.id}>
                                                        {tag.Nama}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className='md:col-start-2' key={post.id}>
                                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                                            <div className='rounded-tl-2xl rounded-br-2xl overflow-hidden relative'>
                                                <img
                                                    src={post.Thumbnail.url}
                                                    alt='tumbnail post'
                                                    className='transition-all duration-300 hover:scale-110 object-cover w-full'
                                                />
                                            </div>
                                            <div className='flex flex-col gap-y-5'>
                                                <h3 className='text-thePrimary font-semibold text-md'>
                                                    {new Date(post.publishedAt).toLocaleDateString(
                                                        'id-ID',
                                                        {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric',
                                                        }
                                                    )}
                                                </h3>
                                                <Link href={`article/${post.Detail_Artikel.Slug}`}>
                                                    <h1 className='text-xl font-semibold hover:underline'>
                                                        {post.Detail_Artikel.Judul}
                                                    </h1>
                                                </Link>
                                                <p className='text-gray-400'>
                                                    {subString(post.Detail_Artikel.Konten, 100)} ...
                                                </p>
                                                <div className='flex flex-wrap justify-start items-start space-x-3'>
                                                    {post.Tags.map(tag => (
                                                        <div
                                                            className='rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start'
                                                            key={tag.id}>
                                                            {tag.Nama}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </VStack>
            </Container>
        </>
    );
};
