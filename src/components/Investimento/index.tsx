import { Flex, Text, Button } from "@chakra-ui/react";

export default function Investimento() {
    return (
        <>
            <Flex gap="20px" justifyContent="center" w="100%" h="300px" >
                <Flex gap="10px" direction="column">
                    <Text textAlign="center" color="#00DEB6" fontSize="60px" fontWeight="bold">+30</Text>
                    <Text fontSize="20px" textAlign="center" color="gray" fontWeight="hairline">Mais de 30 negocios<br></br>alcançados</Text>
                </Flex>
                <Flex border="1px solid gray" h="200px"  ></Flex>
                <Flex gap="10px" direction="column">
                    <Text textAlign="center" color="#00DEB6" fontSize="60px" fontWeight="bold">+7m</Text>
                    <Text fontSize="20px" color="gray" fontWeight="hairline">Mais de 7 milhões em<br></br>lucro para os clientes</Text>
                </Flex>
                <Flex border="1px solid gray" h="200px" ></Flex>
                <Flex gap="10px" direction="column">
                    <Text textAlign="center" color="#00DEB6" fontSize="60px" fontWeight="bold">+15m</Text>
                    <Text fontSize="20px" color="gray" fontWeight="hairline">Investidos no ano</Text>
                </Flex>
            </Flex>
            <Flex justifyContent="center">
                <Button shadow={"lg"} w="170px" color="white" bg="#00DEB6">Fale Conosco</Button>
            </Flex>
        </>
    )
}