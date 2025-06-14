import React from 'react';

export const Progress = ({ value, max = 100 }) => {
  return (
    <div className="w-full bg-gray-200 rounded h-4 overflow-hidden">
      <div
        className="bg-blue-600 h-full transition-all"
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  );
};
