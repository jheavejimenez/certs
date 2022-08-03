import React, {useEffect, useState} from "react";

import {Container, SimpleGrid} from '@chakra-ui/react';
import {Card} from "../Components/Card";
import {CertificateCardHolder} from "../Components/CertificateCardHolder";
import axios from "axios";

export default function Certificate() {
    const [certs, setCerts] =  useState([]);
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
                    filteredCerts.map((cert: any) => (
                        <SimpleGrid columns={3} spacing={5}>
                        <CertificateCardHolder
                            key={cert.id}
                            firstName={cert.givenName}
                            lastName={cert.familyName}
                            course={cert.course}
                        /> </SimpleGrid>
                    ))

                )
            }

        </Container>
    );
}
