import { Center, useDisclosure, Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import PersonCard from "../../components/PersonCard";

export default function Team() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      name: "Paweł",
      surname: "Cieliczko",
      photo_url:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/DSC_7070.jpg",
      organization: "Zarząd Fundacji Kochania Poznania",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł",
      surname: "Cieliczko",
      photo_url:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/DSC_7070.jpg",
      organization: "Zarząd Fundacji Kochania Poznania",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł",
      surname: "Cieliczko",
      photo_url:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/DSC_7070.jpg",
      organization: "Zarząd Fundacji Kochania Poznania",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł",
      surname: "Cieliczko",
      photo_url:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/DSC_7070.jpg",
      organization: "Zarząd Fundacji Kochania Poznania",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł",
      surname: "Cieliczko",
      photo_url:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/DSC_7070.jpg",
      organization: "Zarząd Fundacji Kochania Poznania",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł",
      surname: "Cieliczko",
      photo_url:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/DSC_7070.jpg",
      organization: "Zarząd Fundacji Kochania Poznania",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł",
      surname: "Cieliczko",
      photo_url:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/DSC_7070.jpg",
      organization: "Zarząd Fundacji Kochania Poznania",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł",
      surname: "Cieliczko",
      photo_url:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/DSC_7070.jpg",
      organization: "Zarząd Fundacji Kochania Poznania",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł",
      surname: "Cieliczko",
      photo_url:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/DSC_7070.jpg",
      organization: "Zarząd Fundacji Kochania Poznania",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł",
      surname: "Cieliczko",
      photo_url:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/DSC_7070.jpg",
      organization: "Zarząd Fundacji Kochania Poznania",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
  ];

  return (
    <Center>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
          "repeat(5, 1fr)",
        ]}
        rowGap={4}
        gap={10}
        maxW="100%"
      >
        {" "}
        {items.map((item, index) => (
          <PersonCard item={item} />
        ))}
      </Grid>
    </Center>
  );
}
