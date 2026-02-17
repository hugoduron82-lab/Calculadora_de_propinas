import React from 'react';

interface TipButtonProps {
  percentage: number;
  isSelected: boolean;
  onClick: (percentage: number) => void;
}

const TipButton: React.FC<TipButtonProps> = ({ percentage, isSelected, onClick }) => {
  return (
    <button
      onClick={() => onClick(percentage)}
      className={`flex-1 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
        isSelected
          ? 'bg-blue-600 text-white shadow-lg'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {percentage}%
    </button>
  );
};

export default TipButton;