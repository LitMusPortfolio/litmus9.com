import type { Meta, StoryObj } from "@storybook/react";
import { MobileNotice } from "./MobileNotice";

const meta = {
  title: "Components/MobileNotice",
  component: MobileNotice,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MobileNotice>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
