import React from 'react';
import { classes } from '../utils';

export const Button = ({ 
    color,
    circ,
    rounded,
    className,
    children,
    inactive,
    ...props
}) => (
    <button className={classes(
        'btn',
        className, 
        color,
        inactive && 'inactive',
        circ && 'circ',
        rounded && 'rounded'
    )} {...props}>
        {children}
    </button>
);

export default Button;