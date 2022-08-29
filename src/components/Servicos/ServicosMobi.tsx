import { Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image"
import serviceMobi from "../../../public/serviceMobi.png"


export default function ServicosMobi() {
    return (
        <>
            <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} justifyContent="center" alignItems="end">
                <Image src={serviceMobi} />
                <Flex marginBottom="100px" alignItems="center" gap="20px" direction="column" position="absolute" >
                    <Text color="white" textAlign="center" fontSize="24px" fontWeight="bold">Serviços</Text>
                    <Text color="white" textAlign="center" fontSize="13px">Veja tudo o que preparamos para sua<br></br> empresa sair na frente.</Text>
                    <Button marginTop="10px" fontSize="13px" shadow={"lg"} w="151px" color="white" bg="#00DEB6">Fale Conosco</Button>
                </Flex>
            </Flex >
            <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} alignItems="center" marginTop="30px" gap="20px" direction="column" h="200px" >
                <Text fontSize="24px" textAlign="center" fontWeight="bold">Nossos  Serviços</Text>
                <Text lineHeight="25px" textAlign="center" fontSize="12px">A UP é uma agência digital especializada no nicho de<br></br> moda feminina e acessórios. Trabalhamos como<br></br> colaboradores da sua marca, buscando de maneira<br></br> estratégica e efetiva alavancar seus resultados.</Text>
            </Flex>
            <Flex direction="column" h="600px">
                <Text fontSize="16px" textAlign="center" fontWeight="bold">Métodoligia</Text>
                <Text fontSize="10px" color="#828282" textAlign="center">Entenda um pouco do<br></br> nosso método 360</Text>
            </Flex>
        </>

        // display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
    )
}