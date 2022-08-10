import React, {useEffect, useState} from "react";

import {Container, SimpleGrid} from '@chakra-ui/react';
import {Card} from "../components/Card";
import {CertificateCardHolder} from "../components/CertificateCardHolder";
import axios from "axios";
import ICerts from "../models/CertsData";
import {server} from "../utils/apiConfigs";

export default function Certificate() {
    // @ts-ignore
    const [certs, setCerts] =  useState<ICerts>([]);
    useEffect(() => {
        let interval = setInterval(async () => {
            await axios.get(`${server.url}/api/certificates`).then(res => {
                setCerts(res.data);
            }).catch(err => {
                console.log(err);
            });
        }, 10000);
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, [certs]);
    // @ts-ignore
    const filteredCerts = certs.filter(cert => cert.isApprove === true);
    return (
        <Container maxW={'1280px'} marginTop={'10vh'}>
            {
                filteredCerts.length === 0 ? ( <Card/> ) : (
                    <SimpleGrid columns={3} spacing={5}>
                        {filteredCerts.map((cert: any) => (
                            <CertificateCardHolder
                                key={cert.id}
                                firstName={cert.givenName}
                                lastName={cert.familyName}
                                course={cert.course}
                            />
                        ))}
                    </SimpleGrid>
                )
            }
        </Container>
    );
}
