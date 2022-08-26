import {Box, Container, Flex, Heading, List, ListIcon, ListItem, Spacer,} from '@chakra-ui/react';
import {CustomButton} from "../components/Button";
import {UserContext} from "../context/UserContext";
import {useContext} from "react";
import axios from "axios";

function Dashboard() {
    const {user} = useContext(UserContext);
    const getApplications = async () => {
        const response = await axios('/api/applications');
        return response.data;
    }
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
