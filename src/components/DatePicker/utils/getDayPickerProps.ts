import clsx from 'clsx'
import styles from '../DatePicker.module.css'

export const getDayPickerProps = (isOpen: boolean) => {
  return {
    classNames: {
      root: clsx(styles.calendar, isOpen && styles.open),
      month_caption: styles.monthsCaption,
      button_previous: styles.navButtonPrevious,
      button_next: styles.navButtonNext,
      chevron: styles.navIcon,
      caption_label: styles.captionLabel,

      dropdowns: styles.dropdowns,
      dropdown_root: styles.dropdown_root,
      dropdown: styles.dropdown,
      dropdown_select_option: styles.option,

      months_dropdown: styles.monthsDropdown,
      years_dropdown: styles.yearsDropdown,

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
    weekStartsOn: 1 as 0 | 1 | 2 | 3 | 4 | 5 | 6,
    showOutsideDays: true,
  }
}
