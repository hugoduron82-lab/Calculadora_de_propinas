import React from 'react';

interface ResultDisplayProps {
  propina: number;
  total: number;
  porcentaje: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ propina, total, porcentaje }) => {
  return (
    <div className="border-t-2 border-gray-100 pt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        📊 Resultados
      </h2>
      
      <div className="bg-blue-50 rounded-xl p-4 mb-3">
        <p className="text-gray-600">Propina ({porcentaje}%):</p>
        <p className="text-3xl font-bold text-blue-600">
          ${propina.toFixed(2)}
        </p>
      </div>
      
      <div className="bg-green-50 rounded-xl p-4">
        <p className="text-gray-600">Total a pagar:</p>
        <p className="text-3xl font-bold text-green-600">
          ${total.toFixed(2)}
        </p>
      </div>

      <div className="mt-4 bg-yellow-50 rounded-xl p-4">
        <p className="text-sm text-yellow-800">
          💬 "Con el {porcentaje}% de propina, serían ${total.toFixed(2)} en total"
        </p>
      </div>
    </div>
  );
};

export default ResultDisplay;