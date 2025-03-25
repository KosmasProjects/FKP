import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridRozwazni from "./GridRozwazni";
import Title from "../../components/Title";
import ProjectDescription from "../../components/ProjectDescription";

export default function RozwazniIRomantyczni() {
  return (
    <>
      <Title title="Rozwani i Romantyczni" color={"blue.400"} />
      <GridRozwazni />
      <ProjectDescription
        title="Pomniki Poznania"
        color={"blue.500"}
        link={
          "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ROZWAZNI-ROMANTYCZNI_logo-pion_cmyk.svg"
        }
      />
      
    </>
  );
}
