import { Center, useDisclosure, Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import PersonCard from "../../components/PersonCard";

export default function Team() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/DSC_7070.jpg",
      group: "Zarząd Fundacji Kochania Poznania",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Elwira Fronczak",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg",
      group: "Stowarzyszenie Husaria",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Katarzyna Słupianek-Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg",
      group: "Stowarzyszenie Husaria",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/rekografiazeznakiem086.jpg",
      group: "Stowarzyszenie Husaria",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Fronczak.png",
      group: "Stowarzyszenie Husaria",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Fronczak.png",
      group: "Stowarzyszenie Husaria",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Fronczak.png",
      group: "Stowarzyszenie Husaria",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Fronczak.png",
      group: "Stowarzyszenie Husaria",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Fronczak.png",
      group: "Stowarzyszenie Husaria",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Fronczak.png",
      group: "Stowarzyszenie Husaria",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
  ];

  return (
    <Center>
      <Grid templateColumns="repeat(5, 1fr)" rowGap={4} gap={10} maxW="100%">
        {items.map((item, index) => (
          <PersonCard item={item} />
        ))}
      </Grid>

      {/* ...rest of your code... */}
    </Center>
  );
}
