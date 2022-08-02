import React from "react";
import {Button, Heading, Stack, Text, useColorModeValue} from "@chakra-ui/react";

interface Props {
    firstName: string;
    lastName: string;
    course: string;

}

export const CertificateCardHolder:  React.FC<Props> = ({firstName, lastName, course}) => {
    return (
        <Stack
            boxShadow={'2xl'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            p={10}
            spacing={8}
            align={'center'}>
            <Stack align={'center'} spacing={2}>
                <Heading
                    textTransform={'uppercase'}
                    fontSize={'3xl'}
                    color={useColorModeValue('gray.800', 'gray.200')}>
                    {`Congratulations ${firstName} ${lastName}`}
                </Heading>
                <Text fontSize={'lg'} color={'gray.500'}>
                    {course}
                </Text>
            </Stack>
            <Stack spacing={4} direction={{base: 'column', md: 'row'}} w={'full'}>
                <Button
                    bg={'blue.400'}
                    rounded={'full'}
                    color={'white'}
                    flex={'1 0 auto'}
                    _hover={{bg: 'blue.500'}}
                    _focus={{bg: 'blue.500'}}>
                    Submit Another Application
                </Button>
            </Stack>
        </Stack>
    )
}