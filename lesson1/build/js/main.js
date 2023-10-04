"use strict";
const { log } = console;
let Tm = {
    name: 'Timaya',
    active: true,
    albums: ['trueStory', '1954']
};
const artist = (singer) => {
    return `Hi ${singer.name}`;
};
log(artist(Tm));
