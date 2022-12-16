import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import {Meta} from '../../components/Meta';
import {
    Container,
    Heading,
    HStack,
    Text,
    VStack,
    Skeleton,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const getStaticPaths = async () => {
    const res = await fetch(
        'https://www.production-vohbr3y-blyxbfm5ri3hc.us-2.platformsh.site/api/artikels?populate=*',
        {
            method: 'GET',
        }
    );
    const data = await res.json();
    const paths = data.data.map(post => ({
        params: {slug: `${post.Detail_Artikel.Slug}`},
    }));
    return {
        paths: paths,
        fallback: 'blocking',
    };
};

export const getStaticProps = async ({params}) => {
    const res = await fetch(
        `https://www.production-vohbr3y-blyxbfm5ri3hc.us-2.platformsh.site/api/slugify/slugs/detail-artikel/${params.slug}??populate[0]=Artikel&populate[1]=Artikel.Thumbnail&populate[2]=Artikel.Tags`,
        {
            method: 'GET',
        }
    );
    const data = await res.json();
    return {
        props: {
            article: data.data,
        },
    };
};

export default function CurugPandawa({article}) {
    const urlImageSample = 'https://images.unsplash.com/photo-1670595441992-19edcb97700c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80';
    return (
        <>
            <Meta title={article.Judul} description={article.Artikel.Deskripsi}/>
            <Navbar/>
            <Container maxW={'container.xl'}>
                <VStack rowGap={'12'} my={10}>
                    <HStack>
                        {article.Artikel.Tags.map((tag,index) => (
                            <Text
                                fontWeight={'semibold'}
                                textAlign={'center'}
                                key={tag.id}
                                color={'gray.700'}>
                                {index == 0 ? "" : "| "}{tag.Nama}
                            </Text>
                        ))}
                    </HStack>
                    <Heading textAlign={'center'} fontWeight={'extrabold'}>
                        {article.Judul}
                    </Heading>
                    <Text fontWeight={'semibold'} color={'gray.700'}>
                        {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </Text>
                    <Skeleton isLoaded padding={'0'} margin={'0'}>
                        <img
                            src={article.Artikel.Thumbnail.url}
                            alt={'cover'}
                            className={
                                'w-max max-h-screen object-cover rounded-tr-3xl rounded-bl-3xl aspect-video'
                            }
                            width='auto'
                        />
                    </Skeleton>
                    <VStack my={'6'} w={'full'}>
                        <ReactMarkdown
                            className={'prose-slate min-w-fit lg:prose-xl prose-img:rounded-tl-2xl prose-img:rounded-br-2xl prose-headings:underline'}
                            remarkPlugins={[remarkGfm]}>{`${article.Konten}`}</ReactMarkdown>
                    </VStack>
                </VStack>
            </Container>
            <Footer/>
        </>
    );
}
