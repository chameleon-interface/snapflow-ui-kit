import { FC } from 'react'
import { toast, Toast as HotToast } from 'react-hot-toast'
import { Alert } from '../Alert'

type ToastAlertProps = {
  t: HotToast
}

export const ToastAlert: FC<ToastAlertProps> = ({ t }) => {
  const variant = t.type === 'success' ? 'success' : 'error'
  const title = t.type === 'success' ? '' : 'Error!'

  return (
    <Alert
      variant={variant}
      title={title}
      message={String(t.message)}
      onClose={() => toast.dismiss(t.id)}
    />
  )
}
