import { Flex, Link, Text } from "@chakra-ui/react";
import { FaHandsHelping } from 'react-icons/fa';
import { TbStairsUp } from 'react-icons/tb';
import Colabora from "./diferencialDesk";
import ColaboraMobi from "./diferencialMobi";


export default function Diferencial() {

    return (
        <>
            {/* <Flex display={{ base: "none", sm: "none", md: "none", lg: "block" }} gap="70px" direction="column" alignItems="center" w="100%" h="600px" bg="black" justifyContent="center" borderTopRadius="10px">
                <Text textAlign="center" fontFamily="raleway" fontWeight="bold" fontSize="50px" color="white">Diferencial</Text>
                <Colabora />
                <Colabora />
            </Flex> */}
            <ColaboraMobi />
        </>
    )
}