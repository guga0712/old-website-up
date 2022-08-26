import { Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image"
import capaMobile from "../../../public/capaMobile.png"

export default function BannerMobi() {
    return (

        <Flex display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }} justifyContent="center" alignItems="end">
            <Image src={capaMobile} />
            <Flex marginBottom="100px" alignItems="center" gap="20px" direction="column" position="absolute" >
                <Text textAlign="center" fontSize="24px" fontWeight="bold">Gerando Resultados</Text>
                <Text textAlign="center" fontSize="13px">Aencia Full-Service para quem sonha em <br></br> ter ou um já temum Negócio Digital</Text>
                <Button fontSize="13px" shadow={"lg"} w="151px" color="white" bg="#00DEB6">Fale Conosco</Button>

            </Flex>
        </Flex >


    )
}