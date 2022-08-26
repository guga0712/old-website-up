import { Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image"
import desktop from "../../../public/desktop.png"

export default function BannerDesk() {
    return (
        <>
            <Flex display={{ base: "none", sm: "none", md: "none", lg: "none", xl: "flex" }} justifyContent="center" alignItems="center" >
                <Image src={desktop} />
                <Flex marginRight="450px" position="absolute" direction="column" w="700px" >
                    <Text fontWeight="bold" fontSize={{ xl: "48px", lg: "40px" }}>Gerando resultados</Text>
                    <Text fontSize="16px">Agencia Full-Service para quem sonha em ter ou um já tem<br></br> um Negócio Digital</Text>
                    <Flex marginTop={{ lg: "60px", sm: "100px" }}>
                        <Button fontSize={{ base: "10px", md: "13px", lg: "15px" }} shadow={"lg"} w={{ base: "100px", md: "150px", lg: "170px" }} color="white" bg="#00DEB6">Fale Conosco</Button>
                    </Flex>
                </Flex>
            </Flex>
        </>
        // display={{ base: "none", sm: "none", md: "block", lg: "block" }}
        // display={{ base: "none", sm: "none", md: "block", lg: "block" }}

    )
}

