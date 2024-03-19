const jsonserver = require("json-server");

const server = jsonserver.create();
const router = jsonserver.router('backend.json');
const middleware = jsonserver.defaults();
const port = 3000;

server.use(middleware);
server.use(router);
server.listen(port);