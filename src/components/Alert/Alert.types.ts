export type AlertVariant = 'error' | 'success'

export type AlertProps = {
  variant?: AlertVariant
  title?: string
  message: string
  className?: string
  onClose?: () => void
}
