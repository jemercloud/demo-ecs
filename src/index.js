const express = require('express');
const logger = require('./utils/Logger');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  logger.info(`${req.method} ${req.path}`);
  res.send('<h1>Hola desde un contenedor en ECS!</h1>');
});

app.get('*', (req, res) => {
  logger.error(`${req.method} ${req.path} - 404 Not Found`);
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(port, () => {
  logger.info(`process id: ${process.pid}`);
  logger.info(`server listening on port ${port}`);
});
