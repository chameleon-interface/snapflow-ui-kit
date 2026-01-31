import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './Label'

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A simple `Label` component for form fields. Accepts a `text` prop and an optional `required` boolean to render an asterisk.',
      },
    },
  },
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'Label text content',
      table: { defaultValue: { summary: 'Label' } },
    },
    htmlFor: {
      control: { type: 'text' },
      description: 'ID of the related form field (preferred over htmlFor)',
      table: { defaultValue: { summary: '' } },
    },
    textVariant: {
      control: { type: 'select' },
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'text-16',
        'text-14',
        'text-14-bold',
        'text-16-bold',
        'text-14-medium',
        'small',
        'small-semibold',
        'link',
        'small-link',
      ],
      description: 'Typography variant used for the label',
      table: { defaultValue: { summary: 'text-14-medium' } },
    },
    required: {
      control: { type: 'boolean' },
      description: 'If true, shows a required asterisk',
      table: { defaultValue: { summary: 'false' } },
    },
    color: {
      control: { type: 'color' },
      description: 'Text color for the label (CSS color string)',
      table: { defaultValue: { summary: '' } },
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

/** Default label. */
export const Default: Story = {
  args: {
    text: 'Label',
    textVariant: 'text-14-medium',
    required: false,
    color: 'var(--color-100)',
  },
}

/** Required label with asterisk. */
export const Required: Story = {
  args: {
    text: 'Email',
    textVariant: 'text-14',
    required: true,
    color: 'var(--color-100)',
  },
}

/** Required label with a simple input underneath. */
export const RequiredWithInput: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', width: 240 }}>
      <Label {...args} htmlFor="email-input" />
      <input
        id="email-input"
        type="text"
        placeholder="Enter email"
        aria-required={true}
        required
        style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
      />
    </div>
  ),
  args: {
    text: 'Email',
    textVariant: 'text-14',
    required: true,
    color: 'var(--color-light-900)',
  },
}

/** Several labels showcasing different colors. */
export const ColorVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Label text="Default" textVariant="h1" color="var(--color-light-900)" />
      <Label text="Accent" textVariant="h2" color="var(--color-accent-500)" />
      <Label text="Error" textVariant="h3" color="var(--color-danger-300)" />
      <Label text="Disabled" textVariant="small" color="var(--color-dark-100)" />
    </div>
  ),
  // No global args: each rendered Label sets its own variant/color for demonstration.
}
