import type { Meta, StoryObj } from '@storybook/react-vite'
import React, { useState } from 'react'

import { DatePicker } from './DatePicker'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Component for selecting a date or date range with controlled input value.

## Features
- **Two modes**: single date or date range selection
- **Controlled component**: uses \`value\` and \`onChange\` props for string values in DD.MM.YYYY format
- **Manual input**: type dates directly in DD.MM.YYYY format
- **Automatic parsing**: component automatically parses and validates input
- **Validation**: error display support
- **Accessibility**: ARIA attributes, keyboard navigation (Escape to close)
- **Auto-close**: calendar automatically closes after selecting a complete date/range
- **Intermediate state**: shows selected start date while selecting range end date. If start and end dates are equal, displays single date instead of range format
- **Customization**: configurable styles and behavior

## Usage

### Single date selection
\`\`\`tsx
const [value, setValue] = useState('')

<DatePicker
    mode="single"
    value={value}
    onChange={setValue}
    label="Select date"
    placeholder="Select date"
/>
\`\`\`

**Note:** 
- Calendar automatically closes after selecting a date in single mode
- You can type dates manually in DD.MM.YYYY format
- Component automatically parses and validates the input
- Value is stored as string in DD.MM.YYYY format (e.g., "15.01.2024")

### Date range selection
\`\`\`tsx
const [value, setValue] = useState('')

<DatePicker
    mode="range"
    value={value}
    onChange={setValue}
    label="Select period"
    placeholder="Select range"
/>
\`\`\`

**Note:** 
- In range mode, the component shows intermediate state - when only the start date is selected, it displays that date until the end date is chosen
- If start and end dates are the same, only one date is displayed instead of "date - date"
- Value format: "DD.MM.YYYY - DD.MM.YYYY" for complete range, or "DD.MM.YYYY" for partial range
- Calendar automatically closes when both dates are selected

### Keyboard shortcuts
- **Escape**: Close the calendar popup
- **Click outside**: Close the calendar popup

### Integration with React Hook Form

The DatePicker component can be easily integrated with React Hook Form for form validation and state management.

#### Single date with React Hook Form
\`\`\`tsx
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from './DatePicker';

type FormData = {
    birthDate: string;
};

const MyForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            birthDate: '',
        },
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="birthDate"
                control={control}
                rules={{ required: 'Birth date is required' }}
                render={({ field }) => (
                    <DatePicker
                        mode="single"
                        label="Birth date"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.birthDate?.message}
                        placeholder="Select date"
                    />
                )}
            />
            <button type="submit">Submit</button>
        </form>
    );
};
\`\`\`

#### Date range with React Hook Form
\`\`\`tsx
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from './DatePicker';

type FormData = {
    period: string;
};

const MyForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            period: '',
        },
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="period"
                control={control}
                rules={{
                    validate: (value) => {
                        if (!value || !value.includes(' - ')) {
                            return 'Please select a complete date range';
                        }
                        return true;
                    },
                }}
                render={({ field }) => (
                    <DatePicker
                        mode="range"
                        label="Select period"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.period?.message}
                        placeholder="Select range"
                    />
                )}
            />
            <button type="submit">Submit</button>
        </form>
    );
};
\`\`\`

#### Multiple date fields with React Hook Form
\`\`\`tsx
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from './DatePicker';

type FormData = {
    startDate: string;
    endDate: string;
    vacationPeriod: string;
};

const MyForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="startDate"
                control={control}
                rules={{ required: 'Start date is required' }}
                render={({ field }) => (
                    <DatePicker
                        mode="single"
                        label="Start date"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.startDate?.message}
                        placeholder="Select date"
                    />
                )}
            />

            <Controller
                name="endDate"
                control={control}
                rules={{ required: 'End date is required' }}
                render={({ field }) => (
                    <DatePicker
                        mode="single"
                        label="End date"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.endDate?.message}
                        placeholder="Select date"
                    />
                )}
            />

            <Controller
                name="vacationPeriod"
                control={control}
                render={({ field }) => (
                    <DatePicker
                        mode="range"
                        label="Vacation period"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.vacationPeriod?.message}
                        placeholder="Select range"
                    />
                )}
            />

            <button type="submit">Submit</button>
        </form>
    );
};
\`\`\`
                `,
      },
    },
  },
  argTypes: {
    mode: {
      control: { type: 'select' },
      description: 'Selection mode: single date or range. Determines which props are available.',
      options: ['single', 'range'],
    },
    value: {
      control: { type: 'text' },
      description:
        'Controlled value for the input field. Used for manual date input in DD.MM.YYYY format.',
    },
    onChange: {
      description:
        'Callback when the input value changes. Used to sync input state with parent component.',
      action: 'input changed',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text above the input field',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text shown when no date is selected',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display below the input',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the component and prevent interaction',
    },
  },
  component: DatePicker,
  tags: ['autodocs'],
  title: 'Components/DatePicker',
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof DatePicker>

/**
 * Basic example of single date selection.
 * Calendar automatically closes after selecting a date.
 * You can also type dates manually in DD.MM.YYYY format.
 */
