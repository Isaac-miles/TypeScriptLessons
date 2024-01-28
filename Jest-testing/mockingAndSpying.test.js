
// const mockCallback = jest.fn(x => 4 + x); jest fn is a way to create a mock function

test("mocking a basic function",()=>{
    const mock = jest.fn(x=>5 + x);
    expect(mock(5)).toBe(10);
    expect(mock).toHaveBeenCalledWith(5);
})