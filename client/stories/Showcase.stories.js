import React from "react";
import Showcase from "../components/Showcase";

export default {
  title: "UI/Showcase",
  component: Showcase,
};

const Template = (args) => <Showcase {...args} />;

export const ShowcaseExemple = Template.bind({});
ShowcaseExemple.args = {};
