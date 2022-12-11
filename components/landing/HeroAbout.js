import {
    Container,
    Heading,
    HStack,
    Text,
    VStack,
    Box,
} from "@chakra-ui/react";
import Image from "next/image";

import imageAbout from "../../public/landing/about.png";
export default function HeroAbout() {
    return (
        <Container maxW={"1268px"} marginY={"20"}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 min-h-[400px]">
                <VStack alignItems={"left"} justifyContent={"center"}>
                    <Heading size={"3xl"} textColor={"colorone.main"} fontWeight={"extrabold"}>
                        Desa Cibeusi
                    </Heading>
                    <Text textColor={"gray.600"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </VStack>
                <Box
                    display={"flex"}
                    alignItems="center"
                    justifyContent={"center"}
                    // borderRadius={"lg"}
                >
                    <Box borderTopLeftRadius={'3xl'}  borderBottomRightRadius={'3xl'} overflow={"hidden"}>
                        <Image
                            src={imageAbout}
                            alt="desa cibeusi"
                            width={"auto"}
                            height={"auto"}
                            className={"object-cover transition-all duration-300 hover:scale-110"}
                        />
                    </Box>
                </Box>
            </div>
        </Container>
    );
}
