import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridWS from "./GridWS";
import Title from "../../components/Title";

export default function WspolnaSprawa() {
  return (
    <>
      <Title title="Wspólna Sprawa 44" color={"orange.500"} />

      <GridWS />
      <Container maxW={"5xl"} pb={"200px"}></Container>
    </>
  );
}
