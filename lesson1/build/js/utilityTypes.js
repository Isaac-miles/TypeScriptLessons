"use strict";
//utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'csc15',
    title: 'Final year project',
    grade: 1
};
console.log(updateAssignment(assign1, { grade: 99 }));
const assignGraded = updateAssignment(assign1, { grade: 99 });
//Required and Readonly
const recordAssignment = (assign) => {
    //write your logic
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 2 throws an error because you cant change a readonly property
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: false }));
//Record
const hexColorMap = {
    red: 'ff0000',
    green: '00ff00',
    blue: '0000ff'
};
console.log(hexColorMap);
const hexVal = {
    blue: '',
    red: '',
    green: ''
};
const cscStudent = {
    'Joy': 'A',
    'Press': 'B'
};
const physicsStudent1 = {
    Joy: { phy101: 92, phy404: 80 },
    Press: { phy404: 75, phy101: 89 }
};
const score = {
    studentId: 'csc026',
    grade: 97
};
const preview = {
    studentId: 'csc026',
    title: 'final year project',
};
//ReturnType
// type newAssign = {title:string, points:number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign('utilityTypes', 100);
console.log(tsAssign);
const assignArgs = ["Genre", 70];
const tsAssign2 = createNewAssign(...assignArgs);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
