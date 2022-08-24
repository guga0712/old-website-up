import { ReactNode } from 'react';

import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            bg={{ base: 'black', md: 'gray.50' }}
            color={{ base: 'white', md: 'black' }}>
            <Container as={Stack} maxW='100%' py={10} margin='0' px={{ base: '4', md: '8' }} >
                <Flex
                    w="100%"
                    justifyContent='space-between'
                    flexDirection={{ base: 'column', md: 'row' }}
                    gap={{ base: '10', md: '0' }}
                >
                    <Stack align={'flex-start'}>
                        <ListHeader>Contato</ListHeader>
                        <Link href={'#'}>Overview</Link>
                        <Link href={'#'}>Features</Link>
                        <Link href={'#'}>Tutorials</Link>
                        <Link href={'#'}>Pricing</Link>
                        <Link href={'#'}>Releases</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Serviços</ListHeader>
                        <Text>Marketing</Text>
                        <Text>Suporte</Text>
                        <Text>Design</Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Menu</ListHeader>
                        <Link href={'#'}>Página inicial</Link>
                        <Link href={'#'}>Serviços</Link>
                        <Link href={'#'}>Clientes</Link>
                        <Link href={'#'}>Contato</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Redes Sociais</ListHeader>
                        <Link href={'#'}>Facebook</Link>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'#'}>LinkedIn</Link>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    );
}