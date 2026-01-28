import { ArrowLeftIcon, ArrowRightIcon } from '../../../icons'
import s from './PaginationComponents.module.css'
import { PaginationComponentsProps } from './PaginationComponents.types'

export const PaginationComponents = ({
  page,
  totalPages,
  siblings = 1,
  onPageChange,
}: PaginationComponentsProps) => {
  const isFirstPage = page === 1
  const isLastPage = page === totalPages

  const prevPage = () => {
    if (!isFirstPage) {
      onPageChange(page - 1)
    }
  }

  const nextPage = () => {
    if (!isLastPage) {
      onPageChange(page + 1)
    }
  }

  const createPages = () => {
    const pages: (number | string)[] = []

    const startPage = Math.max(2, page - siblings)
    const endPage = Math.min(totalPages - 1, page + siblings)

    pages.push(1)

    if (startPage > 2) pages.push('...')

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    if (endPage < totalPages - 1) pages.push('...')

    if (totalPages > 1) pages.push(totalPages)

    return pages
  }

  return (
    <nav className={s.pagination}>
      <button className={s.arrow} onClick={prevPage} disabled={isFirstPage}>
        <ArrowLeftIcon width={16} height={16} />
      </button>

      {createPages().map((item, index) =>
        typeof item === 'string' ? (
          <span key={`dots-${index}`} className={s.dots}>
            ...
          </span>
        ) : (
          <button
            key={item}
            className={`${s.page} ${item === page ? s.active : ''}`}
            onClick={() => onPageChange(item)}
          >
            {item}
          </button>
        ),
      )}

      <button className={s.arrow} onClick={nextPage} disabled={isLastPage}>
        <ArrowRightIcon width={16} height={16} />
      </button>
    </nav>
  )
}
