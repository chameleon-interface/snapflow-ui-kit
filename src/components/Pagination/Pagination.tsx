import { useMemo } from 'react'

import { Select } from '../Select'
import s from './Pagination.module.css'
import { PaginationComponents } from './PaginationComponents/PaginationComponents'
import { PaginationProps } from './Pagination.type'

export const Pagination = ({
  totalItems,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
  siblings = 1,
  showPageSizeSelect = true,
  pageSizeOptions = [10, 20, 30, 50, 100],
}: PaginationProps) => {
  // ✅ Protect against pageSize = 0
  const safePageSize = pageSize > 0 ? pageSize : 1
  const totalPages = Math.ceil(totalItems / safePageSize)

  // ✅ Validate and sanitize pageSizeOptions
  const sanitizedPageSizeOptions = Array.from(
    new Set(pageSizeOptions.length ? pageSizeOptions : [10]),
  )
  if (!sanitizedPageSizeOptions.includes(safePageSize)) {
    sanitizedPageSizeOptions.push(safePageSize)
  }

  // ✅ Compute Select options with useMemo BEFORE any early return
  const pageSizeSelectOptions = useMemo(
    () =>
      sanitizedPageSizeOptions.map((size) => ({
        label: String(size),
        value: String(size), // string for Select
      })),
    [sanitizedPageSizeOptions],
  )

  // ❗ Nothing to render
  if (totalPages <= 0) return null

  const handlePageSizeChange = (value: string) => {
    const newSize = Number(value) > 0 ? Number(value) : 1
    onPageSizeChange(newSize)

    // Adjust current page if it exceeds the maximum page
    const maxPage = Math.ceil(totalItems / newSize)
    if (page > maxPage) {
      onPageChange(maxPage)
    }
  }

  return (
    <div className={s.wrapper}>
      <PaginationComponents
        page={page}
        totalPages={totalPages}
        siblings={siblings}
        onPageChange={onPageChange}
      />

      {showPageSizeSelect && (
        <div className={s.pageSizeWrapper}>
          <span className={s.label}>Show</span>

          <div className={s.pageSizeControl}>
            <Select
              className={s.pageSizeSelect}
              options={pageSizeSelectOptions}
              value={String(safePageSize)}
              onChange={handlePageSizeChange}
            />
          </div>

          <span className={s.label}>per page</span>
        </div>
      )}
    </div>
  )
}
