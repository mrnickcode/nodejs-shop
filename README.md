# INSTALL
Must have Docker and docker-compose on your machine.

# ENDPOINTS
Shop at => http://localhost:3000
Server at => http://localhost:4000
pgadmin at => http://localhost:5050

# DATABASE

users
  id
  email

inventory
  product_id
  quantity

orders
  order_id
  user_id
  status
  date

order_items
  item_id
  order_id
  product_id
  quantity

products
  product_id
  label
  image
  price
