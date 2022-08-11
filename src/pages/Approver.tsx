import {Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue,} from "@chakra-ui/react";
import axios from "axios";
import {useEffect, useState} from "react";
import ICerts from "../models/CertsData"
import {server} from "../utils/apiConfigs";

export default function Approver() {
    // @ts-ignore
    const [certs, setCerts] =  useState<ICerts>([]);
    useEffect(() => {
        let interval = setInterval(async () => {
            await axios.get(`${server.url}/api/certificates`).then(res => {
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
    const filteredCerts = certs.filter(cert => !cert.isApprove);
    const handleApprove = async (cert: any) => {

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
                                <Td>{cert.firstName}</Td>
                                <Td>{cert.lastName}</Td>
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
