import { useState } from 'react'

import s from './Pagination.module.css'
import { PageSizeSelect } from './PageSizeSelect/PageSizeSelect'
import { PaginationComponents } from './PaginationComponents/PaginationComponents'
import { PaginationProps } from './Pagination.type'

export const Pagination = ({
  totalItems,
  initialPage = 1,
  initialPageSize = 100,
  onPageChange,
  onPageSizeChange,
}: PaginationProps) => {
  const [page, setPage] = useState(initialPage)
  const [pageSize, setPageSize] = useState(initialPageSize)

  const totalPages = Math.ceil(totalItems / pageSize)

  const changePage = (newPage: number) => {
    setPage(newPage)
    onPageChange?.(newPage)
  }

  const changePageSize = (size: number) => {
    setPageSize(size)
    setPage(1)
    onPageSizeChange?.(size)
  }

  return (
    <div className={s.wrapper}>
      <PaginationComponents page={page} totalPages={totalPages} onPageChange={changePage} />

      <PageSizeSelect value={pageSize} onChange={changePageSize} />
    </div>
  )
}
