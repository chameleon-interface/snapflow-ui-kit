import { useEffect, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  CheckmarkIcon,
  FlagRussia,
  FlagUK,
  HomeIcon,
  PersonIcon,
  SearchIcon,
  SettingsIcon,
} from '@/icons'

import { Select } from './'
import type { SelectOption } from './Select.types'

const meta = {
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A custom select dropdown component with label support. Provides a styled alternative to native select elements with click-outside detection.',
      },
    },
  },
  argTypes: {
    options: {
      description: 'Array of options with label, value, and optional icon properties',
    },
    value: {
      control: { type: 'text' },
      description: 'Currently selected value',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text displayed above the select',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text when no option is selected',
      table: { defaultValue: { summary: 'Select an option' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the select component',
      table: { defaultValue: { summary: 'false' } },
    },
    searchable: {
      control: { type: 'boolean' },
      description: 'Shows search input to filter options by label',
      table: { defaultValue: { summary: 'false' } },
    },
    searchMode: {
      control: { type: 'radio' },
      options: ['local', 'remote'],
      description: 'Search behavior mode',
      table: { defaultValue: { summary: 'local' } },
    },
    searchDebounceMs: {
      control: { type: 'number' },
      description: 'Debounce delay for search query updates',
      table: { defaultValue: { summary: '180' } },
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Shows loading text in dropdown while options are loading',
      table: { defaultValue: { summary: 'false' } },
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when an option is selected',
      table: { type: {} },
    },
  },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const sampleOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
]

const remoteCityOptionsSource: SelectOption[] = [
  { label: 'Amsterdam', value: 'amsterdam' },
  { label: 'Athens', value: 'athens' },
  { label: 'Bangkok', value: 'bangkok' },
  { label: 'Barcelona', value: 'barcelona' },
  { label: 'Berlin', value: 'berlin' },
  { label: 'Boston', value: 'boston' },
  { label: 'Buenos Aires', value: 'buenos-aires' },
  { label: 'Chicago', value: 'chicago' },
  { label: 'Copenhagen', value: 'copenhagen' },
  { label: 'Dubai', value: 'dubai' },
  { label: 'Helsinki', value: 'helsinki' },
  { label: 'Istanbul', value: 'istanbul' },
  { label: 'Lisbon', value: 'lisbon' },
  { label: 'London', value: 'london' },
  { label: 'Madrid', value: 'madrid' },
  { label: 'Milan', value: 'milan' },
  { label: 'New York', value: 'new-york' },
  { label: 'Paris', value: 'paris' },
  { label: 'Prague', value: 'prague' },
  { label: 'Rome', value: 'rome' },
  { label: 'San Francisco', value: 'san-francisco' },
  { label: 'Singapore', value: 'singapore' },
  { label: 'Stockholm', value: 'stockholm' },
  { label: 'Sydney', value: 'sydney' },
  { label: 'Tokyo', value: 'tokyo' },
  { label: 'Toronto', value: 'toronto' },
  { label: 'Vienna', value: 'vienna' },
  { label: 'Warsaw', value: 'warsaw' },
  { label: 'Zurich', value: 'zurich' },
]

const DefaultExample = () => {
  const [value, setValue] = useState('')

  return (
    <Select
      label="Favorite fruit"
      options={sampleOptions}
      placeholder="Choose a fruit"
      value={value}
      onChange={setValue}
    />
  )
}

/** Default select with options and placeholder. */
export const Default = {
  render: () => <DefaultExample />,
}

const WithSelectedValueExample = () => {
  const [value, setValue] = useState('banana')

  return (
    <Select
      label="Favorite fruit"
      options={sampleOptions}
      placeholder="Choose a fruit"
      value={value}
      onChange={setValue}
    />
  )
}

/** Select with a pre-selected value. */
export const WithSelectedValue = {
  render: () => <WithSelectedValueExample />,
}

const CustomPlaceholderExample = () => {
  const [value, setValue] = useState('')

  return (
    <Select
      label="Favorite fruit"
      options={sampleOptions}
      placeholder="Pick your favorite fruit"
      value={value}
      onChange={setValue}
    />
  )
}

/** Select with custom placeholder. */
export const CustomPlaceholder = {
  render: () => <CustomPlaceholderExample />,
}

/** Select in disabled state. */
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Favorite fruit',
    options: sampleOptions,
    placeholder: 'Choose a fruit',
  },
}

/** Disabled select with a selected value. */
export const DisabledWithValue: Story = {
  args: {
    disabled: true,
    label: 'Favorite fruit',
    options: sampleOptions,
    value: 'cherry',
  },
}

/** Disabled via fieldset inheritance. */
export const DisabledInFieldset: Story = {
  render: () => {
    const [value, setValue] = useState('banana')

    return (
      <fieldset disabled style={{ border: 'none', margin: 0, padding: 0, width: 300 }}>
        <Select
          label="Favorite fruit"
          options={sampleOptions}
          placeholder="Choose a fruit"
          value={value}
          onChange={setValue}
        />
      </fieldset>
    )
  },
}

const ControlledExample = () => {
  const [value, setValue] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Select
        label="Favorite fruit"
        options={sampleOptions}
        value={value}
        onChange={setValue}
        placeholder="Choose a fruit"
      />
      <div style={{ color: 'var(--color-light-100)', fontSize: '14px' }}>
        Selected value: <strong>{value || 'none'}</strong>
      </div>
    </div>
  )
}

