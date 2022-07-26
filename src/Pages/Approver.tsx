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
    const certs = JSON.parse(localStorage.getItem("certs") || "[]");
    console.log(certs);

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

                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}
