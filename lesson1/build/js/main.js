"use strict";
const { log } = console;
let Tm = {
    name: 'Timaya',
    active: true,
    albums: ['trueStory', '1954']
};
const artist = (singer) => {
    if (singer.name) {
        return `Hi ${singer.name.toString()}`;
    }
    return `Hi`;
};
log(artist(Tm));
var nameEnum;
(function (nameEnum) {
    nameEnum[nameEnum["name"] = 0] = "name";
    nameEnum[nameEnum["age"] = 1] = "age";
    nameEnum[nameEnum["level"] = 2] = "level";
})(nameEnum || (nameEnum = {}));
