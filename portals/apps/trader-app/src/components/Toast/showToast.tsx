import toast, { type Renderable } from 'react-hot-toast'
import { CheckCircledIcon, CrossCircledIcon, ExclamationTriangleIcon, InfoCircledIcon } from '@radix-ui/react-icons'

export type ToastVariant = 'info' | 'success' | 'warning' | 'error'

const TOAST_DURATION_MS = 2000

const TOAST_ICONS: Record<ToastVariant, Renderable> = {
  success: <CheckCircledIcon className="w-5 h-5 shrink-0 text-success" />,
  info: <InfoCircledIcon className="w-5 h-5 shrink-0 text-info" />,
  warning: <ExclamationTriangleIcon className="w-5 h-5 shrink-0 text-warning" />,
  error: <CrossCircledIcon className="w-5 h-5 shrink-0 text-error" />,
}

// showToast displays a short-lived message as react-hot-toast's own toast, so
// it gets the library's elevated card and its enter and leave animation. The
// variant only picks the icon and how assertively a screen reader announces it.
export function showToast(text: string, variant: ToastVariant = 'success') {
  toast(text, {
    icon: TOAST_ICONS[variant],
    duration: TOAST_DURATION_MS,
    ariaProps:
      variant === 'error' ? { role: 'alert', 'aria-live': 'assertive' } : { role: 'status', 'aria-live': 'polite' },
  })
}
