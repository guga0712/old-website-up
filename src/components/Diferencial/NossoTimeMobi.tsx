import { Button, Flex, Text } from "@chakra-ui/react";
import { BsDisplay } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GoPencil } from "react-icons/go";


export default function NossoTimeMobi() {
    return (
        <Flex display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} gap="60px" alignItems="center" justifyContent="center" direction="column" bg="black" w="100%" h="800px" borderBottomRadius="10px">
            <Text color="gray.100" fontSize="24px" fontWeight="bold" >Nosso time é o seu</Text>
            <Flex gap="20px" alignItems="center" direction="column">
                <FiShoppingCart color="#00DEB6" size="40px" />
                <Text color="gray.100" fontWeight="bold" fontSize="19px">Marketing</Text>
                <Text fontSize="12px" color="gray">Acreditamos em uma visão de mundo<br></br>
                    colaborativa, onde nós criamos juntos</Text>
            </Flex>
            <Flex gap="20px" alignItems="center" direction="column">
                <BsDisplay color="#00DEB6" size="40px" />
                <Text color="gray.100" fontWeight="bold" fontSize="19px">Suporte</Text>
                <Text fontSize="12px" color="gray">Acreditamos em uma visão de mundo<br></br>
                    colaborativa, onde nós criamos juntos</Text>
            </Flex>
            <Flex gap="20px" alignItems="center" direction="column">
                <GoPencil color="#00DEB6" size="40px" />
                <Text color="gray.100" fontWeight="bold" fontSize="19px">Design</Text>
                <Text fontSize="12px" color="gray">Acreditamos em uma visão de mundo<br></br>
                    colaborativa, onde nós criamos juntos</Text>
            </Flex>
            <Button fontSize="15px" shadow={"lg"} w="156px" color="white" bg="#00DEB6">Fale Conosco</Button>
        </Flex>
    )
}