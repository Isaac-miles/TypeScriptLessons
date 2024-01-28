const {fetchData }= require('./asyncTesting')
const {fetchPromise }= require('./asyncTesting')

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
    return expect(fetchPromise()).rejects.toThrow("error");
 })

 //asynchronous
 test("the data is user data", async()=>{
    const data = await fetchPromise();
    
 })