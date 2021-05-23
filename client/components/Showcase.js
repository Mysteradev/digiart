import ShowcaseArt from "./ShowcaseArt";
import { useState } from "react";
import { Row } from "reactstrap";

const artsData = [
  {
    title: "Ma première oeuvre",
    image:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: "64",
  },
  {
    title: "Ma seconde oeuvre",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: "24",
  },
  {
    title: "Mon oeuvre à Shibuya",
    image:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: "64",
  },
];

const Showcase = () => {
  const [arts, setArts] = useState(artsData);

  return (
    <section className="showcase">
      <Row>{arts && arts.map((art) => <ShowcaseArt {...art} />)}</Row>
    </section>
  );
};

export default Showcase;
