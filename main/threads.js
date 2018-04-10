process.env.UV_THREADPOOL_SIZE = 4;

// 5 takes equal times for all the threads
//3: 1238
// 2: 1251
// 5: 1262
// 4: 1277
// 1: 1282

const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('a','b',100000, 512, 'sha512', ()=> {
  console.log('1:', Date.now() - start);
});

crypto.pbkdf2('a','b',100000, 512, 'sha512', ()=> {
  console.log('2:', Date.now() - start);
});

crypto.pbkdf2('a','b',100000, 512, 'sha512', ()=> {
  console.log('3:', Date.now() - start);
});

crypto.pbkdf2('a','b',100000, 512, 'sha512', ()=> {
  console.log('4:', Date.now() - start);
});

crypto.pbkdf2('a','b',100000, 512, 'sha512', ()=> {
  console.log('5:', Date.now() - start);
});