const server = require('./server');
const PORT = process.env.SERVER_PORT || 3333;

server.listen(PORT, error => {
  if(error){
    console.log('Problems with server');
  } else {
    console.log('Server is running!')
  }
})