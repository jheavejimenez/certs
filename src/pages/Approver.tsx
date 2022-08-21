import {Button, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue,} from "@chakra-ui/react";
import axios from "axios";
import {useEffect, useState} from "react";
import ICerts from "../models/CertsData"
import {server} from "../utils/apiConfigs";

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
        await axios.post(`https://affinity-issuer.prod.affinity-project.org/api/v1/vc/build-unsigned`,
            {
                "jsonLdContextUrl": "https://schema.affinidi.com/@did:elem:EiC4iIPkKE9Emed3MbAqZ8z8QixcKFPtSoUUSpSP1XA4aA/xampleSchema2V1-0.jsonld",
                "jsonSchemaUrl": "https://schema.affinidi.com/@did:elem:EiC4iIPkKE9Emed3MbAqZ8z8QixcKFPtSoUUSpSP1XA4aA/xampleSchema2V1-0.json",
                "typeName": "xampleSchema2",
                "credentialSubject": {
                    "data": {
                        "firstname": `${cert.firstName}`,
                        "lastname": `${cert.lastName}`,
                        "course":`${cert.course}`
                    }
                },
                "holderDid": "did:elem:EiBtBJadx-Ctmevx86uXK8oawF44Kz9Oj6yfZ1-TiRiMIg;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBek5HTmlOV0UwWmpkbE56WXhaamhqTlRCaVptRXhNMk15TWpFd01XWmtNbVl5T0RKbU1EQXdOV0U1TnpoalpHWmhaalF3WVdZMU56YzBOMkkwT1dSa1lTSjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TTJZeE1qSTJPV0ptT1RFMk56QXpPV0ZqTW1VMk5Ea3hPVFkwWVRVeU1XWXlOMll6TnpabE9XRmpabU14WVRKaU5USmhNVEl3TjJVNU9EYzBZV1ZsTm1NaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoibGNWYVJ1MWFxRnpZT0FfdERfVnpNZTAteXVadklpZFhxZWFuMktwR0tzd0s0b1pVVndqcmFMc3g5UE4yRk9wVTZic0QwTXhFTVA4Nm11YjcwOTBqN3cifQ"
            },{
                headers: {
                    "Content-Type": "application/json",
                    "Api-Key": "e062901de042b648bb4d94fe745344b2d564d050a53daaaad7a3a5fefc4e6b68"
                }

        }).then(res => {
            const unsignedVC= res.data.unsignedCredential;
            axios.put(`${server.url}/api/certificates/${cert._id}`, {
                firstName: cert.firstName,
                lastName: cert.lastName,
                course: cert.course,
                isApproved: true,
                data: unsignedVC
            }).then(res => {
                console.log(res);
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
