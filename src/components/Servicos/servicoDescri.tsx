import { Flex, Text } from "@chakra-ui/react";


export default function ServicoDescri() {
    return (
        <>
            <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} marginLeft="40px" w="300px" borderBottom="1px solid #3F3F3F" >
                <Text fontSize="24px" color="#BBBABA">
                    00
                </Text>
            </Flex>
            <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} direction="column" marginLeft="40px" h="150px">
                <Text marginTop="10px" fontSize="24px" fontWeight="extrabold">Projeto de e-commerce</Text>
                <Text fontSize="16px">OneKey provides best-in-class security for encrypted assets without compromising accessibility and</Text>
            </Flex  >
            <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} marginLeft="40px" w="300px" borderBottom="1px solid #3F3F3F" >
                <Text fontSize="24px" color="#BBBABA">
                    01
                </Text>
            </Flex>
            <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} direction="column" marginLeft="40px" h="150px">
                <Text marginTop="10px" fontSize="24px" fontWeight="extrabold">Suporte e melhorias</Text>
                <Text fontWeight="normal" fontSize="16px">OneKey provides best-in-class security for encrypted assets without compromising accessibility and</Text>
            </Flex>
            <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} marginLeft="40px" w="300px" borderBottom="1px solid #3F3F3F" >
                <Text fontSize="24px" color="#BBBABA">
                    02
                </Text>
            </Flex>
            <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} direction="column" marginLeft="40px" h="200px">
                <Text marginTop="10px" fontSize="24px" fontWeight="extrabold">Marketin digital<br></br> de performance</Text>
                <Text fontSize="16px">OneKey provides best-in-class security for encrypted assets without compromising accessibility and</Text>
            </Flex>

        </>
    )
}