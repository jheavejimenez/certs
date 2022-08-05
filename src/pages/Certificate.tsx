import React, {useEffect, useState} from "react";

import {Container, SimpleGrid} from '@chakra-ui/react';
import {Card} from "../components/Card";
import {CertificateCardHolder} from "../components/CertificateCardHolder";
import axios from "axios";
import ICerts from "../models/CertsData";

export default function Certificate() {
    // @ts-ignore
    const [certs, setCerts] =  useState<ICerts>([]);
    const getCerts = () => {
        axios.get('http://localhost:3000/certs').then(res => {
            setCerts(res.data);
        }).catch(err => {
            console.log(err);
        });
    }
    useEffect(() => {
         getCerts();
    }, []);
    // @ts-ignore
    const filteredCerts = certs.filter(cert => cert.isApproved === true);
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
