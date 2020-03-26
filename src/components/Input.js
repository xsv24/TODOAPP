import React from 'react';

const Input = ({ 
    type = 'text',
    onChange,
    ...props
}) => (
    <input
      type={type}
      onChange={e => onChange(e.target.value)}
      {...props}
    />
);

export default Input;