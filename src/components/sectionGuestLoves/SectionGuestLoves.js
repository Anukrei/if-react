import React from "react";
import Container from "../container/container";
import Title from "../title/title";
import CardGuestLoves from "../card/cardGuestLoves";

import "../prod/App.css";

export default function SectionGuestLoves() {
  return (
    <Container>
      <Title text="Homes guests loves" />
      <CardGuestLoves />
    </Container>
  );
}
