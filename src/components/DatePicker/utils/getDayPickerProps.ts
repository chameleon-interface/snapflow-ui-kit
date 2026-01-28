import clsx from 'clsx'
import styles from '../DatePicker.module.css'

export const getDayPickerProps = (isOpen: boolean) => {
  return {
    classNames: {
      root: clsx(styles.calendar, isOpen && styles.open),
      nav: styles.nav,
      button_previous: styles.navButtonPrevious,
      button_next: styles.navButtonNext,
      chevron: styles.navIcon,
      caption_label: styles.captionLabel,
      month_grid: styles.monthGrid,
      weekday: styles.weekday,
      day_button: styles.dayButton,
      day: styles.day,
      outside: styles.dayOutside,
      selected: styles.daySelected,
      range_start: styles.dayRangeStart,
      range_middle: styles.dayRangeMiddle,
      range_end: styles.dayRangeEnd,
      today: styles.dayToday,
    },
    weekStartsOn: 1 as const,
    showOutsideDays: true,
  }
}
