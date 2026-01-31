import s from './Pagination.module.css'
import { PaginationProps } from './Pagination.type'
import { Pager } from './Pager'
import { PageSizeSelect } from './PageSizeSelect'

const Pagination = ({
  page,
  pageSize = 10,
  totalPages,
  onPageChange,
  onPageSizeChange,
  siblings = 1,
  showPageSizeSelect = true,
  pageSizeOptions = [10, 20, 30, 50, 100],
}: PaginationProps) => {
  // Nothing to render
  if (totalPages <= 0) return null

  return (
    <div className={s.wrapper}>
      <Pager page={page} totalPages={totalPages} siblings={siblings} onPageChange={onPageChange} />

      {showPageSizeSelect && (
        <PageSizeSelect
          options={pageSizeOptions}
          pageSize={pageSize}
          onPageSizeChange={onPageSizeChange}
        />
      )}
    </div>
  )
}
export default Pagination
