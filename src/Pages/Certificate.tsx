import React from "react";

import {Container, SimpleGrid} from '@chakra-ui/react';
import {Card} from "../components/Card";
import {CertificateCardHolder} from "../components/CertificateCardHolder";

export const Certificate:React.FC<{}> = () => {
    const isApproved = JSON.parse(localStorage.getItem("cert") || "{}").isApproved;
    const data = [JSON.parse(localStorage.getItem("cert") || "{}")];
    const filteredData = data.filter(item => item.isApproved)



    return (
        <Container maxW={'1280px'} marginTop={'10vh'}>
            { !isApproved ?
                <Card /> :
                <SimpleGrid columns={3} spacing={5}>
                    {filteredData.map((cert: any, index: number) => (
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
