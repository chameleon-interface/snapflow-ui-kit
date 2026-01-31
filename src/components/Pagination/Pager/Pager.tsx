import { useCallback, useMemo } from 'react'

import { ArrowLeftIcon, ArrowRightIcon } from '@/icons'
import s from './Pager.module.css'
import { PagerProps } from './Pager.types'

export const Pager = ({ page, totalPages, siblings = 1, onPageChange }: PagerProps) => {
  const isFirstPage = page === 1
  const isLastPage = page === totalPages

  const prevPage = useCallback(() => {
    onPageChange(page - 1)
  }, [page, onPageChange])

  const nextPage = useCallback(() => {
    onPageChange(page + 1)
  }, [page, onPageChange])

  const pages = useMemo(() => {
    const result: (number | 'dots-start' | 'dots-end')[] = []

    const startPage = Math.max(2, page - siblings)
    const endPage = Math.min(totalPages - 1, page + siblings)

    result.push(1)

    if (startPage > 2) {
      result.push('dots-start')
    }

    for (let i = startPage; i <= endPage; i++) {
      result.push(i)
    }

    if (endPage < totalPages - 1) {
      result.push('dots-end')
    }

    if (totalPages > 1) {
      result.push(totalPages)
    }

    return result
  }, [page, totalPages, siblings])

  return (
    <nav className={s.pagination} aria-label="Pagination">
      <button
        className={s.arrow}
        onClick={prevPage}
        disabled={isFirstPage}
        aria-label="Previous page"
      >
        <ArrowLeftIcon width={16} height={16} />
      </button>

      {pages.map((item) =>
        typeof item === 'number' ? (
          <button
            key={item}
            className={`${s.page} ${item === page ? s.active : ''}`}
            onClick={() => onPageChange(item)}
            aria-current={item === page ? 'page' : undefined}
          >
            {item}
          </button>
        ) : (
          <span key={item} className={s.dots}>
            ...
          </span>
        ),
      )}

      <button className={s.arrow} onClick={nextPage} disabled={isLastPage} aria-label="Next page">
        <ArrowRightIcon width={16} height={16} />
      </button>
    </nav>
  )
}
