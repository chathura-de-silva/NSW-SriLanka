import { Text } from '@radix-ui/themes'
import { CheckCircledIcon, CrossCircledIcon, ExclamationTriangleIcon, InfoCircledIcon } from '@radix-ui/react-icons'

export type ToastVariant = 'info' | 'success' | 'warning' | 'error'

const TOAST_STYLES: Record<ToastVariant, { container: string; icon: string; text: string }> = {
  success: { container: 'bg-success-subtle', icon: 'text-success', text: 'text-success-strong' },
  info: { container: 'bg-info-subtle', icon: 'text-info', text: 'text-info-strong' },
  warning: { container: 'bg-warning-subtle', icon: 'text-warning', text: 'text-warning-strong' },
  error: { container: 'bg-error-subtle', icon: 'text-error', text: 'text-error-strong' },
}

const TOAST_ICONS = {
  success: CheckCircledIcon,
  info: InfoCircledIcon,
  warning: ExclamationTriangleIcon,
  error: CrossCircledIcon,
}

type Props = {
  text: string
  variant: ToastVariant
  // visible is react-hot-toast's enter/leave flag; the message fades on leave.
  visible: boolean
}

// ToastMessage is the body of every toast, in the app's status colours.
export function ToastMessage({ text, variant, visible }: Props) {
  const styles = TOAST_STYLES[variant]
  const Icon = TOAST_ICONS[variant]
  return (
    <div
      className={`flex max-w-md items-start gap-3 rounded-xl px-4 py-3 shadow-md transition-opacity ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${styles.container}`}
    >
      <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${styles.icon}`} />
      <Text size="2" weight="medium" className={styles.text}>
        {text}
      </Text>
    </div>
  )
}
