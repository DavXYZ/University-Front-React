import React from 'react';

export const Card = ({ children, ...props }) => {
  return (
    <div {...props} >
      {children}
    </div>
  );
};

export const CardContent = ({ children, ...props }) => {
  return (
    <div {...props} className="mt-2">
      {children}
    </div>
  );
};
