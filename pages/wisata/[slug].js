import { Container, Heading, VStack, Box } from '@chakra-ui/react';
import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import { Meta } from '../../components/Meta';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const getStaticPaths = async () => {
  const res = await fetch(
    'https://www.production-vohbr3y-blyxbfm5ri3hc.us-2.platformsh.site/api/wisatas?populate=*',
    {
      method: 'GET',
    }
  );
  const data = await res.json();
  const paths = data.data.map(post => ({
    params: { slug: `wisata/${post.Slug}` },
  }));
  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://www.production-vohbr3y-blyxbfm5ri3hc.us-2.platformsh.site/api/slugify/slugs/detail-wisata/${params.slug}?populate=*`,
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

export default function CurugPandawa({ wisata }) {
  const sampleData = {
    id: 1,
    title: 'Curug Pandawa',
    image:
      'https://res.cloudinary.com/dz86avoad/image/upload/v1670647811/DSC_00864_19e4b46684.jpg',
    description: 'Curug Pandawa Nih Bos Lagi sering hujan',
    tags: [
      {
        id: 1,
        tag: 'tag 1',
      },
      {
        id: 2,
        tag: 'tag 2',
      },
    ],
    date: '10 November 2022',
    maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5884434944446!2d107.7234755182639!3d-6.939689841946797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c323777ca3a1%3A0x355eff6734ed9167!2sUniversitas%20Pendidikan%20Indonesia%20-%20Kampus%20UPI%20Cibiru!5e0!3m2!1sen!2sid!4v1670474615600!5m2!1sen!2sid',
  };
  return (
    <>
      <Meta title={wisata.Nama} description={''} />
      <Navbar />
      <Container maxW={'container.xl'}>
        <VStack alignItems={'start'} w={'full'} gap={'6'}>
          <Heading>{wisata.Nama}</Heading>
          {/* <img
            src={sampleData.image}
            alt={sampleData.title}
            className={'rounded-tl-2xl rounded-br-2xl'}
          /> */}
          <Heading size={'md'}>Deskripsi</Heading>
          <Container
            maxW={'container.md'}
            justifyContent={'center'}
            display={'flex'}
            alignItems={'center'}
            alignContent={'center'}>
            <ReactMarkdown
              className={
                'prose-slate min-w-fit lg:prose-xl prose-img:rounded-tl-2xl prose-img:rounded-br-2xl prose-headings:underline'
              }
              remarkPlugins={[remarkGfm]}>
              {`${wisata.Konten}`}
            </ReactMarkdown>
          </Container>
          <Box w={'full'} h={'auto'} py={'10'} pos={'relative'} pb={'56.25%'}>
            <iframe
              src={sampleData.maps}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className={'absolute top-0 left-0 w-full h-full'}
            />
          </Box>
        </VStack>
      </Container>
      <Footer />
    </>
  );
}
