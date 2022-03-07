const service = require('./order.service');

test('okok', () => {
  expect(service.find()).toBe(service.orders);
});

test('okok 2', () => {
  expect(service.findById(1)).toBe(service.orders[0]);
});