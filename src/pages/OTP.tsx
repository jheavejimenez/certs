import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {patchConfirmationCode} from "../utils/certifcate";
import {DidContext} from "../context/DidContext";

export default function OTP() {
    const [confirmationCode, setConfirmationCode] = React.useState('');
    const {setDid} = React.useContext(DidContext);
    const navigate = useNavigate();
    const {state} = useLocation();
    const {data}: any = state;

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const did = await patchConfirmationCode(
            data,
            confirmationCode
        )
        setDid(did);
        navigate('/');
    };

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Cloud Wallet</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        Enter your six digit code sent to your email
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>Confirmation Code</FormLabel>
                                <Input
                                    id='confirmation-Code'
                                    value={confirmationCode}
                                    onChange={(e) => setConfirmationCode(e.target.value)}
                                />
                            </FormControl>
                            <Stack spacing={10}>
                                <Button
                                    type={'submit'}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Confirm
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
}

