import React from 'react';

import { classes } from '../utils';

export const ButtonGroup = ({
    className,
    children,
    ...props
}) => (
    <div className={classes('btn-group', className)} {...props}>
        {children}
    </div>
);

export default ButtonGroup;