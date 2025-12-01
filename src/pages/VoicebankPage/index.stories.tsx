import type { Meta, StoryObj } from "@storybook/react";
import VoicebankPage from "./index";

const meta: Meta<typeof VoicebankPage> = {
  title: "Pages/VoicebankPage",
  component: VoicebankPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof VoicebankPage>;

export const Default: Story = {};
