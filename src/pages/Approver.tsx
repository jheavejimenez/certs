import {Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue,} from "@chakra-ui/react";
import axios from "axios";
import {useEffect, useState} from "react";
import ICerts from "../models/CertsData"
import {server} from "../utils/apiConfigs";
import {schoolSchema} from "../utils/schemaVC";

export default function Approver() {
    // @ts-ignore
    const [certs, setCerts] = useState<ICerts>([]);
    useEffect(() => {
        let interval = setInterval(async () => {
            await axios.get(`${server.url}/api/certificates`).then(res => {
                setCerts(res.data);
            }).catch(err => {
                console.log(err);
            });
        }, 5000);
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, [certs]);

    // @ts-ignore
    const filteredCerts = certs.filter(cert => !cert.isApprove);
    const handleApprove = async (cert: any) => {
        let data = schoolSchema(cert.firstName, cert.lastName, cert.course);
        await axios.post(`${server.affinidi}/vc/build-unsigned`, data,{
                headers: {
                    "Content-Type": "application/json",
                    "Api-Key": `${process.env.REACT_APP_API_KEY_HASH}`
                }

        }).then(res => {
            const unsignedVC = res.data.unsignedCredential;
            console.log(unsignedVC);
            axios.put(`${server.url}/api/certificates/${cert._id}`, {
                firstName: cert.firstName,
                lastName: cert.lastName,
                course: cert.course,
                isApprove: true,
                unsignedVC
            }).then(res => {
                console.log(cert._id);
            }).catch(err => {
                console.log(err);
            })
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
