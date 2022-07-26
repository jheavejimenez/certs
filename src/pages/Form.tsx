import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import {useNavigate} from "react-router-dom";
import React from "react";
import {createCertificate} from "../utils/certifcate";
import axios from "axios";
import {UserContext} from "../context/UserContext";

export default function Form() {
    const {user} = React.useContext(UserContext);
    const navigate = useNavigate();
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [course, setCourse] = React.useState('');

    const passwordLessSignIn = async (data: { email: any; }) => {
        const signIn = await axios.post("https://cloud-wallet-api.prod.affinity-project.org/api/v1/users/sign-in-passwordless",
            {"username": data.email}, {
                headers: {
                    "Content-Type": "application/json",
                    "Api-Key": process.env.REACT_APP_API_KEY_HASH || '',
                }
            })

        return signIn.data
    }

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        const sign = await passwordLessSignIn({email})
        await createCertificate(
            user.id,
            firstName,
            lastName,
            email,
            course,
        )
        navigate('/confirmation-code', {state: {data: sign}})
    };

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'2xl'}>Create Your Decentralized Certification</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
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
                                <FormLabel htmlFor='first-name'>First name</FormLabel>
                                <Input
                                    id='first-name'
                                    placeholder='First name'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <FormLabel>Last Name</FormLabel>
                                <Input
                                    id='last-name'
                                    placeholder='Last name'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <FormLabel>Email Address</FormLabel>
                                <Input
                                    id='email'
                                    placeholder='Email Address'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <FormLabel>Course</FormLabel>
                                <Input
                                    id='course'
                                    placeholder='Course'
                                    value={course}
                                    onChange={(e) => setCourse(e.target.value)}
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
                                    Request Certificate
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
}
