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
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Página Inicial', 'Serviços', 'Clientes', 'Contato'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={8}
        _hover={{ textDecoration: 'none' }}
        _active={{
            color: '#00DEB6',
            textDecoration: 'none'
        }}
        textDecoration='none'
        href={'#'}
        fontWeight={{ base: '600', md: '400' }}
        fontSize={{ sm: '25px', md: 'md' }}
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
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
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
                    <Box pb={4} h="100vh" display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}