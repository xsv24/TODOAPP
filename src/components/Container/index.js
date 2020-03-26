import React from 'react';
import { classes } from '../../utils';

import './container.global.scss';

export const Container = ({ 
    className,
    children,
    ...props
}) => (
    <div className={classes('container', className)} {...props}>
        {children}
    </div>
);

export default Container;