const getRandomNumber = require('../src/index.js');

describe('getRandomNumber', () => {
  test('returns a random number between 0 and 100', () => {
    const randomNumber = getRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(100);
  });
});
