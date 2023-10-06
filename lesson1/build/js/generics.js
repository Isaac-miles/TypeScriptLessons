"use strict";
let logs = console.log;
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
// logs(isObj(true))
// logs(isObj('jon'))
// logs(isObj([1,2,3]))
// logs(isObj({name:'jon'}))
// logs(isObj(null))
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length)
        return { arg, is: false };
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
logs(isTrue(false));
logs(isTrue(0));
logs(isTrue(true));
logs(isTrue(1));
logs(isTrue('dave'));
logs(isTrue(''));
logs(isTrue(null));
logs(isTrue(undefined));
logs(isTrue({}));
logs(isTrue({ name: 'Dave' }));
logs(isTrue([]));
logs(isTrue([1, 2, 3]));
logs(isTrue(NaN));
logs(isTrue(-0));
