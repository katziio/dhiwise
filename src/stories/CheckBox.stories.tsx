import React from "react";
import { CheckBox } from "components";
import { Meta, Story } from "@storybook/react";

export default {
  title: "katziio_s_application2/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox: Story<any> = (args) => <CheckBox {...args} />;

SampleCheckbox.args = {
  shape: "square",
  color: "bluegray_100",
  size: "xs",
  variant: "outline",
  label: "Checkbox",
  inputClassName: "mr-1",
};
