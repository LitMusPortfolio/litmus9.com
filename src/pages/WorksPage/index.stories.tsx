import type { Meta, StoryObj } from "@storybook/react-vite";
import WorksPage from "./index";

const meta: Meta<typeof WorksPage> = {
  title: "Pages/WorksPage",
  component: WorksPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof WorksPage>;

export const Default: Story = {};
