import { Flex, Text } from "@chakra-ui/react";
import { IoMdGrid } from 'react-icons/io';
import { TbStairsUp } from "react-icons/tb";
import Carousel from "carousel-react-rcdev"
import React from 'react';
// import { Rerousel } from "rerousel";
// import Carousel from 'nuka-carousel';
// import { Rerousel } from 'rerousel';

export default function ColaboraMobi() {
    return (

        <Flex borderTopRadius="10px" display={{ base: "block", sm: "block", md: "none", lg: "none" }} direction="column" gap="20px" alignItems="center" w="100%" h="300px" bg="black">
            <Text marginBottom="20px" fontFamily="Raleway" fontSize="24px" textAlign="center" marginTop="20px" fontWeight="bold" color="white">Diferencial</Text>
            <Carousel >
                <Flex marginLeft="25px" gap="20px" direction="row">
                    <Flex p="20px" alignItems="center" direction="column" borderRadius="6px" w="140px" h="192px" bg="#F1F1F1">
                        <IoMdGrid size="30px" />
                        <Text fontWeight="bold" color="black">Colaboração</Text>
                        <Text textAlign="center" fontSize="8px">Acreditamos em uma visão de mundo colaborativa, onde nós criamos juntos. </Text>
                    </Flex>
                    <Flex p="20px" alignItems="center" direction="column" borderRadius="6px" w="140px" h="192px" bg="#F1F1F1">
                        <TbStairsUp size="30px" />
                        <Text fontWeight="bold" color="black">Colaboração</Text>
                        <Text textAlign="center" fontSize="8px">O que nos motiva é colocar sua empresa no máximo em que ela pode chegar. </Text>
                    </Flex>
                    <Flex p="20px" alignItems="center" direction="column" borderRadius="6px" w="140px" h="192px" bg="#F1F1F1">
                        <TbStairsUp size="30px" />
                        <Text fontWeight="bold" color="black">Colaboração</Text>
                        <Text textAlign="center" fontSize="8px">O que nos motiva é colocar sua empresa no máximo em que ela pode chegar. </Text>
                    </Flex>
                    <Flex p="20px" alignItems="center" direction="column" borderRadius="6px" w="140px" h="192px" bg="#F1F1F1">
                        <TbStairsUp size="30px" />
                        <Text fontWeight="bold" color="black">Colaboração</Text>
                        <Text textAlign="center" fontSize="8px">O que nos motiva é colocar sua empresa no máximo em que ela pode chegar. </Text>
                    </Flex>
                    <Flex p="20px" alignItems="center" direction="column" borderRadius="6px" w="140px" h="192px" bg="#F1F1F1">
                        <TbStairsUp size="30px" />
                        <Text fontWeight="bold" color="black">Colaboração</Text>
                        <Text textAlign="center" fontSize="8px">O que nos motiva é colocar sua empresa no máximo em que ela pode chegar. </Text>
                    </Flex>
                </Flex>
            </Carousel  >

        </Flex>
        // display={{ base: "block", sm: "block", md: "block", lg: "none" }}
    )
}