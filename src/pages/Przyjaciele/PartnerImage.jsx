import React from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';

const PartnerImage = ({ src, alt }) => {
    return (
        <Box p={4} boxShadow="md" borderRadius="md" bg={'white'}>
            <Flex justifyContent="center" alignItems="center" height="100%">
                <Image src={src} alt={alt} borderRadius="md" />
            </Flex>
        </Box>
    );
};

export default PartnerImage;