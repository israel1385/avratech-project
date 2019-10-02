const request = require('supertest');
const app = require('../app')

describe('Test the tasksRouter root path', () => {
    test('It should response the GET method', () => {
       return request(app).get('/tasks').then((response) => {
            // console.log(response);
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe('birds home page');

        })
    });
})