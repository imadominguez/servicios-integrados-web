import { toast } from 'sonner';

interface Props {
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  message: string;
}

export function showToast({ type, duration, message }: Props) {
  switch (type) {
    case 'success':
      toast.success(message, {
        duration: duration ?? 1000,
      });
      break;
    case 'error':
      toast.error(message, {
        duration: duration ?? 2000,
        closeButton: true,
      });
      break;
    case 'warning':
      toast.warning(message, {
        duration: duration ?? 3000,
        closeButton: true,
      });
      break;
    case 'info':
      toast.info(message, {
        duration: duration ?? 5000,
        closeButton: true,
      });
      break;
    default:
      toast(message, {
        duration: duration ?? 1000,
      });
      break;
  }
}
