import React, { useState } from "react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  ModalFooter,
  Tbody,
  Td,
  Checkbox,
  Divider,
  Link,
  FormLabel,
  Modal,
  ModalHeader,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
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

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsOpen(false);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleInputChange = (key, newValue) => {
    
    setSelectedItem((prev) => ({
      ...prev,
      [key]: typeof newValue === "boolean" ? newValue : newValue,
    }));
  };

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleOpenConfirm = () => {
    setIsConfirmOpen(true);
  };

  const handleCloseConfirm = () => {
    setIsConfirmOpen(false);
  };

  const handleDelete = () => {
    // handle delete action here
    handleCloseConfirm();
  };

  const handleSave = async () => {
    // Get the CSRF token from the cookie
    const csrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("csrftoken"))
      .split("=")[1];
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    }

    // Parse the authTokens JSON string and get the access token
    const authTokens = JSON.parse(localStorage.getItem("authTokens"));
    const accessToken = authTokens.access;
    console.log(csrfToken);
    console.log(accessToken);
    const { id, ...restOfSelectedItem } = selectedItem;
    const sessionId = getCookie("sessionid");

    // Create a new FormData instance
    const formData = new FormData();

    // Append all properties of restOfSelectedItem to formData
    for (const key in restOfSelectedItem) {
      if (restOfSelectedItem[key] instanceof File) {
        // If the property is a File instance, append it as a file
        formData.append(
          key,
          restOfSelectedItem[key],
          restOfSelectedItem[key].name
        );
      } else {
        // Otherwise, append it as a string
        formData.append(key, restOfSelectedItem[key]);
      }
    }

    // console.log(JSON.stringify(restOfSelectedItem));
    const response = await fetch(
      `http://127.0.0.1:8000/pl/aktualnosci/edit/${selectedItem.id}/`,
      {
        method: "PUT",
        headers: {
          //   "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
          Authorization: "Bearer " + accessToken,
          //   "SessionID": sessionId,
        },
        body: formData,
        // credentials: "include",
      }
    );

    if (response.ok) {
      alert("Zapisano zmiany!");
      setIsEditing(false);
    } else {
      alert("Wystąpił błąd podczas zapisywania zmian.");
    }
  };

  return (
    <Box
      p={4}
      borderWidth={1}
      borderRadius="md"
      overflow="auto"
      backgroundColor={"white"}
    >
      <Text fontSize="2xl" mb={4}>
        {title}
      </Text>
      <Divider mb={4} thickness="2px" borderColor="gray.500" />
      <Box mb={4}>
        <Button onClick={handleSelectAll} mr={2}>
          {allSelected ? "Odznacz wszystkie" : "Zaznacz wszystko"}
        </Button>
        <Button mr={2}>Usuń</Button>
        <Button mr={2}>button 2</Button>
        <Button>Action 3</Button>
      </Box>
      <Divider mb={4} thickness="2px" borderColor="gray.500" />
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th borderRight="1px solid gray">Select</Th>
            {Object.keys(data[0])
              .slice(0, 8)
              .map((key, index) => (
                <Th
                  key={index}
                  borderRight="1px solid gray"
                  borderBottom={"1px solid gray"}
                >
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
              <Td
                onClick={() => handleOpenModal(item)}
                borderRight="1px solid gray"
                borderBottom={"1px solid gray"}
                _hover={{ backgroundColor: "white", color: "blue.500" }}
              >
                <Button
                  variant="link"
                  onClick={() => handleOpenModal(item)}
                  _hover={{ color: "blue.500" }}
                >
                  {item.id}
                </Button>
              </Td>
              {Object.values(item)
                .slice(1, 8)
                .map((value, index) => (
                  <Td
                    key={index}
                    borderBottom={"1px solid gray"}
                    borderRight={"1px solid gray"}
                  >
                    {typeof value === "boolean" ? (
                      <Checkbox isChecked={value} isReadOnly />
                    ) : typeof value === "string" && value.length > 30 ? (
                      `${value.slice(0, 30)}...`
                    ) : (
                      value
                    )}
                  </Td>
                ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent padding={5} backgroundColor="gray.50" maxW={"60%"}>
          <ModalHeader fontSize="2xl" color="blue.700">
            Szczegoły
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedItem &&
              Object.entries(selectedItem).map(([key, value], index) =>
                isEditing ? (
                  <Box key={index}>
                    <FormLabel>{key}</FormLabel>
                    {key === "image" ? (
                      <Input
                        type="file"
                        onChange={(e) =>
                          handleInputChange(key, e.target.files[0])
                        }
                      />
                    ) : typeof value === "boolean" ? (
                      <Checkbox
                        isChecked={value}
                        onChange={(e) =>
                          handleInputChange(key, e.target.checked)
                        }
                      />
                    ) : (
                      <Input
                        value={value}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                      />
                    )}
                  </Box>
                ) : (
                  <Text key={index} fontSize="md" color="gray.700" p={5}>
                    <strong>{key}:</strong>{" "}
                    {typeof value === "boolean" ? (
                      value ? (
                        <CheckIcon />
                      ) : (
                        <CloseIcon />
                      )
                    ) : (
                      value
                    )}
                  </Text>
                )
              )}
          </ModalBody>
          <Button
            colorScheme="blue"
            mt={3}
            onClick={isEditing ? handleSave : handleEdit}
          >
            {isEditing ? "Zapisz" : "Edytuj"}
          </Button>
          <Button colorScheme="red" mt={3} onClick={handleOpenConfirm}>
            Usuń
          </Button>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isConfirmOpen}
        onClose={handleCloseConfirm}
        size="sm"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Czy na pewno chcesz usunąć ten element?</ModalHeader>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCloseConfirm}>
              Anuluj
            </Button>
            <Button colorScheme="red" onClick={handleDelete}>
              Usuń
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AdminTableWidget;
