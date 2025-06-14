import React from 'react';

export const Badge = ({ children, ...props }) => {
  return (
    <span {...props} className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
      {children}
    </span>
  );
};
