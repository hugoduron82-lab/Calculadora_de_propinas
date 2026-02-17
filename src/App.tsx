import React, { useState } from 'react';
import Alert from './components/Alert';
import TipButton from './components/TipButton';
import ResultDisplay from './components/ResultDisplay';  // ← Importamos ResultDisplay

function App() {
  const [monto, setMonto] = useState('');
  const [propina, setPropina] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [porcentaje, setPorcentaje] = useState<number | null>(null);
  const [mensaje, setMensaje] = useState('');

  const opciones = [10, 15, 20];

  const handleMontoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    if (valor === '' || /^\d*\.?\d*$/.test(valor)) {
      setMonto(valor);
      setPropina(null);
      setTotal(null);
      setPorcentaje(null);
      setMensaje('');
    }
  };

  const validarMonto = (): boolean => {
    if (!monto.trim()) {
      setMensaje('❌ Por favor ingresa un monto');
      return false;
    }
    
    const num = parseFloat(monto);
    if (isNaN(num)) {
      setMensaje('❌ Ingresa un número válido');
      return false;
    }
    
    if (num <= 0) {
      setMensaje('❌ El monto debe ser mayor a 0');
      return false;
    }
    
    return true;
  };

  const calcularPropina = (porcentajeSeleccionado: number) => {
    if (!validarMonto()) return;

    const montoNum = parseFloat(monto);
    const propinaCalculada = (montoNum * porcentajeSeleccionado) / 100;
    const totalCalculado = montoNum + propinaCalculada;

    setPropina(propinaCalculada);
    setTotal(totalCalculado);
    setPorcentaje(porcentajeSeleccionado);
    setMensaje(`✅ Propina del ${porcentajeSeleccionado}% calculada`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🧮 Calculadora de Propinas
          </h1>
          <p className="text-gray-600">
            Para Sofía la mesera 👩‍🍳
          </p>
        </div>

        {mensaje && (
          <Alert 
            message={mensaje} 
            type={mensaje.includes('✅') ? 'success' : 'error'} 
          />
        )}

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            💵 Total de la cuenta
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-500">$</span>
            <input
              type="text"
              value={monto}
              onChange={handleMontoChange}
              placeholder="0.00"
              className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none text-lg"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-3">
            🎯 Selecciona el porcentaje
          </label>
          <div className="flex gap-3">
            {opciones.map(op => (
              <TipButton
                key={op}
                percentage={op}
                isSelected={porcentaje === op}
                onClick={calcularPropina}
              />
            ))}
          </div>
        </div>

        {propina !== null && total !== null && porcentaje !== null && (
          <ResultDisplay
            propina={propina}
            total={total}
            porcentaje={porcentaje}
          />
        )}
      </div>
    </div>
  );
}

export default App;