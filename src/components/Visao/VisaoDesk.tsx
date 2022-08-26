import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image"
import Artboard1 from "../../../public/Artboard1.png"


export default function VisaoDesk() {
    return (

        <Flex display={{ base: "none", sm: "none", md: "none", lg: "flex" }} gap="20px" w="100%" h="500px" justifyContent="center"  >
            <Flex gap="20px" direction="column">
                <Text fontWeight="bold" fontSize="66px">Visão</Text>
                <Text fontSize="26px" >Acreditamos em uma visão de mundo<br></br>
                    colaborativa, onde nós criamos juntos. O<br></br>
                    que buscamos é de maneira positiva criar<br></br>
                    uma solição pratica ne assertiva para o seu <br></br>Negócio</Text>
            </Flex>
            <Image height="600px" width="700px" src={Artboard1} />
        </Flex>
    )
}