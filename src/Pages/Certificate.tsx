import React from "react";
//
// export const Certificate: React.FC<{  }> = props => {
//    const isApproved = JSON.parse(localStorage.getItem("cert") || "{}").isApproved;
//     return (
//         <div>
//             {isApproved === true ? <div>Certificate</div> : <div>Please wait for approval</div>}
//         </div>
//     );
// };

import {
    Flex,
    Stack,
    Heading,
    Text,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import {Card} from "../components/Card";

export const Certificate:React.FC<{}> = () => {
    const isApproved = JSON.parse(localStorage.getItem("cert") || "{}").isApproved;
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            py={12}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            {!isApproved ? <Card /> : <div>cert</div>}
        </Flex>
    );
}
