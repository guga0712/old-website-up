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
import LinkFooter from './LinkFooter';

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
                        <ListHeader>Menu</ListHeader>
                        <LinkFooter href='#' page='Página inicial' />
                        <LinkFooter href='#' page='Serviços' />
                        <LinkFooter href='#' page='Clientes' />
                        <LinkFooter href='#' page='Contato' />
                    </Stack>
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
                        <LinkFooter href='services' page='Marketing' />
                        <LinkFooter href='#' page='Suporte' />
                        <LinkFooter href='#' page='Design' />
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Redes Sociais</ListHeader>
                        <LinkFooter href='#' page='Facebook' />
                        <LinkFooter href='#' page='Instagram' />
                        <LinkFooter href='#' page='Linkedin' />
                        <LinkFooter href='#' page='WhatsApp' />
                    </Stack>
                </Flex>
            </Container>
            <Text textAlign='center' paddingBottom={8}> © 2022 Up Agency Brasil. Todos os direitos reservados. </Text>
        </Box>
    );
}