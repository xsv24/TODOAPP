import React from 'react';

import { classes } from '../../utils';
import './row.global.scss';

export const Row = ({
    style,
    justify,
    align,
    className,
    children,
    ...props
}) => (
    <div className={classes('row', className)} style={{
        justifyContent: justify || 'space-between', 
        alignContent: align || 'center',
        ...style
    }} {...props}>

        {children}
    </div>
);

export default Row;