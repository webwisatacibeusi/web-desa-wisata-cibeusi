import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import { Container, Link } from '@chakra-ui/react';
import ArticleItem from '../../components/ArticleItem';
import { Article as ArticleComponent } from '../../components/landing/Article';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://www.production-vohbr3y-blyxbfm5ri3hc.us-2.platformsh.site/api/artikel-terbaru?populate[0]=Artikels&populate[1]=Artikels.Thumbnail&populate[2]=Artikels.Tags&populate[3]=Artikels.Detail_Artikel',
    {
      method: 'GET',
    }
  );
  const res2 = await fetch(
    'https://www.production-vohbr3y-blyxbfm5ri3hc.us-2.platformsh.site/api/artikels?populate=*',
    {
      method: 'GET',
    }
  );
  const data2 = await res2.json();
  const data = await res.json();

  return {
    props: {
      article: data.data,
      articles: data2.data,
    },
  };
};

export default function Article({ article, articles }) {
  console.log(articles);

  return (
    <>
      <Navbar />
      <Container
        my={{
          base: '6',
          md: '10',
        }}
        maxW={'container.xl'}
        display={'flex'}
        flexDir={'column'}
        columnGap={'10'}
        rowGap={'10'}>
        <ArticleComponent data={article.Artikels} />
        <h1 className='text-2xl font-bold my-10'>Semua Postingan</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {articles.map(article => (
            <ArticleItem
              key={article.id}
              img={article.Thumbnail.url}
              title={article.Detail_Artikel.Judul}
              publish={article.publishedAt}
              slug={article.Detail_Artikel.Slug}
              tags={article.Tags}>
              {article.Deskripsi}
            </ArticleItem>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}
