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
    useColorModeValue,
} from "@chakra-ui/react";


export default function Approver() {
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
                        <Tr>
                            <Td>1</Td>
                            <Td>2</Td>
                            <Td>4</Td>
                            <Td>5</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}
