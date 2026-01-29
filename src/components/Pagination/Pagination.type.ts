export type PaginationProps = {
  /** Общее количество элементов (items) */
  totalItems: number

  /** Текущая страница (controlled) */
  page: number

  /** Количество элементов на странице (controlled) */
  pageSize: number

  /** Коллбек смены страницы */
  onPageChange: (page: number) => void

  /** Коллбек смены pageSize */
  onPageSizeChange: (size: number) => void

  /** Сколько страниц показывать слева и справа от текущей */
  siblings?: number

  /** Показывать ли селект pageSize */
  showPageSizeSelect?: boolean

  /** Доступные значения pageSize */
  pageSizeOptions?: number[]
}
