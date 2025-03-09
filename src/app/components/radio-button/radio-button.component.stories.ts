import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { RadioButtonComponent } from './radio-button.component';

const meta: Meta<RadioButtonComponent> = {
  title: 'components/RadioButton',
  component: RadioButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
  ],
  argTypes: {
    value: { control: 'text' },
    name: { control: 'text' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: {
    value: '1',
    name: 'example',
    disabled: false,
    label: 'Option 1',
  },
  render: (args) => ({
    props: {
      ...args,
      selectedValue: '1',
    },
    template: `
      <app-radio-button
        [(ngModel)]="selectedValue"
        [label]="label"
        [name]="name"
        [value]="value"
        [disabled]="disabled"
      ></app-radio-button>
      <app-radio-button
        [(ngModel)]="selectedValue"
        label="Option 2"
        name="example"
        value="2"
      ></app-radio-button>
      <app-radio-button
        [(ngModel)]="selectedValue"
        label="Option 3"
        name="example"
        value="3"
      ></app-radio-button>
      <p>Selected Value: {{ selectedValue }}</p>
    `,
  }),
};
