import React from 'react';
import { classes } from '../../utils';
import './col.global.scss';

export const Col = ({
    style,
    justify,
    align,
    className,
    children,
    ...props
}) => (
    <div className={classes('col', className)} style={{ 
        ...style,
        justifyContent: justify || 'space-between', 
        alignContent: align || 'center'
    }} {...props}>

        {children}
    </div>
);

export default Col;