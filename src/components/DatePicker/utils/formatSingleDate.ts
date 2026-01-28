import { formatDate } from './formatDate'

export const formatSingleDate = (date: Date | undefined): string => {
  if (!date) {
    return ''
  }
  return formatDate(date)
}
