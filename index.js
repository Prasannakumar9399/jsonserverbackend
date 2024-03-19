const jsonserver = require('json-server');

const server = jsonserver.create();
const router = jsonserver.router('backend.json');
const middleware = jsonserver.defaults();
const port = process.env.PORT || 3000;
console.log(jsonserver);
server.use(middleware);
server.use(router);
server.listen(port);