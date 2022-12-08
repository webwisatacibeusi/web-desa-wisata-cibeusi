import {FiArrowUpRight} from "react-icons/fi";
import Image from 'next/image'
import Link from 'next/link'
import {HStack, Heading} from "@chakra-ui/react";

const ArticleItem = ({children, img, title, author, publish, seeDetail, tags}) => {
    return (
        <div className="flex flex-col w-[350px] md:w-[384px] h-full space-y-4">
            <div className=" overflow-hidden w-[350px] md:w-auto">
                <Image
                    src={img}
                    alt="post image"
                    className="object-cover rounded-xl"
                />
            </div>
            <span className="text-thePrimary font-semibold text-sm">
                {author} • {publish}
            </span>
            <HStack justifyContent={"space-between"}>
                <Heading>{title}</Heading>

                <Link href={seeDetail}>
                    <FiArrowUpRight

                    />
                </Link>
            </HStack>
            <p className="text-gray-400 text-md">{children}</p>
            {/* tags */}
            <div className="flex gap-x-3">
                {tags.map((tag) => (
                    <div className="rounded-full px-3 bg-gray-50 text-gray-500 font-semibold self-start">
                        {tag.tag}
                    </div>))}
            </div>
        </div>);
};

export default ArticleItem;