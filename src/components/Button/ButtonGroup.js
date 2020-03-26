import React from 'react';

import { classes } from '../../utils';
import styles from './button.scss';

export const ButtonGroup = ({
    className,
    children,
    ...props
}) => (
    <div className={classes(styles['btn-group'], className)} {...props}>
        {children}
    </div>
);

export default ButtonGroup;