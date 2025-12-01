import type { Meta, StoryObj } from "@storybook/react-vite";
import AboutPage from "./index";

const meta: Meta<typeof AboutPage> = {
  title: "Pages/AboutPage",
  component: AboutPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Default: Story = {};
