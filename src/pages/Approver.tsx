import {Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue,} from "@chakra-ui/react";
import axios from "axios";
import {issuerBaseUrl} from "../utils/apiConfigs";
import {useEffect, useState} from "react";
import {Interface} from "readline";

interface ICerts {
    id: string;
    givenName: string;
    familyName: string;
    course: string;
    isApprove: boolean;
}

export default function Approver() {
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
    const filteredCerts = certs.filter(cert => !(cert.isApproved !== false));
    const handleApprove = async (cert: any) => {
        const body = {
            "jsonLdContextUrl": "https://schema.affinidi.com/@did:elem:EiC4iIPkKE9Emed3MbAqZ8z8QixcKFPtSoUUSpSP1XA4aA/xampleSchema2V1-0.jsonld",
            "jsonSchemaUrl": "https://schema.affinidi.com/@did:elem:EiC4iIPkKE9Emed3MbAqZ8z8QixcKFPtSoUUSpSP1XA4aA/xampleSchema2V1-0.json",
            "typeName": "xampleSchema2",
            "credentialSubject": {
                "data": {
                    "firstname": cert.givenName,
                    "lastname": cert.familyName,
                    "course": cert.course,
                },
                "holderDid": process.env.REACT_APP_DID // the did value is from postman collection in  env variables
            }
        }
        // axios header configs
        const config = {
            headers: {
                'Api-Key': process.env.REACT_APP_API_KEY_HASH,
                'Content-Type': 'application/json',
            }
        }
        // @ts-ignore
        const {data} = await axios.post(issuerBaseUrl, body, config);
        console.log(data);

        cert.isApproved = true;
        localStorage.setItem("cert", JSON.stringify(cert));

        //TODO: after i call the build unsign Affinidi API
        // I nmeed to call the Issuer API(Sign VC)

    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
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
