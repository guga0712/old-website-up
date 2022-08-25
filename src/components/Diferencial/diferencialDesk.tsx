import { Flex, Text, Link } from "@chakra-ui/react";
import { FaHandsHelping } from "react-icons/fa";
import { TbStairsUp } from "react-icons/tb";


export default function Colabora() {
    return (
        <Flex gap="700px">
            <Flex gap="40px">
                <FaHandsHelping color="#00DEB6" size="70px" />
                <Flex gap="10px" direction="column">
                    <Text fontFamily="raleway" color="white" fontWeight="bold" fontSize="20px">Colaboração</Text>
                    <Text fontFamily="raleway" color="gray">acreditamos em uma visão<br></br>
                        de mundo colaborativa,<br></br>
                        onde nós criamos juntos<br></br>
                        <Link color="white">Clique aqui > </Link></Text>
                </Flex>
            </Flex>
            <Flex gap="40px">
                <TbStairsUp color="#00DEB6" size="70px" />
                <Flex gap="10px" direction="column">
                    <Text fontFamily="raleway" color="white" fontWeight="bold" fontSize="20px">Escalonamento</Text>
                    <Text fontFamily="raleway" color="gray">acreditamos em uma visão<br></br>
                        de mundo colaborativa,<br></br>
                        onde nós criamos juntos<br></br>
                        <Link color="white">Clique aqui> </Link></Text>
                </Flex>
            </Flex>
        </Flex>
    )
}