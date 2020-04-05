const codeToTest = require('./fixtures');

describe('Test Block', function () {
  describe('Test Sub-block', function () {
    it('test case 1', function () {
      const result = codeToTest.add(1, 1);
      expect(result).toBe(2);
    });
  });
});
