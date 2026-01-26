import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from './Textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    errorMessage: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

/** Default состояние */
export const Default: Story = {
  args: {
    placeholder: 'Text-area',
  },
}

/** Error состояние */
export const Error: Story = {
  args: {
    placeholder: 'Text-area',
    error: true,
    errorMessage: 'Ошибка ввода',
  },
}

/** Focus состояние */
export const Focus: Story = {
  args: {
    placeholder: 'Text-area',
    value: 'Текст',
  },
  play: async ({ canvasElement }) => {
    const textarea = canvasElement.querySelector('textarea') as HTMLTextAreaElement
    textarea?.focus()
  },
}

/** Disabled состояние */
export const Disabled: Story = {
  args: {
    placeholder: 'Text-area',
    disabled: true,
    value: 'Нельзя редактировать',
  },
}
