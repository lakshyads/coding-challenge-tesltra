const transformController = require('../../controllers/transform.controller');

describe('Test the transform controller', () => {
  // load test data
  const payload = require('../mocks/testPayload.json');
  const expectedResponse = require('../mocks/expectedResponse.json');

  test('It should return transformed payload', async () => {
    const actual = transformController(payload.payload, payload.referenceData);

    expect(actual).toEqual(expectedResponse);
  });
});
