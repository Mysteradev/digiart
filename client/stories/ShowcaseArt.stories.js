import React from "react";
import { Col } from "reactstrap";
import ShowcaseArt from "../components/ShowcaseArt";

export default {
  title: "UI/ShowcaseArt",
  component: ShowcaseArt,
};

const Template = (args) => (
  <Col xs={4}>
    <ShowcaseArt {...args} />
  </Col>
);

export const ShowcaseExemple = Template.bind({});
ShowcaseExemple.args = {
  title: "Ma troisième oeuvre",
  description: "La troisième oeuvre mise en avant",
  price: 453.45,
  slug: "ma-troisieme-oeuvre",
  pictures: [
    {
      url: "/uploads/photo_1499781350541_7783f6c6a0c8_8f97f5489a.jpeg",
      alternativeText: "",
    },
  ],
};
