import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ArrowForwardIcon, ArrowRightIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Links = ['Página Inicial', 'Serviços', 'Clientes', 'Contato'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        py={6}
        _hover={{ textDecoration: 'none' }}
        _active={{
            color: '#00DEB6',
            textDecoration: 'none'
        }}
        textDecoration='none'
        href={'#'}
        fontWeight={{ base: '600', md: '400' }}
        fontSize={{ base: '25px', md: 'md' }}
        color="#4E4E4E"
    >
        {children}
    </Link >
);

export default function MainMenu() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg='white' px={{ base: '4', md: '8' }}>
                <Flex h={16} alignItems={'center'} justifyContent={{ base: 'space-between' }}>
                    <HStack spacing={{ lg: '14', md: '4' }} alignItems={'center'}>
                        <Box>Logo</Box>
                        <HStack
                            as={'nav'}
                            spacing={{ lg: '14', md: '4' }}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <Link
                        display={{ base: 'none', md: 'flex' }}
                        px='4'
                        py='2'
                        bg='#00DEB6'
                        borderRadius={10}
                        color='white'
                        fontWeight='600'
                    >
                        Solicite um orçamento</Link>
                </Flex>
                {isOpen ? (
                    <Box pb={4} px="0" h="100vh" display={{ md: 'none' }} >
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>
                                    <Flex justifyContent="space-between" alignItems="center">
                                        {link}
                                        <ChevronRightIcon fontSize="40px" />
                                    </Flex>
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}