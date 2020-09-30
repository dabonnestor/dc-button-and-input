import React from "react";

import { Input } from ".";

export default {
  title: "Input",
  component: Input,
};

const Template = (args) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const HelperText = Template.bind({});
HelperText.args = {
  helperText: "Some interesting text",
};

export const HelperTextError = Template.bind({});
HelperTextError.args = {
  helperText: "Some interesting text",
  error: true,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: "favorite",
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  endIcon: "favorite",
};

export const Value = Template.bind({});
Value.args = {
  value: "Some text here...",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
  multiline: true,
};
