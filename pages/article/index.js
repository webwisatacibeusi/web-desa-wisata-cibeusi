import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import {Container, Link} from "@chakra-ui/react";
import ArticleItem from "../../components/ArticleItem";
import imgWisata from '../../public/wisata/wisata-sample.png'
import Image from 'next/image'

export default function Article() {
    const imageSample = 'https://res.cloudinary.com/dz86avoad/image/upload/v1670647811/DSC_00864_19e4b46684.jpg';
    const tags = [
        {
            id: 1,
            tag: 'tag 1',
        },
        {
            id: 2,
            tag: 'tag 2',
        }, {
            id: 3,
            tag: 'tag 3',
        },
    ]
    const articles = [
        {
            id: 1,
            img: imageSample,
            title: "title 1",
            author: "author 1",
            publish: "20 Januari 2022",
            tags: tags,
            seeDetail: "/article/curug-pandawa",
            desc: " cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 1,
            img: imageSample,
            title: "title 1",
            author: "author 1",
            publish: "20 Januari 2022",
            tags: tags,
            seeDetail: "/article/curug-pandawa",
            desc: " cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 1,
            img: imageSample,
            title: "title 1",
            author: "author 1",
            publish: "20 Januari 2022",
            tags: tags,
            seeDetail: "/article/curug-pandawa",
            desc: " cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 1,
            img: imageSample,
            title: "title 1",
            author: "author 1",
            publish: "20 Januari 2022",
            tags: tags,
            seeDetail: "/article/curug-pandawa",
            desc: " cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 1,
            img: imageSample,
            title: "title 1",
            author: "author 1",
            publish: "20 Januari 2022",
            tags: tags,
            seeDetail: "/article/curug-pandawa",
            desc: " cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 1,
            img: imageSample,
            title: "title 1",
            author: "author 1",
            publish: "20 Januari 2022",
            tags: tags,
            seeDetail: "/article/curug-pandawa",
            desc: " cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 1,
            img: imageSample,
            title: "title 1",
            author: "author 1",
            publish: "20 Januari 2022",
            tags: tags,
            seeDetail: "/article/curug-pandawa",
            desc: " cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ]
    const threeLattestPost = [

        {
            id: 1,
            img: imageSample,
            title: "title 1",
            author: "author 1",
            publish: "20 Januari 2022",
            tags: tags,
            seeDetail: "/article/curug-pandawa",
            desc: " cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 2,
            img: imageSample,
            title: "title 1",
            author: "author 1",
            publish: "20 Januari 2022",
            tags: tags,
            seeDetail: "/article/curug-pandawa",
            desc: " cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 3,
            img: imageSample,
            title: "title 1",
            author: "author 1",
            publish: "20 Januari 2022",
            tags: tags,
            seeDetail: "/article/curug-pandawa",
            desc: " cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },

    ]
    return (
        <>
            <Navbar/>
            <Container my={{
                base: "6",
                md: "10",
            }} maxW={"container.xl"} display={"flex"} flexDir={"column"} columnGap={"10"} rowGap={"10"}>
                <h1 className="text-2xl font-bold">Postingan terkini</h1>
                <div className="grid overflow-hidden md:grid-cols-2 grid-cols-1 md:grid-rows-2 grid-rows-1 gap-y-4">
                    {threeLattestPost.map((post, index) => {
                        if (index === 0) {
                            return (
                                <div className="md:row-span-2" key={post.id}>
                                    <div className="flex flex-col gap-y-5 justify-items-stretch">
                                        <div className="rounded-tl-2xl rounded-br-2xl md:w-[592px] overflow-hidden">
                                            <img
                                                src={post.img}
                                                alt="tumbnail post"
                                                className="transition-all duration-300 hover:scale-110 object-cover w-full"
                                            />
                                        </div>
                                        <h3 className="text-thePrimary font-semibold text-md">
                                            {post.author} •{" "}
                                            {post.publish}
                                        </h3>
                                        <Link href={post.seeDetail}>
                                            <h1 className="text-xl font-semibold hover:underline">
                                                {post.title}
                                            </h1>
                                        </Link>
                                        <p className="text-gray-400">
                                            {post.desc} ...
                                        </p>
                                        <div className="flex flex-wrap justify-start items-start space-x-3">
                                            {post.tags.map((tag) => (
                                                <div
                                                    className="rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start">
                                                    {tag.tag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="md:col-start-2">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        <div className="rounded-tl-2xl rounded-br-2xl overflow-hidden relative">
                                            <img
                                                src={post.img}
                                                alt="tumbnail post"
                                                className="object-cover transition-all duration-300 hover:scale-110 object-cover w-full h-full"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-y-5">
                                            <h3 className="text-thePrimary font-semibold text-md">
                                                {post.author} •{" "}
                                                {post.publish}
                                            </h3>
                                            <Link href={post.seeDetail}>
                                                <h1 className="text-xl font-semibold hover:underline">
                                                    {post.title}
                                                </h1>
                                            </Link>
                                            <p className="text-gray-400">
                                                {post.desc} ...
                                            </p>
                                            <div className="flex flex-wrap justify-start items-start space-x-3">
                                                {post.tags.map((tag) => (
                                                    <div
                                                        className="rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start">
                                                        {tag.tag}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                <h1 className="text-2xl font-bold my-10">Semua Postingan</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map(article => (
                        <ArticleItem key={article.id} img={article.img} title={article.title} author={article.author}
                                     publish={article.publish} tags={article.tags} seeDetail={article.seeDetail}>
                            {article.desc}
                        </ArticleItem>
                    ))}
                </div>
            </Container>
            <Footer/>
        </>
    )
}