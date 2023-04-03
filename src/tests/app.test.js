const request = require('supertest');
const app = require('../../src/app');

describe('Test the transform path', () => {
  // load test data
  const payload = require('./mocks/testPayload.json');
  const expectedResponse = require('./mocks/expectedResponse.json');

  test('It should return transformed payload', async () => {
    const response = await request(app).post('/transform').send(payload);

    expect(response.body).toEqual(expectedResponse);
    expect(response.statusCode).toBe(200);
  });

  test('It should return error', async () => {
    const response = await request(app).post('/transform').send({});

    expect(response.text).toEqual('Something went wrong');
    expect(response.statusCode).toBe(500);
  });
});
