import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export default function WeGoHigh() {

    const isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        lg: true,

    })

    return (
        <Flex alignItems={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "center"
        }}
            justifyContent={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "center"
            }} w="100%" h="300px">
            <Flex gap="20px" direction="column">
                <Text fontFamily="raleway" textAlign="center" fontWeight="bold" fontSize={{
                    base: "50px",
                    sm: "30px",
                    md: "50px"
                }}>We go High</Text>
                <Text textAlign="center" fontWeight="raleway" fontSize={{
                    base: "12px",
                    sm: "20px",
                    md: "30px"
                }}>Vamos juntos alcançar o resultado desejado para o seu negocio?</Text>
            </Flex>
        </Flex>
    )
}