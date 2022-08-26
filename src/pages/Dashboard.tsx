import {Box, Container, Flex, Heading, List, ListItem, Spacer,} from '@chakra-ui/react';
import {CustomButton} from "../components/Button";
import {UserContext} from "../context/UserContext";
import {useContext, useEffect} from "react";
import {findCertificate} from "../utils/certifcate";

function Dashboard() {
    const {user} = useContext(UserContext);
    useEffect(() => {
        findCertificate(user.id).then(res => {
            console.log(res);
        })
    }, [])
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
                    <ListItem mb={5} p={3} bg={"red.300"}>
                        <Flex>
                            <h1>Certificate</h1>
                            <Spacer/>
                            <Box>
                                <CustomButton title={"Request Certificate"} path={"/request-certificate"}/>
                            </Box>
                        </Flex>
                    </ListItem>
                </List>
            </Container>
        </>

    );
}

export default Dashboard;
