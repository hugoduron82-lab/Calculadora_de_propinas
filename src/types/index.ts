export type AlertType = 'success' | 'error';

export interface AlertProps {
  message: string;
  type: AlertType;
}