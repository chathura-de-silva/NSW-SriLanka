import toast from 'react-hot-toast'
import { ToastMessage, type ToastVariant } from './ToastMessage'

const TOAST_DURATION_MS = 3000

// showToast displays a short-lived message. react-hot-toast's built-in types
// only cover success and error, so every variant goes through toast.custom to
// keep the four looking alike.
export function showToast(text: string, variant: ToastVariant = 'success') {
  toast.custom((t) => <ToastMessage text={text} variant={variant} visible={t.visible} />, {
    duration: TOAST_DURATION_MS,
    ariaProps:
      variant === 'error' ? { role: 'alert', 'aria-live': 'assertive' } : { role: 'status', 'aria-live': 'polite' },
  })
}
