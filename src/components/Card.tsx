import React from "react";
import {Heading, Stack, useColorModeValue} from "@chakra-ui/react";

export const Card = () => {
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
                    Please wait for the certificate to approve
                </Heading>
            </Stack>
        </Stack>
    )

}