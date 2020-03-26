import React from 'react';
import { classes } from '../../utils';

import styles from './button.scss';

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
        styles['btn'],
        className, 
        color && styles[color],
        inactive && styles['inactive'],
        circ && styles['circ'],
        rounded && styles['rounded']
    )} {...props}>
        {children}
    </button>
);

export default Button;