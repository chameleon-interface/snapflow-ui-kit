import { toast } from 'react-hot-toast'
import { Alert } from './Alert'
import s from './Alert.module.css'

/**
 * Show a success toast rendered with the shared `Alert` component.
 * @param message - Text to display in the toast body.
 */
export const toastSuccess = (message: string) => {
  toast.custom((t) => (
    <Alert
      variant="success"
      message={message}
      className={t.visible ? s.toastEnter : s.toastExit}
      onClose={() => toast.dismiss(t.id)}
    />
  ))
}

/**
 * Show an error toast rendered with the shared `Alert` component.
 * @param message - Text to display in the toast body.
 * @param title - Optional heading shown above the message. Defaults to `"Error!"`.
 */
export const toastError = (message: string, title = 'Error!') => {
  toast.custom((t) => (
    <Alert
      variant="error"
      title={title}
      message={message}
      className={t.visible ? s.toastEnter : s.toastExit}
      onClose={() => toast.dismiss(t.id)}
    />
  ))
}
