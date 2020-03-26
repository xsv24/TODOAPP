import React from 'react';
import { classes } from '../../utils';

import styles from './card.scss';

export const Card = ({
    className,
    children,
    ...props
}) => (
    <div className={classes(styles.card, className)} {...props}>
        {children}
    </div>
);

export default Card;