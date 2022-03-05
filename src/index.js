const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { orderAPI } = require('./components/order');
const { userAPI } = require('./components/user');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello, world');
});

app.use(orderAPI(app));
app.use(userAPI(app));

app.listen(3000, () => {
  console.log('listening on port 3000');
});
