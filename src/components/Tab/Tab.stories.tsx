import type { Meta, StoryObj } from '@storybook/react-vite'
import React, { useState } from 'react'

import { Tab } from '.'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A tab component that represents a single tab in a tab list. Supports selected and disabled states. Renders as a button element with role="tab" for accessibility.',
      },
    },
  },
  argTypes: {
    selected: {
      control: { type: 'boolean' },
      description: 'Indicates whether the tab is currently selected',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the tab, preventing user interaction',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      description: 'Tab content',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
      table: { type: {} },
    },
  },
  component: Tab,
  tags: ['autodocs'],
  title: 'Components/Tab',
} satisfies Meta<typeof Tab>

export default meta
type Story = StoryObj<typeof meta>

/** Tab group with 4 tabs: General Information, Devices, Account Management, My payments. */
export const TabGroup: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = useState('General Information')

    const tabs = ['General Information', 'Devices', 'Account Management', 'My payments']

    return (
      <div
        style={{
          display: 'flex',
          gap: 0,
          width: '972px',
          backgroundColor: 'var(--color-dark-700)',
        }}
      >
        {tabs.map((tab) => (
          <Tab key={tab} selected={selectedTab === tab} onClick={() => setSelectedTab(tab)}>
            {tab}
          </Tab>
        ))}
      </div>
    )
  },
}

/** Default tab in unselected state. Use for inactive tabs in a tab list. */
export const Default: Story = {
  args: {
    children: 'Tab-1',
  },
}

/** Disabled tab in unselected state. Use when the tab is not available for interaction. */
export const DefaultDisabled: Story = {
  args: {
    children: 'Tab-2',
    disabled: true,
  },
}

/** Selected tab in active state. Use for the currently active tab in a tab list. */
export const Selected: Story = {
  args: {
    children: 'Tab-3',
    selected: true,
  },
}

/** Selected and disabled tab. Use when the active tab should be visually selected but not interactive. */
export const SelectedDisabled: Story = {
  args: {
    children: 'Tab-4',
    selected: true,
    disabled: true,
  },
}
