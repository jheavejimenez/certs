import {Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue,} from "@chakra-ui/react";
import axios from "axios";
import {useEffect, useState} from "react";
import ICerts from "../models/CertsData"

export default function Approver() {
    // @ts-ignore
    const [certs, setCerts] =  useState<ICerts>([]);
    useEffect(() => {
        let interval = setInterval(async () => {
            await axios.get(`{server.url}/api/certificates`).then(res => {
                setCerts(res.data);
            }).catch(err => {
                console.log(err);
            });
        }, 4000);
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, [certs]);

    // @ts-ignore
    const filteredCerts = certs.filter(cert => !(cert.isApproved !== false));
    const handleApprove = async (cert: any) => {
        // const body = {
        //     "jsonLdContextUrl": "https://schema.affinidi.com/@did:elem:EiC4iIPkKE9Emed3MbAqZ8z8QixcKFPtSoUUSpSP1XA4aA/xampleSchema2V1-0.jsonld",
        //     "jsonSchemaUrl": "https://schema.affinidi.com/@did:elem:EiC4iIPkKE9Emed3MbAqZ8z8QixcKFPtSoUUSpSP1XA4aA/xampleSchema2V1-0.json",
        //     "typeName": "xampleSchema2",
        //     "credentialSubject": {
        //         "data": {
        //             "firstname": cert.givenName,
        //             "lastname": cert.familyName,
        //             "course": cert.course,
        //         },
        //         "holderDid": process.env.REACT_APP_DID // the did value is from postman collection in  env variables
        //     }
        // }
        // // axios header configs
        // const config = {
        //     headers: {
        //         'Api-Key': process.env.REACT_APP_API_KEY_HASH,
        //         'Content-Type': 'application/json',
        //     }
        // }
        // // @ts-ignore
        // const {data} = await axios.post(issuerBaseUrl, body, config);
        // console.log(data);

        // TODO: check if the user is already have a cloud wallet
        // TODO: if not, create one
        // TODO: after i call the build unsign Affinidi API
        // TODO: I need to call the Issuer API(Sign VC)

        // for the meantime I will update the key value pair isApproved == true in Json server
        await axios.put(`http://localhost:3000/certs/${cert.id}`, {
            givenName: cert.givenName,
            familyName: cert.familyName,
            course: cert.course,
            isApproved: true
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <TableContainer display={'block'}>
                <Table variant='striped' colorScheme='blue'>
                    <Thead>
                        <Tr>
                            <Th>First Name</Th>
                            <Th>Last Name</Th>
                            <Th>Course</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {filteredCerts.map((cert: ICerts) => (
                            <Tr key={cert.id}>
                                <Td>{cert.givenName}</Td>
                                <Td>{cert.familyName}</Td>
                                <Td>{cert.course}</Td>
                                <Td>
                                    <Button
                                        onClick={() => handleApprove(cert)}
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                    }}>
                                        Approve
                                    </Button>
                                </Td>
                            </Tr>
                            ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}
