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
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key} from "react";


export default function Approver() {
    const certs = [JSON.parse(localStorage.getItem("cert") || "{}")];
    const filteredCerts = certs.filter(cert => !cert.isApproved);

    const handleApprove = (cert: any) => {
        cert.isApproved = true;
        localStorage.setItem("cert", JSON.stringify(cert));
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
                        {filteredCerts.map((cert, index) => (
                            <Tr key={index}>
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
