import BaseButton from "components/share/ui/button/base-button.vue";

import type { Meta, StoryObj } from "@nuxtjs/storybook";
import { centerDecorator } from "decorators/decorators";

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  decorators: [centerDecorator],
};

export default meta;

type Story = StoryObj<typeof BaseButton>;

export const Primary: Story = {
  args: {
    default: "Кнопка",
    btnType: "primary",
  },
};

export const Disabled: Story = {
  args: {
    default: "Не доступно",
    disabled: true,
  },
};

export const WithLeftRight: Story = {
  args: {
    "base-button-left": "Иконка",
    "base-button-right": "Иконка",
    "default": "Действие",
  },
};
