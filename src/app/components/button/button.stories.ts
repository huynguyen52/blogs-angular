import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['submit', 'button'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: { type: 'button', disabled: false },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Button: Story = {
  render: (args) => ({
    props: args,
    template: `<app-button [type]="type" [disabled]="disabled">Button</app-button>`,
  }),
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<app-button [type]="type" [disabled]="disabled">Button</app-button>`,
  }),
};
