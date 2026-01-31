import { useMemo } from 'react'
import { Select } from '@/components'
import s from './PageSizeSelect.module.css'
import { PageSizeSelectProps } from './PageSizeSelect.types'

export const PageSizeSelect = ({ options, pageSize, onPageSizeChange }: PageSizeSelectProps) => {
  const pageSizeSelectOptions = useMemo(
    () =>
      options.map((size) => ({
        label: String(size),
        value: String(size), // string for Select
      })),
    [options],
  )

  return (
    <div className={s.pageSizeWrapper}>
      <span className={s.label}>Show</span>

      <Select
        className={s.pageSizeSelect}
        options={pageSizeSelectOptions}
        value={String(pageSize)}
        onChange={(v) => onPageSizeChange?.(Number(v))}
      />

      <span className={s.label}>per page</span>
    </div>
  )
}
