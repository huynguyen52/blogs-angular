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

export const ButonWithEndIcon: Story = {
  render: (args) => ({
    props: args,
    template: `
    <app-button [endIcon]="endIconTemplate" [type]="type" [disabled]="disabled">Button</app-button>
    <ng-template #endIconTemplate>
        <svg
          class="rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </ng-template>`,
  }),
};
