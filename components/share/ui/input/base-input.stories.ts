import type { Meta, StoryObj } from "@nuxtjs/storybook";
import BaseInput from "components/share/ui/input/base-input.vue";
import { centerDecorator } from "decorators/decorators";
import { expect, fn, userEvent, within } from "@storybook/test";
import sleep from "helpers/sleep";
const meta: Meta<typeof BaseInput> = {
  component: BaseInput,
  decorators: [centerDecorator],
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BaseInput>;

export const Primary: Story = {
  args: {
    name: "input",
    default: "Поле ввода",
    placeholder: "Введите текст",
  },
};

export const Disabled: Story = {
  args: {
    name: "password",
    default: "Password",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Используется во время недоступности поля",
      },
    },
  },
};

export const InputWithError: Story = {
  args: {
    modelValue: "user",
    name: "login",
    default: "Логин",
    placeholder: "Логин",
    error: "Логин уже занят",
  },
  parameters: {
    docs: {
      description: {
        story: "Вывод ошибки",
      },
    },
  },
};
