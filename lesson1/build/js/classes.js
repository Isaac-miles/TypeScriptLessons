"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.getage = () => {
            return this.age;
        };
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
const Isaac = new Coder('Dave', 'Pop', 28, 'Typescript');
console.log(Isaac.getage());
// console.log(Isaac.lang)
class FrontEnd extends Coder {
    constructor(computer, name, age, music) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I am a ${this.lang} dev`;
    }
}
const Sera = new FrontEnd('Macbook Pro', 'Junior', 27, 'pop');
console.log(Sera.getLang());
class Drummer {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Shally = new Drummer('Shallipopi', 'drum');
console.log(Shally.play('drums'));
/* ---------------------------------------------------------- */
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const durelo = new Peeps('durelo');
const jack = new Peeps('jack');
const mic = new Peeps('mic');
console.log(Peeps.count);
console.log(jack.id);
console.log(mic.id);
console.log(durelo.id);
/* ---------------------------------------------------------- */
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const myBands = new Bands();
myBands.data = ['Nel', 'Psquare'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'Tuface'];
console.log(myBands.data);
