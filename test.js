const frisby = require('frisby');


describe('API test', () => {
    test('Make request',() => {
      return frisby.get('https://www.google.com/')
      .expect('status', 200) 
	});
    });    
