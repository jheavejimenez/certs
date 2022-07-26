import {
    TableContainer,
    TableCaption,
    Thead,
    Table,
    Tr,
    Tbody,
    Td,
    Th,
    Tfoot, Flex,
    useColorModeValue, Button,
} from "@chakra-ui/react";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";


export default function Approver() {
    const certs = JSON.parse(localStorage.getItem("certs") || "[]");

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
                        {certs.map((cert: { firstName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; lastName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; course: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; isApproved: boolean; }) => {
                                return (
                                    <Tr>
                                        <Td>{cert.firstName}</Td>
                                        <Td>{cert.lastName}</Td>
                                        <Td>{cert.course}</Td>
                                        <Td>
                                            <Button
                                                variant='outline'
                                                onClick={() => {
                                                    // approve the cert
                                                    cert.isApproved = true;
                                                    localStorage.setItem("certs", JSON.stringify(certs));
                                                }}>
                                                Approve
                                            </Button>
                                        </Td>
                                    </Tr>
                                );
                            })}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}
