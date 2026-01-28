export type PaginationComponentsProps = {
  page: number
  totalPages: number
  siblings?: number
  onPageChange: (page: number) => void
}
