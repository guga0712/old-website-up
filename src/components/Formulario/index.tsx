import { Button, Flex, Input, Text } from "@chakra-ui/react";


export default function Formulario() {
    return (
        <>
            <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} marginTop="60px" justifyContent="center" direction="column" alignItems="center">
                <Text fontSize="40px" fontWeight="extrabold">Fale Conosco</Text>
                <Text fontWeight="normal" textAlign="center" fontSize="16px">Estamos aguardando por seu<br></br>negócio, vamos juntos?!</Text>
            </Flex>
            <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} marginLeft="30px" direction="column" marginTop="40px">
                <Text>Empresa:</Text>
                <Input size="sm" w="300px" variant='flushed'></Input>
            </Flex>
            <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} marginLeft="30px" direction="column" marginTop="40px">
                <Text>Email:</Text>
                <Input size="sm" w="300px" variant='flushed'></Input>
            </Flex>
            <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} marginLeft="30px" direction="column" marginTop="40px">
                <Text>Instagram (caso possua):</Text>
                <Input size="sm" w="300px" variant='flushed'></Input>
            </Flex>
            <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} marginLeft="30px" direction="column" marginTop="40px">
                <Text>Faturamento:</Text>
                <Input size="sm" w="300px" variant='flushed'></Input>
            </Flex>
            <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} marginLeft="30px" direction="column" marginTop="40px">
                <Text marginBottom="30px">Fale do seu projeto:</Text>
                <Input size="sm" w="300px" variant='flushed'></Input>
            </Flex>
            <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} justifyContent="center" >
                <Button marginTop="30px" fontSize="13px" shadow={"lg"} w="151px" color="white" bg="#00DEB6">Enviar Resposta</Button>
            </Flex>
        </>
    )
}