const {fetchData }= require('./asyncTesting')
const {fetchPromise,fetchPromise1 }= require('./asyncTesting')

test('user data', (done) => { 
    function callback(data){
        try {
            expect(data).toBe("user data")
            done();
        } catch (error) {
            done(error);
        }
    }
    fetchData(callback);
 })

 test("user data",()=>{
    return expect(fetchPromise()).resolves.toBe("user data");
 })
 test("user data failed",()=>{
    return expect(fetchPromise1()).rejects.toThrow("error");
 })

 //asynchronous
 test("the data is user data", async()=>{
    const data = await fetchPromise();
    expect(data).toBe("user data");
 })
 
 //mocking and spying
 