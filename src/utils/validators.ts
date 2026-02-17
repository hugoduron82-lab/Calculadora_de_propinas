export const validateAmount = (amount: string): { isValid: boolean; message: string } => {
  if (!amount.trim()) {
    return { isValid: false, message: '❌ Por favor ingresa un monto' };
  }
  
  const num = parseFloat(amount);
  if (isNaN(num)) {
    return { isValid: false, message: '❌ Ingresa un número válido' };
  }
  
  if (num <= 0) {
    return { isValid: false, message: '❌ El monto debe ser mayor a 0' };
  }
  
  return { isValid: true, message: '' };
};

export const formatCurrency = (amount: number): string => {
  return amount.toFixed(2);
};