import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import { Meta } from '../../components/Meta';
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
    params: { slug: `article/${post.Slug}` },
  }));
  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://www.production-vohbr3y-blyxbfm5ri3hc.us-2.platformsh.site/api/slugify/slugs/detail-artikel/${params.slug}?populate=*`,
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

export default function CurugPandawa({ article }) {
  console.log(article);
  return (
    <>
      <Meta title={article.Judul} description={article.Artikel.Deskripsi} />
      <Navbar />
      <Container maxW={'container.xl'}>
        <VStack rowGap={'12'} my={10}>
          {/* <HStack columnGap={'6'}>
            {tags.map(tag => (
              <Text
                fontWeight={'semibold'}
                textAlign={'center'}
                key={tag.id}
                color={'gray.700'}>
                {tag.tag}
              </Text>
            ))}
          </HStack> */}
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
          {/* <Skeleton isLoaded padding={'0'} margin={'0'}>
            <img
              src={imageSample}
              alt={'image post'}
              className={
                'w-max max-h-screen object-cover rounded-tr-3xl rounded-bl-3xl aspect-video'
              }
              width='auto'
            />
          </Skeleton> */}
          <VStack my={'6'} w={'full'}>
            <ReactMarkdown
              className={'prose-slate min-w-fit lg:prose-xl'}
              remarkPlugins={[remarkGfm]}>{`${article.Konten}`}</ReactMarkdown>
          </VStack>
        </VStack>
      </Container>
      <Footer />
    </>
  );
}
