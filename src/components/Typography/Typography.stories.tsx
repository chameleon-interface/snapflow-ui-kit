import type { Meta } from '@storybook/react-vite'

import { CheckmarkIcon, HomeIcon, PersonIcon, SearchIcon } from '../../icons'

import { Typography } from './'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A polymorphic typography component that can render as any HTML element or React component.

## Features
- **Multiple variants**: 13 predefined text styles (headings, body text, links)
- **Polymorphic**: Render as any HTML element or React component using the \`as\` prop
- **Icon support**: Add icons before text content
- **Type-safe**: Full TypeScript support with proper prop inference
- **Flexible**: Works with Next.js Link, React Router Link, and other components

## Usage

### Basic usage
\`\`\`tsx
<Typography variant="h1">Heading</Typography>
<Typography variant="text-16">Body text</Typography>
\`\`\`

### With semantic HTML
\`\`\`tsx
<Typography as="h1" variant="h1">Proper H1</Typography>
<Typography as="p" variant="text-14">Paragraph</Typography>
\`\`\`

### With icons
\`\`\`tsx
<Typography variant="h2" icon={<HomeIcon />}>
  Welcome Home
</Typography>
\`\`\`

### As link
\`\`\`tsx
<Typography as="a" variant="link" href="/page">
  Link text
</Typography>
\`\`\`

### With Next.js Link
\`\`\`tsx
import Link from 'next/link'

<Typography as={Link} variant="link" href="/about">
  About Us
</Typography>
\`\`\`

## Variants

| Variant | Size | Weight | Line Height | Use Case |
|---------|------|--------|-------------|----------|
| \`large\` | 26px | 600 | 138% | Large headings, hero titles |
| \`h1\` | 20px | 700 | 180% | Main page headings |
| \`h2\` | 18px | 700 | 133% | Section headings |
| \`h3\` | 16px | 600 | 150% | Subsection headings |
| \`text-16\` | 16px | 400 | 150% | Body text, paragraphs |
| \`text-16-bold\` | 16px | 700 | 150% | Emphasized body text |
| \`text-14\` | 14px | 400 | 171% | Secondary body text |
| \`text-14-bold\` | 14px | 700 | 171% | Emphasized secondary text |
| \`text-14-medium\` | 14px | 500 | 171% | Medium weight secondary text |
| \`small\` | 12px | 400 | 133% | Captions, small text |
| \`small-semibold\` | 12px | 600 | 133% | Emphasized small text |
| \`link\` | 14px | 400 | 171% | Regular links |
| \`small-link\` | 12px | 400 | 133% | Small links |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      description: 'Typography style variant',
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'text-16',
        'text-16-bold',
        'text-14',
        'text-14-bold',
        'text-14-medium',
        'small',
        'small-semibold',
        'link',
        'small-link',
      ],
    },
    as: {
      control: { type: 'text' },
      description: 'HTML element or React component to render as (e.g., "h1", "p", "a", Link)',
      table: { defaultValue: { summary: 'span' } },
    },
    children: {
      control: { type: 'text' },
      description: 'Text content to display',
    },
    icon: {
      description: 'Icon element to display before the text',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta

/**
 * Complete showcase of all typography variants, including headings, body text, links, and examples with icons.
 */
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px', color: 'var(--color-light-900)', fontSize: '14px' }}>
          Headings
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="large">Large - 26px / 600 / 138%</Typography>
          <Typography as="h1" variant="h1">
            H1 - 20px / 700 / 180%
          </Typography>
          <Typography as="h2" variant="h2">
            H2 - 18px / 700 / 133%
          </Typography>
          <Typography as="h3" variant="h3">
            H3 - 16px / 600 / 150%
          </Typography>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px', color: 'var(--color-light-900)', fontSize: '14px' }}>
          Body Text (16px)
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography variant="text-16">Text 16 Regular - 400 / 150%</Typography>
          <Typography variant="text-16-bold">Text 16 Bold - 700 / 150%</Typography>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px', color: 'var(--color-light-900)', fontSize: '14px' }}>
          Body Text (14px)
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography variant="text-14">Text 14 Regular - 400 / 171%</Typography>
          <Typography variant="text-14-medium">Text 14 Medium - 500 / 171%</Typography>
          <Typography variant="text-14-bold">Text 14 Bold - 700 / 171%</Typography>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px', color: 'var(--color-light-900)', fontSize: '14px' }}>
          Small Text (12px)
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography variant="small">Small Regular - 400 / 133%</Typography>
          <Typography variant="small-semibold">Small Semibold - 600 / 133%</Typography>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px', color: 'var(--color-light-900)', fontSize: '14px' }}>
          Links
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography as="a" variant="link" href="#">
            Link - 14px / 400 / 171%
          </Typography>
          <Typography as="a" variant="small-link" href="#">
            Small Link - 12px / 400 / 133%
          </Typography>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px', color: 'var(--color-light-900)', fontSize: '14px' }}>
          With Icons
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="large" icon={<HomeIcon />}>
            Large heading with icon
          </Typography>
          <Typography as="h2" variant="h2" icon={<PersonIcon />}>
            H2 heading with icon
          </Typography>
          <Typography variant="text-16" icon={<SearchIcon />}>
            Body text with icon
          </Typography>
          <Typography as="a" variant="link" href="#" icon={<CheckmarkIcon />}>
            Link with icon
          </Typography>
        </div>
      </div>
    </div>
  ),
}
