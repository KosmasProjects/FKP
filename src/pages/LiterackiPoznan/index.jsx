import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridLiteracki from "./GridLiteracki";
import Title from "../../components/Title";
import ProjectDescription from "../../components/ProjectDescription";

export default function LiterackiPoznan() {
  return (
    <>
      <Title title="Literacki Poznań" color={"teal.400"} />
      <GridLiteracki />
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
