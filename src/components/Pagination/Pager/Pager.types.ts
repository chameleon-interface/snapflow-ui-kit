export type PagerProps = {
  page: number
  totalPages: number
  siblings?: number
  onPageChange: (page: number) => void
}
