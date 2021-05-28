import React from "react";
import Showcase from "../components/Showcase";

export default {
  title: "UI/Showcase",
  component: Showcase,
};

const arts = [
  {
    id: "4",
    title: "Ma seconde oeuvre mise en avant",
    description: "Ceci est la description de ma deuxième oeuvre ",
    price: 25.99,
    slug: "ma-seconde-oeuvre-mise-en-avant",
    pictures: [
      {
        url: "/uploads/photo_1598029018509_3cceeec6faba_a577e48a1a.jpeg",
        alternativeText: "Du texte alternatif",
      },
    ],
  },
  {
    id: "3",
    title: "Mon oeuvre",
    description: "La description de mon oeuvre",
    price: 16.79,
    slug: "mon-oeuvre",
    pictures: [
      {
        url: "/uploads/photo_1615818499660_30bb5816e1c7_ab834f4fe3.jpeg",
        alternativeText: "",
      },
    ],
  },
  {
    id: "5",
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
  },
];

const Template = (args) => (
  <Showcase style={{ transform: `translate(0%, 0%)` }} {...args} arts={arts} />
);

export const ShowcaseExemple = Template.bind({});
ShowcaseExemple.args = {};
