import { Button, Flex, Text } from "@chakra-ui/react";
import { BsDisplay } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GoPencil } from "react-icons/go";


export default function NossoTimeMobi() {
    return (
        <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} gap="60px" alignItems="center" justifyContent="center" direction="column" bg="black" w="100%" h="850px" borderBottomRadius="10px">
            <Text color="gray.100" fontSize="24px" fontWeight="bold" >Nosso time é o seu</Text>
            <Flex gap="20px" alignItems="center" direction="column">
                <FiShoppingCart color="#00DEB6" size="40px" />
                <Text color="gray.100" fontWeight="bold" fontSize="19px">Marketing</Text>
                <Text textAlign="center" fontSize="12px" color="gray">Essa equipe fica responsável por toda a parte de <br></br> escalar e criar estrategias para o seu negocio. O<br></br> foco é sempre o crescimento.</Text>
            </Flex>
            <Flex gap="20px" alignItems="center" direction="column">
                <BsDisplay color="#00DEB6" size="40px" />
                <Text color="gray.100" fontWeight="bold" fontSize="19px">Suporte</Text>
                <Text fontSize="12px" color="gray">Um time especializado em toda a parte de<br></br> atendimento e suporte. Todo a integração e<br></br> gestão do site fica por conta do nosso time.</Text>
            </Flex>
            <Flex gap="20px" alignItems="center" direction="column">
                <GoPencil color="#00DEB6" size="40px" />
                <Text color="gray.100" fontWeight="bold" fontSize="19px">Design</Text>
                <Text textAlign="center" fontSize="12px" color="gray">Preparados para atender a suas midias sociais e<br></br> entregar as melhores peças para o design do <br></br>seu site e anuncio.</Text>
            </Flex>
            <Button fontSize="15px" shadow={"lg"} w="156px" color="white" bg="#00DEB6">Fale Conosco</Button>
        </Flex>
    )
}