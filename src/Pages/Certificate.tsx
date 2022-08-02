import React from "react";

import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Card } from "../components/Card";
import { CertificateCardHolder } from "../components/CertificateCardHolder";

export const Certificate:React.FC<{}> = () => {
    const isApproved = JSON.parse(localStorage.getItem("cert") || "{}").isApproved;
    const data = [JSON.parse(localStorage.getItem("cert") || "{}")];
    const filteredData = data.filter(item => item.isApproved)
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            py={12}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            { !isApproved ?
                <Card /> :
                filteredData.map((cert: any, index: number) => (
                    <CertificateCardHolder
                        key={index}
                        firstName={cert.givenName}
                        lastName={cert.familyName}
                        course={cert.course}
                    />
                ))
            }
        </Flex>
    );
}
