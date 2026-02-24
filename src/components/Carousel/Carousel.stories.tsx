import type { Meta, StoryObj } from '@storybook/react-vite'
import React, { useState } from 'react'

import { Carousel } from '.'

const CAROUSEL_WIDTH = 400
const CAROUSEL_HEIGHT = 280

const slideStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  minHeight: 0,
  color: 'var(--color-light-100)',
  fontSize: 24,
  fontWeight: 600,
}

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Carousel with arrows and dots. Supports controlled/uncontrolled mode, auto-play, single or multiple slides. Accessible (ARIA, keyboard).',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: CAROUSEL_WIDTH, height: CAROUSEL_HEIGHT }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      description: 'Slide content (array of nodes)',
      control: false,
    },
    value: {
      control: { type: 'number', min: 0 },
      description: 'Controlled current slide index',
    },
    onValueChange: {
      action: 'onValueChange',
      description: 'Called when slide changes',
    },
    autoPlayInterval: {
      control: { type: 'number', min: 0 },
      description: 'Auto-advance interval in ms (0 = off)',
    },
    hideArrowsWhenSingle: {
      control: 'boolean',
      description: 'Hide arrows when only one slide',
      table: { defaultValue: { summary: 'true' } },
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Carousel>

export default meta

type Story = StoryObj<typeof meta>

const defaultSlides = [
  <div key="1" style={{ ...slideStyles, backgroundColor: 'var(--color-accent-500)' }}>
    Slide 1
  </div>,
  <div key="2" style={{ ...slideStyles, backgroundColor: 'var(--color-dark-300)' }}>
    Slide 2
  </div>,
  <div key="3" style={{ ...slideStyles, backgroundColor: 'var(--color-danger-500)' }}>
    Slide 3
  </div>,
]

/** Uncontrolled carousel with 3 slides. Use arrows or dots to navigate. */
export const Default: Story = {
  args: {
    children: defaultSlides,
  },
}

/** Controlled carousel: index is managed externally. */
export const Controlled: Story = {
  args: {
    children: defaultSlides,
  },
  render: (args) => {
    const [value, setValue] = useState(0)
    return (
      <Carousel {...args} value={value} onValueChange={setValue}>
        {args.children}
      </Carousel>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Slide index is controlled via value + onValueChange.',
      },
    },
  },
}

/** Single slide: arrows and dots are hidden by default. */
export const SingleSlide: Story = {
  args: {
    children: [
      <div key="1" style={{ ...slideStyles, backgroundColor: 'var(--color-accent-500)' }}>
        Only one slide
      </div>,
    ],
  },
}

/** Single slide with arrows visible (hideArrowsWhenSingle: false). */
export const SingleSlideWithArrows: Story = {
  args: {
    hideArrowsWhenSingle: false,
    children: [
      <div key="1" style={{ ...slideStyles, backgroundColor: 'var(--color-accent-500)' }}>
        One slide, arrows shown
      </div>,
    ],
  },
}

/** Auto-play every 2 seconds. */
export const AutoPlay: Story = {
  args: {
    children: defaultSlides,
    autoPlayInterval: 2000,
  },
  parameters: {
    docs: {
      description: {
        story: 'Slides advance automatically every 2 seconds.',
      },
    },
  },
}

/** Slides with image-style content. */
export const WithImages: Story = {
  args: {
    children: [
      <div key="1" style={{ ...slideStyles, padding: 0 }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            minHeight: 0,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 8,
          }}
        />
      </div>,
      <div key="2" style={{ ...slideStyles, padding: 0 }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            minHeight: 0,
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            borderRadius: 8,
          }}
        />
      </div>,
      <div key="3" style={{ ...slideStyles, padding: 0 }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            minHeight: 0,
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            borderRadius: 8,
          }}
        />
      </div>,
    ],
  },
}
