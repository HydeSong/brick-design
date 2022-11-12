import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "primary",
  children: "Button",
};

const btnStyle = {
  marginRight: "8px",
  marginBottom: "12px",
};

export const Basic = () => (
  <>
    <Button type="primary" style={btnStyle}>
      Primary Button
    </Button>
    <Button style={btnStyle}>Default Button</Button>
    <Button type="dashed" style={btnStyle}>
      Dashed Button
    </Button>
    <br />
    <Button type="text" style={btnStyle}>
      Text Button
    </Button>
    <Button type="link" style={btnStyle}>
      Link Button
    </Button>
  </>
);

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
