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

export default function Form() {
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
                    <Stack spacing={4}>
                        <FormControl id="first-name">
                            <FormLabel>First Name</FormLabel>
                            <Input type="tex" />
                        </FormControl>
                        <FormControl id="last-name">
                            <FormLabel>Last Name</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <FormControl id="course">
                            <FormLabel>Course</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                               Generate Certificate
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
