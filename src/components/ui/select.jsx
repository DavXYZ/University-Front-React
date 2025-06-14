

export const Select = ({ children }) => {
  return (
    <div >
      {children}
    </div>
  );
};

export const SelectTrigger = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};

export const SelectValue = ({ placeholder }) => {
  return (
    <span>{placeholder}</span>
  );
};

export const SelectContent = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export const SelectItem = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};
