import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Pagination } from './Pagination'
import { PaginationProps } from './Pagination.type'

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
and optional page size selector.
        `,
      },
    },
  },
  argTypes: {
    totalItems: { control: { type: 'number' }, description: 'Total number of items' },
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
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

/** Default pagination with pageSize selector visible */
export const Default: Story = {
  args: {
    totalItems: 123,
    page: 1,
    pageSize: 10,
    siblings: 1,
    showPageSizeSelect: true,
    pageSizeOptions: [10, 20, 30, 50, 100],
    // TS не ругается, так как в render мы используем реальные функции
    onPageChange: () => {},
    onPageSizeChange: () => {},
  },
  render: (args: PaginationProps) => {
    const [page, setPage] = useState(args.page)
    const [pageSize, setPageSize] = useState(args.pageSize)

    return (
      <Pagination
        {...args}
        page={page}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    )
  },
}

/** Pagination without pageSize selector */
export const WithoutPageSizeSelect: Story = {
  args: {
    totalItems: 123,
    page: 1,
    pageSize: 10,
    siblings: 1,
    showPageSizeSelect: false,
    pageSizeOptions: [10, 20, 30, 50, 100],
    onPageChange: () => {},
    onPageSizeChange: () => {},
  },
  render: (args: PaginationProps) => {
    const [page, setPage] = useState(args.page)
    const [pageSize, setPageSize] = useState(args.pageSize)

    return (
      <Pagination
        {...args}
        page={page}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    )
  },
  name: 'Without PageSize Selector',
}

/** Pagination with custom pageSize options */
export const CustomPageSizeOptions: Story = {
  args: {
    totalItems: 123,
    page: 1,
    pageSize: 5,
    siblings: 1,
    showPageSizeSelect: true,
    pageSizeOptions: [5, 10, 20, 50],
    onPageChange: () => {},
    onPageSizeChange: () => {},
  },
  render: (args: PaginationProps) => {
    const [page, setPage] = useState(args.page)
    const [pageSize, setPageSize] = useState(args.pageSize)

    return (
      <Pagination
        {...args}
        page={page}
        pageSize={pageSize}
        pageSizeOptions={[5, 10, 20, 50]}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    )
  },
  name: 'Custom PageSize Options',
}
