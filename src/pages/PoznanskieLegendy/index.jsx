import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridLegendy from "./GridLegendy";
import Title from "../../components/Title";
import ProjectDescription from "../../components/ProjectDescription";

export default function PoznanskieLegendy() {
  return (
    <>
      <Title title="Poznańskie Legendy" color={"green.400"} />
      <GridLegendy />
      <ProjectDescription
        title="Poznańskie Legendy"
        color={"green.400"}
        link={
          "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/logopomniki.png"
        }
      />
    </>
  );
}
