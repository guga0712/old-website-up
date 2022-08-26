import { Flex, Text } from "@chakra-ui/react";

export default function VisaoMobi() {
    return (
        <Flex marginTop="30px" gap="20px" direction="column" display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} justifyContent="center">
            <Text fontSize="30px" textAlign="center" fontWeight="bold">Visão</Text>
            <Text lineHeight="25px" textAlign="center" fontSize="15px">A UP é uma agência digital especializada no nicho de moda feminina e acessórios. Trabalhamos como colaboradores da sua marca, buscando de maneira estratégica e efetiva alavancar seus resultados.</Text>
        </Flex>
    )
}