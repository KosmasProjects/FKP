import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridHerstoria from "./GridHerstoria";
import Title from "../../components/Title";
import ProjectDescription from "../../components/ProjectDescription";

export default function Herstoria() {
  return (
    <>
      <Title title="Herstoria Warta Poznania" color={"purple.400"} />
      <GridHerstoria />
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
