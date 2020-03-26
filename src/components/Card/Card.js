import React from 'react';
import { classes } from '../../utils';

import './card.scss';

export const Card = ({
    className,
    children,
    ...props
}) => (
    <div className={classes('card', className)} {...props}>
        {children}
    </div>
);

export default Card;