import React from "react";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import Add from "../components/add/Add";
import List from "../components/list/List";

export default function Home() {
  return (
    <Container>
      <Header />
      <Add />
      <List />
    </Container>
  );
}
