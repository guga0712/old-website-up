import { Flex, Text } from "@chakra-ui/react";


export default function AboutMobi() {
    return (
        <Flex marginTop="30px" gap="20px" direction="column" display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} justifyContent="center">
            <Text fontSize="30px" textAlign="center" fontWeight="bold">Quem Somos</Text>
            <Text lineHeight="25px" textAlign="center" fontSize="15px">A UP é uma agência digital especializada no nicho <br></br> de moda feminina e acessórios. Trabalhamos como<br></br> colaboradores da sua marca, buscando de maneira<br></br> estratégica e efetiva alavancar seus resultados.</Text>
        </Flex>
    )
}