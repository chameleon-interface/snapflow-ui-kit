export type PaginationProps = {
  /** Total number of pages */
  totalPages: number

  /** Current page (controlled) */
  page: number

  /** Callback for page change */
  onPageChange: (page: number) => void

  /** Number of items per page (controlled) */
  pageSize?: number

  /** Callback for pageSize change */
  onPageSizeChange?: (size: number) => void

  /** Number of pages to show on each side of the current page */
  siblings?: number

  /** Whether to show the pageSize selector */
  showPageSizeSelect?: boolean

  /** Available pageSize options */
  pageSizeOptions?: number[]
}
