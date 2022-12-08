import {Heading, HStack, VStack, Text} from "@chakra-ui/react";
import {FiMap, FiStar} from "react-icons/all";
import Image from "next/image";

export default function WisataItem(props) {
    return (
        <>
            <VStack gap={"6"} py={"10"}>
                <Image src={props.image} alt={props.title}/>
                <HStack justifyContent={"space-between"} w={"full"} px={{
                    base: "4",
                    md: "6",
                }}>
                    <Heading>{props.title}</Heading>
                    <HStack>
                        <Text>{props.rating}</Text>
                        <FiStar/>
                    </HStack>
                </HStack>
                <HStack justifyContent={"start"} w={"full"} px={{
                    base: "4",
                    md: "6",
                }}>
                    <FiMap/>
                    <Text>{props.location}</Text>
                </HStack>
            </VStack>
        </>
    )
}