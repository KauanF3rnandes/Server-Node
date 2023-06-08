const server = require("./server");

const port = 6060;

server.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});

module.exports = server;