/** Interactive controlled example. */
export const Controlled = {
  render: () => <ControlledExample />,
}

const ManyOptionsExample = () => {
  const [value, setValue] = useState('')

  return (
    <Select
      label="Select a country"
      options={[
        { label: 'United States', value: 'us' },
        { label: 'United Kingdom', value: 'uk' },
        { label: 'Canada', value: 'ca' },
        { label: 'Australia', value: 'au' },
        { label: 'Germany', value: 'de' },
        { label: 'France', value: 'fr' },
        { label: 'Italy', value: 'it' },
        { label: 'Spain', value: 'es' },
        { label: 'Japan', value: 'jp' },
        { label: 'China', value: 'cn' },
        { label: 'India', value: 'in' },
        { label: 'Brazil', value: 'br' },
        { label: 'Mexico', value: 'mx' },
        { label: 'Russia', value: 'ru' },
        { label: 'South Korea', value: 'kr' },
      ]}
      placeholder="Choose a country"
      value={value}
      onChange={setValue}
    />
  )
}

/** Select with many options demonstrating scrolling. */
export const ManyOptions = {
  render: () => <ManyOptionsExample />,
}

/** Select with search enabled. */
export const Searchable = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <Select
        label="Select a country"
        options={[
          { label: 'United States', value: 'us' },
          { label: 'United Kingdom', value: 'uk' },
          { label: 'Canada', value: 'ca' },
          { label: 'Australia', value: 'au' },
          { label: 'Germany', value: 'de' },
          { label: 'France', value: 'fr' },
          { label: 'Italy', value: 'it' },
          { label: 'Spain', value: 'es' },
          { label: 'Japan', value: 'jp' },
          { label: 'China', value: 'cn' },
          { label: 'India', value: 'in' },
          { label: 'Brazil', value: 'br' },
          { label: 'Mexico', value: 'mx' },
          { label: 'Russia', value: 'ru' },
          { label: 'South Korea', value: 'kr' },
        ]}
        placeholder="Find a country"
        searchable
        value={value}
        onChange={setValue}
      />
    )
  },
}

/** Select with remote search mode and async option loading simulation. */
export const RemoteSearch = {
  render: () => {
    const [value, setValue] = useState('')
    const [query, setQuery] = useState('')
    const [options, setOptions] = useState<SelectOption[]>(remoteCityOptionsSource.slice(0, 8))
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      let cancelled = false
      const normalizedQuery = query.trim().toLowerCase()

      setIsLoading(true)

      const timeoutId = setTimeout(() => {
        if (cancelled) {
          return
        }

        const nextOptions = normalizedQuery
          ? remoteCityOptionsSource
              .filter((option) => option.label.toLowerCase().includes(normalizedQuery))
              .slice(0, 8)
          : remoteCityOptionsSource.slice(0, 8)

        setOptions(nextOptions)
        setIsLoading(false)
      }, 450)

      return () => {
        cancelled = true
        clearTimeout(timeoutId)
      }
    }, [query])

    return (
      <Select
        label="Select a city"
        options={options}
        placeholder="Search cities"
        searchable
        searchMode="remote"
        searchDebounceMs={200}
        filterOptions={false}
        loadingText="Loading cities..."
        noOptionsText="No cities found"
        isLoading={isLoading}
        onSearchChange={setQuery}
        value={value}
        onChange={setValue}
      />
    )
  },
}

/** Select with icons in options. */
export const WithIcons = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <Select
        label="Choose a section"
        options={[
          { icon: <HomeIcon />, label: 'Home', value: 'home' },
          { icon: <PersonIcon />, label: 'Profile', value: 'profile' },
          { icon: <SettingsIcon />, label: 'Settings', value: 'settings' },
          { icon: <SearchIcon />, label: 'Search', value: 'search' },
          { icon: <CheckmarkIcon />, label: 'Tasks', value: 'tasks' },
        ]}
        placeholder="Select a section"
        value={value}
        onChange={setValue}
      />
    )
  },
}

const WithIconsSelectedExample = () => {
  const [value, setValue] = useState('profile')

  return (
    <Select
      label="Choose a section"
      options={[
        { icon: <HomeIcon />, label: 'Home', value: 'home' },
        { icon: <PersonIcon />, label: 'Profile', value: 'profile' },
        { icon: <SettingsIcon />, label: 'Settings', value: 'settings' },
        { icon: <SearchIcon />, label: 'Search', value: 'search' },
        { icon: <CheckmarkIcon />, label: 'Tasks', value: 'tasks' },
      ]}
      value={value}
      onChange={setValue}
    />
  )
}

/** Select with icons and pre-selected value. */
export const WithIconsSelected = {
  render: () => <WithIconsSelectedExample />,
}

const LanguageSelectExample = () => {
  const [value, setValue] = useState('en')

  return (
    <Select
      label="Language"
      options={[
        { icon: <FlagUK />, label: 'English', value: 'en' },
        { icon: <FlagRussia />, label: 'Русский', value: 'ru' },
      ]}
      value={value}
      onChange={setValue}
      placeholder="Select language"
    />
  )
}

/** Language selection with flag icons. */
export const LanguageSelect = {
  render: () => <LanguageSelectExample />,
}
