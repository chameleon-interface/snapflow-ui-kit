import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../Button'
import { Radio } from '../Radio'
import { Typography } from '../Typography'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Simple container with padding, border, and dark background. Use it as a visual wrapper for grouped form controls or actions.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: 'var(--color-dark-900)',
          padding: '80px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      description: 'Card content',
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const AccountSelection: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="text-14-bold" as="div" style={{ color: 'var(--color-light-100)' }}>
          Account type:
        </Typography>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Radio defaultChecked name="account" value="personal">
            Personal
          </Radio>
          <Radio name="account" value="business">
            Business
          </Radio>
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Group related form controls inside a Card to separate them from surrounding content.',
      },
    },
  },
}

export const WithActions: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h3" as="h3" style={{ color: 'var(--color-light-100)' }}>
            New project
          </Typography>
          <Typography variant="text-14" style={{ color: 'var(--color-light-900)' }}>
            Configure basic details
          </Typography>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          <Button variant="primary">Create</Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Use Card as a lightweight panel for brief summaries and action buttons.',
      },
    },
  },
}
