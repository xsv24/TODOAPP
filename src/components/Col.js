import React from 'react';

export const Col = ({
    style,
    justify,
    align,
    children,
    ...props
}) => (
    <div style={{ 
        ...style,
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: justify || 'space-between', 
        alignContent: align || 'center'
    }} {...props}>

        {children}
    </div>
);

export default Col;