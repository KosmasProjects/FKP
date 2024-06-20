import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridHerstoria from "./GridHerstoria";
import Title from "../../components/Title";

export default function Herstoria() {
  return (
    <>
      <Title title="Herstoria Warta Poznania" color={"purple.400"} />
      <GridHerstoria />
      <Container maxW={"5xl"} pb={"200px"}></Container>
    </>
  );
}
