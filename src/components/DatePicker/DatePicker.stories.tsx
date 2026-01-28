import type { Meta, StoryObj } from '@storybook/react-vite'
import React, { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { DatePicker } from './DatePicker'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Component for selecting a date or date range.

## Features
- **Two modes**: single date or date range selection
- **Validation**: error display support
- **Accessibility**: full keyboard navigation support
- **Customization**: configurable styles and behavior

## Usage

### Single date selection
\`\`\`tsx
<DatePicker
    mode="single"
    label="Select date"
    onSelectDate={(date) => console.log(date)}
/>
\`\`\`

### Date range selection
\`\`\`tsx
<DatePicker
    mode="range"
    label="Select period"
    onSelectRange={(range) => console.log(range)}
/>
\`\`\`

### Integration with React Hook Form

The DatePicker component can be easily integrated with React Hook Form for form validation and state management.

#### Single date with React Hook Form
\`\`\`tsx
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from './DatePicker';

type FormData = {
    birthDate: Date;
};

const MyForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            birthDate: undefined,
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
                        date={field.value}
                        onSelectDate={(date) => field.onChange(date)}
                        error={errors.birthDate?.message}
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
import { DateRange } from 'react-day-picker';
import { DatePicker } from './DatePicker';

type FormData = {
    period: DateRange;
};

const MyForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            period: undefined,
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
                        if (!value?.from || !value?.to) {
                            return 'Please select a date range';
                        }
                        return true;
                    },
                }}
                render={({ field }) => (
                    <DatePicker
                        mode="range"
                        label="Select period"
                        date={field.value}
                        onSelectRange={(range) => field.onChange(range)}
                        error={errors.period?.message}
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
import { DateRange } from 'react-day-picker';
import { DatePicker } from './DatePicker';

type FormData = {
    startDate: Date;
    endDate: Date;
    vacationPeriod: DateRange;
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
                        date={field.value}
                        onSelectDate={(date) => field.onChange(date)}
                        error={errors.startDate?.message}
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
                        date={field.value}
                        onSelectDate={(date) => field.onChange(date)}
                        error={errors.endDate?.message}
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
                        date={field.value}
                        onSelectRange={(range) => field.onChange(range)}
                        error={errors.vacationPeriod?.message}
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
      description: 'Selection mode: single date or range',
      options: ['single', 'range'],
    },
    label: {
      control: { type: 'text' },
      description: 'Label text above the input field',
    },
    error: {
      control: { type: 'text' },
      description: 'Error text to display',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the component',
    },
    onSelectDate: {
      description: 'Callback when a single date is selected',
      action: 'date selected',
    },
    onSelectRange: {
      description: 'Callback when a date range is selected',
      action: 'range selected',
    },
  },
  component: DatePicker,
  tags: ['autodocs'],
  title: 'Components/DatePicker',
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof DatePicker>

/**
 * Basic example of single date selection
 */
export const SingleDate: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>()

    return (
      <div style={{ width: '300px' }}>
        <DatePicker
          {...args}
          mode="single"
          date={date}
          onSelectDate={(selectedDate) => {
            setDate(selectedDate)
            args.onSelectDate?.(selectedDate)
          }}
        />
        {date && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            Selected date: {date.toLocaleDateString()}
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
 * Date range selection
 */
export const RangePicker: Story = {
  render: (args) => {
    const [range, setRange] = useState<DateRange | undefined>()

    return (
      <div style={{ width: '300px' }}>
        <DatePicker
          {...args}
          mode="range"
          date={range}
          onSelectRange={(selectedRange) => {
            setRange(selectedRange)
            args.onSelectRange?.(selectedRange)
          }}
        />
        {range?.from && range?.to && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            Period: {range.from.toLocaleDateString()} - {range.to.toLocaleDateString()}
          </p>
        )}
        {range?.from && !range?.to && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            Start date: {range.from.toLocaleDateString()} (select end date)
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
 * With error state
 */
export const WithError: Story = {
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
    const initialDate = new Date(2024, 0, 15)
    const [date, setDate] = useState<Date | undefined>(initialDate)

    return (
      <div style={{ width: '300px' }}>
        <DatePicker
          {...args}
          mode="single"
          date={date}
          onSelectDate={(selectedDate) => {
            setDate(selectedDate)
            args.onSelectDate?.(selectedDate)
          }}
        />
        {date && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            Selected date: {date.toLocaleDateString()}
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
    const initialRange: DateRange = {
      from: new Date(2024, 0, 10),
      to: new Date(2024, 0, 20),
    }
    const [range, setRange] = useState<DateRange | undefined>(initialRange)

    return (
      <div style={{ width: '300px' }}>
        <DatePicker
          {...args}
          mode="range"
          date={range}
          onSelectRange={(selectedRange) => {
            setRange(selectedRange)
            args.onSelectRange?.(selectedRange)
          }}
        />
        {range?.from && range?.to && (
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            Period: {range.from.toLocaleDateString()} - {range.to.toLocaleDateString()}
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
 * All usage variants
 */
export const AllVariants = {
  render: () => {
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
          <DatePicker mode="single" label="Select date" placeholder="Select date" />
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
          <DatePicker mode="range" label="Select period" placeholder="Select range" />
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
          <DatePicker mode="single" label="Select date" disabled placeholder="Select date" />
        </div>
      </div>
    )
  },
}
