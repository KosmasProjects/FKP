import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import GridLiteracki from "./GridLiteracki";
import Title from "../../components/Title";

export default function LiterackiPoznan() {
  return (
    <>
      <Title title="Literacki Poznań" color={"pink.400"} />
      <GridLiteracki />
      <Container maxW={"5xl"} pb={"200px"}></Container>
    </>
  );
}
