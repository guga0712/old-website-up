import { Box, Flex, Text, VStack } from "@chakra-ui/react";

export default function AllWeDo() {
    return (
        <VStack display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} borderTopRadius="12px" gap="15px" h="1000px" bg="black">
            <Text marginTop="20px" fontSize="24px" fontWeight="bold" color="white">Tudo Que Fazemos</Text>
            <Flex direction="column" gap="11px" borderRadius="12px" bg="#F1F1F1" w="305px" h="242px">
                <Text marginTop="50px" textAlign="center" fontSize="24px" fontWeight="bold">Marketing</Text>
                <Text fontSize="12px" textAlign="center">Estratégias - Relatórios real timing - Google Ads - Facebook Ads - Pinterest Ads - Antecipação de <br></br> erros ou oportunidades.</Text>
            </Flex>
            <Flex direction="column" gap="11px" borderRadius="12px" bg="#F1F1F1" w="305px" h="242px">
                <Text marginTop="50px" textAlign="center" fontSize="24px" fontWeight="bold">Suporte</Text>
                <Text fontSize="12px" textAlign="center">Dúvidas - Apoio técnico - Suporte a problemas operacionais - Migrações -  Treinamento de navegabilidade.</Text>
            </Flex>
            <Flex direction="column" gap="11px" borderRadius="12px" bg="#F1F1F1" w="305px" h="242px">
                <Text marginTop="50px" textAlign="center" fontSize="24px" fontWeight="bold">Design</Text>
                <Text fontSize="12px" textAlign="center">Social media - Design do site - Criativos para os anuncios - Relatorios mensais e semanais.</Text>
            </Flex>
        </VStack>
    )
}