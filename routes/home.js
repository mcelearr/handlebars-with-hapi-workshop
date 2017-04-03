const path = require('path');

const handler = (request, reply) => {
  let data =  {
    title: 'This is the home Page',
    message: 'A man, a plan, a canal: panama!'
  }
  reply.view('index', data);
}

module.exports = {
  method: 'GET',
  path: '/',
  handler: handler
}
