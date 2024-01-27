const fetchData = require('./asyncTesting')

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