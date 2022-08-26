import {Box, Container, Flex, Heading, List, ListItem, Spacer, useColorModeValue,} from '@chakra-ui/react';
import {CustomButton} from "../components/Button";
import {UserContext} from "../context/UserContext";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {findCertificate} from "../utils/certifcate";

function Dashboard() {
    const {user} = useContext(UserContext);
    const [myApplications, setMyApplications] = useState([]);

    useEffect(() => {
        async function getApplications() {
            const res = await findCertificate(user.id)
            setMyApplications(res);
            console.log(res)
        }
        getApplications()
    },[])

    return (
        <>
            <Container py={5} maxW={'container.lg'}>
                <Flex>
                    <Box>
                        <Heading as={'h2'}>My Applications</Heading>
                    </Box>
                    <Spacer/>
                    <Box>
                        <CustomButton title={"Request Certificate"} path={"/request-certificate"}/>
                    </Box>
                </Flex>
            </Container>
            <Container py={5} maxW={'container.lg'}>
                <List spacing={3}>
                    <ListItem mb={5} p={3} bg={useColorModeValue('gray.100', 'gray.700')}>
                        <Flex>
                            <Heading
                                textTransform={'capitalize'}
                                fontSize={'2xl'}
                                color={useColorModeValue('gray.800', 'gray.200')}
                            >
                                course title
                            </Heading>
                            <Spacer/>
                            <Box>
                                <CustomButton title={"View Certificate"} path={"/certificates"}/>
                            </Box>
                        </Flex>
                    </ListItem>
                </List>
            </Container>
        </>

    );
}

export default Dashboard;
