export type PaginationProps = {
  totalItems: number
  initialPage?: number
  initialPageSize?: number
  onPageChange?: (page: number) => void
  onPageSizeChange?: (size: number) => void
}
