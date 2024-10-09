import React, { useState } from 'react';
import { Box, Button, Text, Table, Thead, Tr, Th, Tbody, Td, Checkbox } from '@chakra-ui/react';

const AdminTableWidget = ({ data, title }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelectAll = () => {
        setSelectedItems(data.map(item => item.id));
    };

    const handleSelectItem = (id) => {
        setSelectedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4}>{title}</Text>
            <Box mb={4}>
                <Button onClick={handleSelectAll} mr={2}>Select All</Button>
                <Button mr={2}>Action 1</Button>
                <Button mr={2}>Action 2</Button>
                <Button>Action 3</Button>
            </Box>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Select</Th>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Aktualnosci</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map(item => (
                        <Tr key={item.id}>
                            <Td><Checkbox isChecked={selectedItems.includes(item.id)} onChange={() => handleSelectItem(item.id)} /></Td>
                            <Td>{item.id}</Td>
                            <Td>{item.name}</Td>
                            <Td>{item.aktualnosci}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default AdminTableWidget;