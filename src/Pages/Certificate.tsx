import React from "react";

import {Container, Flex, Grid, SimpleGrid, useColorModeValue} from '@chakra-ui/react';
import { Card } from "../components/Card";
import { CertificateCardHolder } from "../components/CertificateCardHolder";

export const Certificate:React.FC<{}> = () => {
    const isApproved = JSON.parse(localStorage.getItem("cert") || "{}").isApproved;
    const data = [JSON.parse(localStorage.getItem("cert") || "{}")];
    const filteredData = data.filter(item => item.isApproved)

    const dummyData = [
        {
            "givenName":"jheave",
            "familyName":"Jimenenez",
            "course":"CEIT",
            "isApproved": false
        },
        {
            "givenName":"James",
            "familyName":"doe",
            "course":"CEIT",
            "isApproved": false
        },
        {
            "givenName":"Jhon",
            "familyName":"doe",
            "course":"CEIT",
            "isApproved": false
        }
    ]

    return (
        <Container maxW={'1280px'} marginTop={'10vh'}>
            { !isApproved ?
                <Card /> :
                <SimpleGrid columns={3} spacing={5}>
                    {dummyData.map((cert: any, index: number) => (
                        <CertificateCardHolder
                            key={index}
                            firstName={cert.givenName}
                            lastName={cert.familyName}
                            course={cert.course}
                        />
                    ))}
                </SimpleGrid>
            }
        </Container>
    );
}
