import {Box, Container, Flex, Heading, List, ListItem, Spacer,} from '@chakra-ui/react';
import {CustomButton} from "../components/Button";
import {UserContext} from "../context/UserContext";
import {useContext, useEffect, useState} from "react";
import {getApplications} from "../utils/certifcate";

function Dashboard() {
    const {user} = useContext(UserContext);
    const [myApplications, setMyApplications] = useState([]);

    useEffect(() => {
        async function fetchApplications() {
            const res = await getApplications(user.id)
            setMyApplications(res);
            console.log(res)
        }

        fetchApplications()
        const interval = setInterval(() => {
            fetchApplications()
        },10000)

        return () => {
            clearInterval(interval); // need to clear the interval when the component unmounts to prevent memory leaks
        };

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
                    {
                        myApplications.map((items: any) => (
                            <ListItem
                                mb={5}
                                p={3}
                                key={items._id}
                                bg={'gray.100'}
                            >
                                <Flex>
                                    <Heading
                                        textTransform={'capitalize'}
                                        fontSize={'2xl'}
                                    >
                                        {items.course}
                                    </Heading>
                                    <Spacer/>
                                    <Box>
                                        {items.isApprove ? (
                                            <CustomButton title={"View Certificate"} path={"/certificates"}/>
                                        ) : (
                                            <Heading
                                                textTransform={'capitalize'}
                                                fontSize={'medium'}
                                                color={'red.500'}
                                            >
                                                Waiting for Approval
                                            </Heading>
                                        )
                                        }
                                    </Box>
                                </Flex>
                            </ListItem>
                        ))

                    }
                </List>
            </Container>
        </>

    );
}

export default Dashboard;
