export const classes = (...args) => {
    return args.reduce((_classes, _class) => {
        
        if(_class) {
            _classes += `${_class} `;
        }

        return _classes;
        
    }, '').slice(0, -1);
};