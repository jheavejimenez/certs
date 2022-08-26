import {Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue,} from "@chakra-ui/react";
import axios from "axios";
import {useEffect, useState} from "react";
import ICerts from "../models/CertsData"
import {server} from "../utils/apiConfigs";
import {schoolSchema} from "../utils/schemaVC";
import {approveApplication, getSumittedApplications} from "../utils/approver";

export default function Approver() {
    const [certs, setCerts] = useState([]);
    useEffect(() => {
        async function fetchCerts() {
            const res = await getSumittedApplications()
            setCerts(res)
        }

        fetchCerts()
        let interval = setInterval(async () => {
            fetchCerts()
        }, 10000);
        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };
    }, []);

    const handleApprove = async (cert: any) => {
        let data = schoolSchema(cert.firstName, cert.lastName, cert.course);
        await axios.post(`${server.affinidi}/vc/build-unsigned`, data,{
                headers: {
                    "Content-Type": "application/json",
                    "Api-Key": `${process.env.REACT_APP_API_KEY_HASH}`
                }

        }).then(res => {
            async function buildUsignVc(){
                const isApprove = true;
                const unsignedVC = res.data.unsignedCredential;

                await approveApplication(
                    cert.id,
                    cert.firstName,
                    cert.lastName,
                    cert.email,
                    cert.course,
                    isApprove,
                    unsignedVC
                )
            }
            buildUsignVc();
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
                        {certs.map((cert:any) => (
                            <Tr key={cert._id}>
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
