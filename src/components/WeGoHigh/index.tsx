import { Flex, Text } from "@chakra-ui/react";

export default function WeGoHigh() {
    return (
        <Flex alignItems="center" justifyContent="center" w="100%" h="300px">
            <Flex gap="20px" direction="column">
                <Text fontFamily="raleway" textAlign="center" fontWeight="bold" fontSize="60px">We go High</Text>
                <Text fontWeight="hairline" fontSize="25px">Vamos juntos alcançar o resultado desejado para o seu negocio?</Text>
            </Flex>
        </Flex>
    )
}