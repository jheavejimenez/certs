import React from "react";
import {Button, Heading, Stack, Text, useColorModeValue} from "@chakra-ui/react";


export const CertificateCardHolder = () => {
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

                </Heading>
                <Text fontSize={'lg'} color={'gray.500'}>
                    Subscribe to our newsletter & stay up to date!
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