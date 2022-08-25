import { Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image"
import desktop from "../../../public/desktop.png"
import capaMobile from "../../../public/capaMobile.png"

export default function BannerHome() {
    return (
        <>
            {/* desktop */}
            <Flex display={{ base: "none", sm: "none", md: "block", lg: "block" }} alignItems="center" >
                <Image src={desktop} fallbackSrc='https://via.placeholder.com/150' />
            </Flex>
            {/* Mobile */}
            <Flex display={{ base: "block", sm: "block", md: "none", lg: "none" }} alignItems="center" >
                <Image src={capaMobile} />

            </Flex >
            {/* desktop */}
            <Flex border="1px solid red" marginTop="300px" display={{ base: "none", sm: "none", md: "block", lg: "block" }} direction="column" justifyContent="center" marginLeft="300px" w="700px" >
                <Text fontWeight="bold" fontSize={{ base: '40px', sm: '50px', lg: '60px' }}>Gerando resultados</Text>
                <Text fontSize={{ base: '20px', md: '15px', lg: '20px' }}>Agencia Full-Service para quem sonha em ter ou um já tem<br></br> um Negócio Digital</Text>
                <Flex marginTop={{ lg: "60px", sm: "100px" }}>
                    <Button fontSize={{ base: "10px", md: "13px", lg: "15px" }} shadow={"lg"} w={{ base: "100px", md: "150px", lg: "170px" }} color="white" bg="#00DEB6">Fale Conosco</Button>
                </Flex>
            </Flex>

            {/* mobile */}
            <Flex border="1px solid red" w="" display={{ base: "block", sm: "block", md: "none", lg: "none" }}>
                <Text fontSize="25px" fontWeight="bold">Gerando Resultados</Text>
            </Flex>
        </>
    )
}

