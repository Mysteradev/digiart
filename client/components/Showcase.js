import ShowcaseArt from "./ShowcaseArt";
import { useState } from "react";
import { Container, Row } from "reactstrap";

const artsData = [
  {
    id: 1,
    title: "Ma première oeuvre",
    image:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: "64",
  },
  {
    id: 2,
    title: "Ma seconde oeuvre",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: "24",
  },
  {
    id: 3,
    title: "Mon oeuvre à Shibuya",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    price: "64",
  },
];

const Showcase = () => {
  const [arts, setArts] = useState(artsData);

  return (
    <Container>
      <Row>
        {arts && arts.map((art) => <ShowcaseArt key={art.id} {...art} />)}
      </Row>
    </Container>
  );
};

export default Showcase;
