import React from "react";
import {Button, Heading, Stack, useColorModeValue} from "@chakra-ui/react";

export const Card = () => {
    return (
        <Stack

            bg={useColorModeValue('gray.100', 'gray.700')}
            rounded={'xl'}
            p={10}
            spacing={8}
            align={'center'}>
            <Stack align={'center'} spacing={2}>
                <Heading
                    mb={'15px'}
                    textTransform={'uppercase'}
                    fontSize={'3xl'}
                    color={useColorModeValue('gray.800', 'gray.200')}>
                    Please wait for the certificate to approve
                </Heading>
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


        </Stack>
    )

}