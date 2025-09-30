import React, { useEffect } from 'react';
import { Notification } from '../index.d';

type ToastProps = Notification & {
  onDismiss: () => void
};

const icons: Record<Notification['type'], string> = {
  success: '✅',
  danger: '⚠️',
  warning: '⚠️',
  info: 'ℹ️',
  out: '',
};

const Toast = ({ message, type, onDismiss }: ToastProps) => {
  useEffect(() => {
    if (type === 'out') {
      return undefined;
    }

    const timeout = window.setTimeout(onDismiss, 2600);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [onDismiss, type]);

  return (
    <div
      className={`toast toast--${type}`}
      role="status"
      aria-live="polite"
    >
      {icons[type] ? (
        <span aria-hidden="true" className="toast__icon" role="presentation">{icons[type]}</span>
      ) : null}
      <p className="toast__message">{message}</p>
      <button type="button" className="toast__close" onClick={onDismiss} aria-label="Cerrar notificación">
        ×
      </button>
    </div>
  );
};

export default Toast;

