// const sum = require("./sum");

//tobe matcher is used for primitive values
// test('adds two numbers',()=>{
//     expect(sum(2,3)).toBe(5);
// });

// test('two added to four',()=>{
//     expect(2+4).toBe(6)
// })

//toEqual is used when comparing values of objects or  arrays
test('object assignment first', () => {
    const data ={'one':1};
    data['two'] = 2;
    expect(data).toEqual({'one':1, 'two':2});
 })

 test('should be falsy', () => { 
    const n = undefined;
    expect(n).toBeFalsy()
  })
 test('should be truthy', () => { 
    const n = 1;
    expect(n).toBeTruthy()
  })
