const service = require('./user.service');

test('okok', () => {
  expect(service.find()).toBe(service.users);
});

test('okok 2', () => {
  expect(service.findById(1)).toBe(service.users[0]);
});