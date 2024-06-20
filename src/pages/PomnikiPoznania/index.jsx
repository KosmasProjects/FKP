import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridPomniki from "./GridPomniki";
import Title from "../../components/Title";
import ProjectDescription from "../../components/ProjectDescription";

export default function PomnikiPoznania() {
  return (
    <>
      <Title title="Pomniki Poznania" color={"teal.500"} />
      <GridPomniki />
      <ProjectDescription
        title="Pomniki Poznania"
        color={"teal.500"}
        link={
          "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/POMNIKI-POZNANIA_logo-pion_cmyk.svg"
        }
      />
    </>
  );
}
