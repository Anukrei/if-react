import React from "react";

import Container from "../container/Container";
import Title from "../title/Title";
import CardGuestLoves from "../card/CardGuestLoves";

import "../prod/App.css";

export default function SectionGuestLoves() {
  return (
    <Container>
      <Title text="Homes guests loves" />
      <CardGuestLoves />
    </Container>
  );
}
