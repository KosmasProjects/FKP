import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridWS from "./GridWS";
import Title from "../../components/Title";
import ProjectDescription from "../../components/ProjectDescription";

export default function WspolnaSprawa() {
  return (
    <>
      <Title title="Wspólna Sprawa 44" color={"orange.500"} />
      <GridWS />
      <ProjectDescription
        title="Pomniki Poznania"
        color={"orange.500"}
        link={
          "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/WS'44_logo_CMYK_biel+czerw.svg"
        }
      />
      
    </>
  );
}
