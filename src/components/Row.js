import React from 'react';

export const Row = ({
    style,
    justify,
    align,
    children,
    ...props
}) => (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: justify || 'space-between', 
        alignContent: align || 'center',
        ...style
    }} {...props}>

        {children}
    </div>
);

export default Row;