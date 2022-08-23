import { Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image"
import desktop from "../../../public/desktop.png"

export default function BannerHome() {
    return (
        <Flex alignItems="center">
            <Image src={desktop} height={700} width={2100} />
            <Flex direction="column" justifyContent="center" marginLeft="300px" w="700px" position="absolute">
                <Text fontWeight="bold" fontSize={{ base: '74px', md: '40px', lg: '50px' }}>Gerando resultados</Text>
                Agencia Full-Service para quem sonha em ter ou um já tem<br></br> um Negócio Digital
                <Flex marginTop="60px">
                    <Button fontSize={["10px", "13px", "15px"]} shadow={"lg"} w={["80px", "100px", "170px"]} color="white" bg="#00DEB6">Fale Conosco</Button>
                </Flex>
            </Flex>
        </Flex >
    )
}

