import { Flex, Text, Button } from "@chakra-ui/react";

export default function Investimento() {
    return (
        <>
            <Flex gap={{ base: "10px", md: "20px", lg: "20px" }} justifyContent={{ base: "center", sm: "center", md: "center" }} w="100%" h={{ base: "170px", md: "300px", lg: "300px" }} >
                <Flex gap="10px" direction="column">
                    <Text textAlign="center" color="#00DEB6" fontSize={{ base: "40px", sm: "30px", md: "60px" }} fontWeight="bold">+30</Text>
                    <Text fontSize={{ base: "11px", sm: "15px", md: "20px" }} textAlign="center" color="gray" fontWeight="hairline">Mais de 30 negocios<br></br>alcançados</Text>
                </Flex>
                <Flex border="1px solid gray" h={{ base: "100px", sm: "100px", md: "200px", lg: "200px" }}  ></Flex>
                <Flex gap="10px" direction="column">
                    <Text textAlign="center" color="#00DEB6" fontSize={{ base: "40px", sm: "30px", md: "60px" }} fontWeight="bold">+7m</Text>
                    <Text fontSize={{ base: "11px", sm: "15px", md: "20px" }} color="gray" fontWeight="hairline">Mais de 7 milhões em<br></br>lucro para os clientes</Text>
                </Flex>
                <Flex border="1px solid gray" h={{ base: "100px", sm: "100px", md: "200px", lg: "200px" }} ></Flex>
                <Flex gap="10px" direction="column">
                    <Text textAlign="center" color="#00DEB6" fontSize={{ base: "40px", sm: "30px", md: "60px" }} fontWeight="bold">+15m</Text>
                    <Text fontSize={{ base: "11px", sm: "15px", md: "20px" }} color="gray" fontWeight="hairline">Investidos no ano</Text>
                </Flex>
            </Flex>
            <Flex justifyContent="center">
                <Button fontSize={{ base: "11px", sm: "12px", md: "15px" }} shadow={"lg"} w={{ base: "100px,", sm: "100px", md: "170px" }} color="white" bg="#00DEB6">Fale Conosco</Button>
            </Flex>
        </>
    )
}