import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const PartnerImage = ({ src, alt }) => {
    return (
        <Box p={4} boxShadow="md" borderRadius="md" bg={'white'}>
            <Image src={src} alt={alt} borderRadius="md" />
        </Box>
    );
};

export default PartnerImage;