import React from "react";

import { Button } from ".";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  color: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Danger",
  color: "danger",
};

export const Outline = Template.bind({});
Outline.args = {
  label: "Default",
  disabledShadow: true,
  variant: "outline",
};

export const Text = Template.bind({});
Text.args = {
  label: "Default",
  disabledShadow: true,
  variant: "text",
  color: "primary",
};

export const DisabledShadow = Template.bind({});
DisabledShadow.args = {
  label: "Default",
  disabledShadow: true,
  color: "primary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Default",
  disabledShadow: true,
  disabled: true,
};

export const DisabledText = Template.bind({});
DisabledText.args = {
  label: "Default",
  disabledShadow: true,
  disabled: true,
  variant: "text",
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  label: "Default",
  color: "primary",
  startIcon: "favorite",
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  label: "Default",
  color: "primary",
  endIcon: "favorite",
};

export const Small = Template.bind({});
Small.args = {
  label: "Default",
  size: "sm",
  color: "primary",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Default",
  color: "primary",
};

export const Large = Template.bind({});
Large.args = {
  label: "Default",
  size: "lg",
  color: "primary",
};
