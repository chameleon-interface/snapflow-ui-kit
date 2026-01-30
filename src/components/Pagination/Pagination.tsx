import { FC } from 'react'

import { Select } from '../Select'
import s from './Pagination.module.css'
import { PaginationComponents } from './PaginationComponents/PaginationComponents'
import { PaginationProps } from './Pagination.type'

export const Pagination: FC<PaginationProps> = ({
  totalItems,

  page,
  pageSize,
  onPageChange,
  onPageSizeChange,

  siblings = 1,
  showPageSizeSelect = true,
  pageSizeOptions = [10, 20, 30, 50, 100],
}) => {
  const totalPages = Math.ceil(totalItems / pageSize)

  // ❗ граничный случай — нечего рендерить
  if (totalPages <= 0) {
    return null
  }

  const handlePageSizeChange = (size: number) => {
    onPageSizeChange(size)

    // если текущая страница выходит за пределы — корректируем
    const maxPage = Math.ceil(totalItems / size)
    if (page > maxPage) {
      onPageChange(maxPage)
    }
  }

  const pageSizeSelectOptions = pageSizeOptions.map((size) => ({
    label: String(size),
    value: String(size),
  }))

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
              value={String(pageSize)}
              onChange={(value) => handlePageSizeChange(Number(value))}
            />
          </div>

          <span className={s.label}>on page</span>
        </div>
      )}
    </div>
  )
}
