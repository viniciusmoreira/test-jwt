const jwt = require('jsonwebtoken');

const secret = 'segredo_do_token';
const token = jwt.sign({
  user: '123456',
  name: 'Antônio Tonico'
}, secret, { expiresIn: '2 days' });

console.log('secret', secret);
console.log('token', token);

try {
  console.log('Token válido?', jwt.verify(token, secret));
} catch (error) {
  console.log('Token inválido!');
}