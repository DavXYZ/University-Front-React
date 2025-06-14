import React, { createContext, useContext, useState } from 'react';

// Create context to manage selected value
const RadioGroupContext = createContext();

export const RadioGroup = ({ children, value, onChange, ...props }) => {
  return (
    <RadioGroupContext.Provider value={{ value, onChange }}>
      <div {...props} className="flex flex-col gap-2">
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

export const RadioGroupItem = ({ value: itemValue, label, ...props }) => {
  const context = useContext(RadioGroupContext);

  if (!context) {
    throw new Error('RadioGroupItem must be used within a RadioGroup');
  }

  const isSelected = context.value === itemValue;

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        value={itemValue}
        checked={isSelected}
        onChange={() => context.onChange(itemValue)}
        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        {...props}
      />
      {label}
    </label>
  );
};
