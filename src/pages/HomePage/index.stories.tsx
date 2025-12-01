import type { Meta, StoryObj } from "@storybook/react-vite";
import HomePage from "./index";

const meta: Meta<typeof HomePage> = {
  title: "Pages/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};
