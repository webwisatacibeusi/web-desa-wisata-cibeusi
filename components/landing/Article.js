import {Badge, Container, Heading, HStack, Text, VStack, Box} from "@chakra-ui/react";
import {FaArrowRight} from "react-icons/fa";
import Image from "next/image";
import BlogImage from "../../public/landing/blog.png";
import Link from "next/link";


export default function Article(){
    const tags = [
        {
            id: 1,
            name: "Travel",
        },{
            id: 2,
            name: "Tag 2",
        },{
            id: 3,
            name: "Tag 3",
        }
    ]

    const twoLatestPosts = [
        {
            id: 1,
            title: "Lorem Ipsum Dolor Sit Amet",
            user: "John Doe",
            published_at: "10 November 2022",
            mini_body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc .",
        },
        {
            id: 2,
            title: "Lorem Ipsum Dolor Sit Amet",
            user: "John Doe",
            published_at: "10 November 2022",
            mini_body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc .",
        },
    ]
    return (
        <>
            <Container maxW={"1268px"}>
                <VStack paddingY={"10"} spacing={"10"}>
                    <Heading fontWeight={"extrabold"} size={{
                        base: "2xl",
                        md: "3xl",
                        lg: "4xl",
                    }}>Baca Articel <span className="text-colortwo-500">Terbaru</span> Kami </Heading>
                    <Text maxW={"700px"} align={"center"} color={"gray.500"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a quam vel justo semper luctus tempus sit amet mauris. Morbi orci ligula, fermentum nec diam pharetra, lobortis vestibulum lorem.</Text>
                    <Badge colorScheme={"green"} variant={"subtle"} size={"xl"} borderRadius={"full"}><Badge variant={"subtle"} borderRadius={"full"} colorScheme={"gray"}>Artikel Baru</Badge> Lihat Artikel Terbaru   </Badge>
                    <div className="grid overflow-hidden sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 grid-rows-1 gap-2 ">
                        <div className="sm:row-span-2">
                            <div className="flex flex-col gap-y-5 justify-items-stretch">
                                <div className="rounded-xl">
                                    <Image
                                        src={BlogImage}
                                        alt="tumbnail post"
                                        className="rounded-tl-2xl rounded-br-2xl object-cover w-full"
                                    />
                                </div>
                                <h3 className="text-colorone-500 font-semibold text-md">
                                    {"Titam Septian"} •{" "} {"2 September 2022"}
                                </h3>
                                <Link href="#">
                                    <h1 className="text-xl font-semibold hover:underline">
                                        title
                                    </h1>
                                </Link>
                                <p className="text-gray-400">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis consequuntur distinctio error exercitationem, expedita fugiat illo  ...
                                </p>
                                <div className="flex flex-wrap justify-start items-start space-x-3">
                                    {tags.map((tag) => (
                                        <div key={tag.id} className="rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start">
                                            {tag.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {twoLatestPosts.map((post, index) => {
                                return (
                                    <div key={post.id} className="sm:col-start-2">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            <div className="rounded-xl">
                                                <Image
                                                    src={BlogImage}
                                                    alt="tumbnail post"
                                                    className="rounded-tl-2xl rounded-br-2xl object-cover w-full"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-y-5">
                                                <h3 className="text-colorone-500 font-semibold text-md">
                                                    {post.user} •{" "}
                                                    {post.published_at}
                                                </h3>
                                                <Link href={"#"}>
                                                    <h1 className="text-xl font-semibold hover:underline">
                                                        {post.title}
                                                    </h1>
                                                </Link>
                                                <p className="text-gray-400">
                                                    {post.mini_body} ...
                                                </p>
                                                <div className="flex flex-wrap justify-start items-start space-x-3">
                                                    {tags.map((tag) => (
                                                        <div key={tag.id} className="rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start">
                                                            {tag.name}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                        })}
                    </div>
                </VStack>
            </Container>
        </>
    )
}