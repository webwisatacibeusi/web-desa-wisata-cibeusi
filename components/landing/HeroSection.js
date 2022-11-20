import {Box, Button, Container, Flex, Heading} from "@chakra-ui/react";
import HeroImage from '../../public/landing/bg-main.png';


export default function HeroSection(){
    return (
        <>
            <Box position={"relative"} h={"89vh"} _before={{
                content: '""',
                bgImage: 'url(/landing/bg-main.png)',
                bgSize: 'cover',
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                opacity: 1,
                zIndex: '-999',
            }}>
                <Container maxW={"1268px"}>
                    <Flex direction={"column"} w={"full"} h={"89vh"} justifyContent={"center"} gap={"10"}>
                        <Heading color={"white"} fontWeight={"extrabold"} size={"4xl"}>Lorem Ipsum Dolor Sit Amet Ipsum Dolor Sit Amet</Heading>
                        <Button alignSelf={"flex-start"} px={"100px"} borderBottomLeftRadius={"none"} borderTopRightRadius={"none"}>Explore</Button>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}