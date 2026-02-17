import React from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'error';
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const styles = {
    success: 'bg-green-100 text-green-700 border-green-400',
    error: 'bg-red-100 text-red-700 border-red-400'
  };

  return (
    <div className={`mb-4 p-3 rounded-lg border ${styles[type]}`}>
      {message}
    </div>
  );
};

export default Alert;