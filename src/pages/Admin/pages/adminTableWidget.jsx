import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Checkbox,
  Divider,
} from "@chakra-ui/react";

const AdminTableWidget = ({ data, title }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(data.map((item) => item.id));
    }
    setAllSelected(!allSelected);
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="md" overflow="auto">
      <Text fontSize="2xl" mb={4}>
        {title}
      </Text>
      <Divider mb={4} thickness="2px" borderColor="gray.500" />
      <Box mb={4}>
        <Button onClick={handleSelectAll} mr={2}>
          {allSelected ? "Unselect All" : "Select All"}
        </Button>
        <Button mr={2}>Action 1</Button>
        <Button mr={2}>Action 2</Button>
        <Button>Action 3</Button>
      </Box>
      <Divider mb={4} thickness="2px" borderColor="gray.500" />
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th borderRight="1px solid gray">Select</Th>
            {Object.keys(data[0])
              .slice(0,8)
              .map((key, index) => (
                <Th key={index} borderRight="1px solid gray" borderBottom={"1px solid gray"}>
                  {key}
                </Th>
              ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td borderRight="1px solid gray" borderBottom={"1px solid gray"}>
                <Checkbox
                  isChecked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                />
              </Td>
              {Object.values(item)
                .slice(0, 8)
                .map((value, index) => (
                  <Td key={index} borderBottom={"1px solid gray"} borderRight={"1px solid gray"}>
                    {typeof value === "string" && value.length > 30
                      ? `${value.slice(0, 30)}...`
                      : value}
                  </Td>
                ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AdminTableWidget;