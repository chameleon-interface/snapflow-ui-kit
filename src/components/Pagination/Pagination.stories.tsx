import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Pagination } from './Pagination'
import { PaginationProps } from './Pagination.type'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    totalItems: 123,
    siblings: 1,
    showPageSizeSelect: true,
    pageSizeOptions: [10, 20, 30, 50, 100],
  },
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: (args: PaginationProps) => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

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