export const SingleDate: Story = {
  render: (args) => {
    const [value, setValue] = useState('')

    return (
      <div style={{ width: '300px' }}>
        <DatePicker {...args} mode="single" value={value} onChange={setValue} />
        {value && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            Selected date: {value}
          </p>
        )}
      </div>
    )
  },
  args: {
    mode: 'single',
    label: 'Birth date',
    placeholder: 'Select date',
  },
}

/**
 * Date range selection.
 * Shows intermediate state when only start date is selected.
 * If start and end dates are the same, displays single date instead of "date - date".
 * Calendar automatically closes when both dates are selected.
 */
export const RangePicker: Story = {
  render: (args) => {
    const [value, setValue] = useState('')

    return (
      <div style={{ width: '300px' }}>
        <DatePicker {...args} mode="range" value={value} onChange={setValue} />
        {value && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            Selected range: {value}
          </p>
        )}
      </div>
    )
  },
  args: {
    mode: 'range',
    label: 'Vacation period',
    placeholder: 'Select range',
  },
}

/**
 * With error state
 */
export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState('')

    return (
      <div style={{ width: '300px' }}>
        <DatePicker {...args} mode="single" value={value} onChange={setValue} />
      </div>
    )
  },
  args: {
    mode: 'single',
    label: 'Select date',
    placeholder: 'Select date',
    error: 'Please select a date',
  },
}

/**
 * Disabled state
 */
export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState('15.01.2024')

    return (
      <div style={{ width: '300px' }}>
        <DatePicker {...args} mode="single" value={value} onChange={setValue} />
      </div>
    )
  },
  args: {
    mode: 'single',
    label: 'Select date',
    disabled: true,
    placeholder: 'Select date',
  },
}

/**
 * With initial date value
 */
export const WithInitialDate: Story = {
  render: (args) => {
    const [value, setValue] = useState('15.01.2024')

    return (
      <div style={{ width: '300px' }}>
        <DatePicker {...args} mode="single" value={value} onChange={setValue} />
        {value && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            Selected date: {value}
          </p>
        )}
      </div>
    )
  },
  args: {
    mode: 'single',
    label: 'Select date',
    placeholder: 'Select date',
  },
}

/**
 * With initial date range
 */
export const WithInitialRange: Story = {
  render: (args) => {
    const [value, setValue] = useState('10.01.2024 - 20.01.2024')

    return (
      <div style={{ width: '300px' }}>
        <DatePicker {...args} mode="range" value={value} onChange={setValue} />
        {value && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            Selected period: {value}
          </p>
        )}
      </div>
    )
  },
  args: {
    mode: 'range',
    label: 'Select period',
    placeholder: 'Select range',
  },
}

/**
 * Demonstrates intermediate state in range mode.
 * When only start date is selected, it's displayed in the input field.
 * If start and end dates are equal, only one date is shown.
 */
export const RangeIntermediateState: Story = {
  render: (args) => {
    const [value, setValue] = useState('')

    return (
      <div style={{ width: '300px' }}>
        <DatePicker {...args} mode="range" value={value} onChange={setValue} />
        <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          {value && !value.includes(' - ') && (
            <p>
              Start date selected: {value}
              <br />
              <small>Now select the end date</small>
            </p>
          )}
          {value && value.includes(' - ') && <p>Complete range: {value}</p>}
          {!value && <p>Select start date to see intermediate state</p>}
        </div>
      </div>
    )
  },
  args: {
    mode: 'range',
    label: 'Select period',
    placeholder: 'Select range',
  },
}

/**
 * All usage variants
 */
export const AllVariants = {
  render: () => {
    const [singleValue, setSingleValue] = useState('')
    const [rangeValue, setRangeValue] = useState('')
    const [errorValue, setErrorValue] = useState('')
    const [disabledValue, setDisabledValue] = useState('15.01.2024')

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          maxWidth: '400px',
        }}
      >
        <div>
          <h4
            style={{
              margin: '0 0 12px',
              color: 'var(--color-light-900)',
              fontSize: '14px',
            }}
          >
            Single date
          </h4>
          <DatePicker
            mode="single"
            label="Select date"
            placeholder="Select date"
            value={singleValue}
            onChange={setSingleValue}
          />
        </div>

        <div>
          <h4
            style={{
              margin: '0 0 12px',
              color: 'var(--color-light-900)',
              fontSize: '14px',
            }}
          >
            Date range
          </h4>
          <DatePicker
            mode="range"
            label="Select period"
            placeholder="Select range"
            value={rangeValue}
            onChange={setRangeValue}
          />
        </div>

        <div>
          <h4
            style={{
              margin: '0 0 12px',
              color: 'var(--color-light-900)',
              fontSize: '14px',
            }}
          >
            With error
          </h4>
          <DatePicker
            mode="single"
            label="Select date"
            placeholder="Select date"
            error="This field is required"
            value={errorValue}
            onChange={setErrorValue}
          />
        </div>

        <div>
          <h4
            style={{
              margin: '0 0 12px',
              color: 'var(--color-light-900)',
              fontSize: '14px',
            }}
          >
            Disabled state
          </h4>
          <DatePicker
            mode="single"
            label="Select date"
            disabled
            placeholder="Select date"
            value={disabledValue}
            onChange={setDisabledValue}
          />
        </div>
      </div>
    )
  },
}
