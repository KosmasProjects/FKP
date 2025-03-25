import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridBimba from "./GridBimba";
import Title from "../../components/Title";
import ProjectDescription from "../../components/ProjectDescription";

export default function BimbaWHistorie() {
  return (
    <>
      <Title title="Bimbą w historię" color={"orange.500"} />
      <GridBimba />

      <ProjectDescription 
        title="Pomniki Poznania"
        color={"orange.500"}
        link={
          "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/BIMBA-W-HISTORIE_logo-pion_rgb.png"
        }
      />

      

    </>
  );
}
