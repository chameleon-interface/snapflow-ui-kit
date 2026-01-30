export interface PaginationProps {
  /** Total number of items */
  totalItems: number

  /** Current page (controlled) */
  page: number

  /** Number of items per page (controlled) */
  pageSize: number

  /** Callback for page change */
  onPageChange: (page: number) => void

  /** Callback for pageSize change */
  onPageSizeChange: (size: number) => void

  /** Number of pages to show on each side of the current page */
  siblings?: number

  /** Whether to show the pageSize selector */
  showPageSizeSelect?: boolean

  /** Available pageSize options */
  pageSizeOptions?: number[]
}
