import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import Pagination from './Pagination'
import { PaginationProps } from './Pagination.type'

type Story = StoryObj<typeof meta>

const ControlledPagination = (args: PaginationProps) => {
  const [page, setPage] = useState(args.page)
  const [pageSize, setPageSize] = useState(args.pageSize ?? 10)

  const handlePageChange = (value: number) => {
    setPage(value)
    args.onPageChange?.(value)
  }

  const handlePageSizeChange = (value: number) => {
    setPageSize(value)
    args.onPageSizeChange?.(value)
  }

  return (
    <Pagination
      {...args}
      page={page}
      pageSize={pageSize}
      onPageChange={handlePageChange}
      onPageSizeChange={handlePageSizeChange}
    />
  )
}

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Pagination component for navigating through paged data.
Supports controlled \`page\` and \`pageSize\`, customizable pageSize selector,
and adjustable number of sibling pages. Renders navigation buttons
and optional page size selector. Expects a precomputed \`totalPages\` value.
        `,
      },
    },
  },
  argTypes: {
    totalPages: { control: { type: 'number' }, description: 'Total number of pages' },
    page: { control: { type: 'number' }, description: 'Current page (controlled)' },
    pageSize: { control: { type: 'number' }, description: 'Number of items per page (controlled)' },
    siblings: {
      control: { type: 'number' },
      description: 'Number of pages to show around the current page',
    },
    showPageSizeSelect: {
      control: { type: 'boolean' },
      description: 'Whether to show the pageSize selector',
    },
    pageSizeOptions: { control: { type: 'object' }, description: 'Available pageSize options' },
    onPageChange: { action: 'page changed' },
    onPageSizeChange: { action: 'pageSize changed' },
  },
  args: {
    onPageChange: () => {},
    onPageSizeChange: () => {},
  },
  render: (args) => <ControlledPagination {...args} />,
} satisfies Meta<typeof Pagination>

export default meta

/** Default pagination with pageSize selector visible */
export const Default: Story = {
  args: {
    totalPages: 13,
    page: 1,
    pageSize: 10,
    siblings: 1,
    showPageSizeSelect: true,
    pageSizeOptions: [10, 20, 30, 50, 100],
  },
}

/** Pagination without pageSize selector */
export const WithoutPageSizeSelect: Story = {
  args: {
    totalPages: 13,
    page: 1,
    pageSize: 10,
    siblings: 1,
    showPageSizeSelect: false,
    pageSizeOptions: [10, 20, 30, 50, 100],
  },
  name: 'Without PageSize Selector',
}

/** Pagination with custom pageSize options */
export const CustomPageSizeOptions: Story = {
  args: {
    totalPages: 26,
    page: 1,
    pageSize: 5,
    siblings: 1,
    showPageSizeSelect: true,
    pageSizeOptions: [5, 10, 20, 50],
  },
  name: 'Custom PageSize Options',
}

/** Wide sibling window for large lists */
export const WiderSiblings: Story = {
  args: {
    totalPages: 40,
    page: 20,
    pageSize: 20,
    siblings: 3,
    showPageSizeSelect: true,
    pageSizeOptions: [10, 20, 50],
  },
}

/** Small dataset with few pages */
export const FewPages: Story = {
  args: {
    totalPages: 4,
    page: 2,
    pageSize: 5,
    siblings: 1,
    showPageSizeSelect: true,
    pageSizeOptions: [5, 10],
  },
}
