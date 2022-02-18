const request = require('supertest');
const app = require('../../src/app.js');

//testing post activity
describe('POST /activity', () =>{
    it ('response whith 200 ', done =>{
        const data={
            name:"caminar",
            difficulty:"2",
            duration:'45',
            season:"Winter",
            countryId:["ARG"]
        }
        request(app)
        .post('/activity')
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type','application/json; charset=utf-8')
        .expect(200)
        .end( err => {
            if (err) return done(err);
            done();
        })
    })
    
  });