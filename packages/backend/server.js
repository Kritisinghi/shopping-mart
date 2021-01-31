require('dotenv').config();

const express = require('express');
const connectDb = require('./config/db');
const routes = require('./src/routes');
const cors = require('cors');
connectDb();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
