const orders = [
  {
    id: 1,
    date: 'hier',
  },
  {
    id: 2,
    date: 'today',
  },
];

const find = () => orders;

const findById = (id) => {
  const order = orders.find((order) => order.id === id);
  return order;
};

module.exports = { orders, find, findById };
