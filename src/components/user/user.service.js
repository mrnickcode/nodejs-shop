const users = [
  {
    id: 1,
    name: 'nic',
  },
  {
    id: 2,
    name: 'las',
  },
];

const find = () => users;

const findById = (id) => {
  const user = users.find((user) => user.id === id);
  return user;
};

module.exports = { find, findById };
