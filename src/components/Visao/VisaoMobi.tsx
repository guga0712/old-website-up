import { Flex, Text } from "@chakra-ui/react";

export default function VisaoMobi() {
    return (
        <>
            <Flex marginTop="30px" gap="20px" direction="column" display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} justifyContent="center">
                <Text fontSize="30px" textAlign="center" fontWeight="bold">Visão</Text>
                <Text lineHeight="25px" textAlign="center" fontSize="15px">A UP é uma agência digital especializada no nicho de moda feminina e acessórios. Trabalhamos como colaboradores da sua marca, buscando de maneira estratégica e efetiva alavancar seus resultados.</Text>
            </Flex>
            <Flex marginTop="80px" display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} direction="column" h="600px">
                <Text fontSize="16px" textAlign="center" fontWeight="bold">Faturamento</Text>
                <Text fontSize="10px" color="#828282" textAlign="center">Nos últimos 2 anos</Text>
            </Flex>
        </>
    )
}