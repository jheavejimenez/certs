import {ReactNode} from 'react';
import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useColorModeValue,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import {hover} from "@testing-library/user-event/dist/hover";

const Links = {
    Home: {
        href: "/",
    },
    Certificates: {
        href: "/certificates",
    }
}

export default function NavigationBar() {
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box><strong>XPERTO</strong></Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{base: 'none', md: 'flex'}}>
                            {Object.entries(Links).map(([name, {href}]) => (
                                <Link
                                    to={href}
                                    key={name}
                                >{name}</Link>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
