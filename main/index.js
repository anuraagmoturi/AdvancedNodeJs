
const express = require('express');
const crypto = require('crypto');
const app = express();
const Worker = require('webworker-threads').Worker;


app.get('/',(req, res) =>{
  crypto.pbkdf2('a','b',100000, 512, 'sha512', ()=> {
    res.send('Hi there');
  });
});

app.get('/fast',(req, res) =>{
  res.send('This was fast');
});


app.listen(3000,() => {
  console.log("server running @ 3000");
});


//-----Cluster-------


// process.env.UV_THREADPOOL_SIZE =1;
// const cluster = require('cluster');
//
//
// if(cluster.isMaster){
//
//   cluster.fork();
//   cluster.fork();
//   cluster.fork();
//   cluster.fork();
//
// }else{
//   //child mode
//   const express = require('express');
//   const crypto = require('crypto');
//   const app = express();
//
//
//
//   app.get('/',(req, res) =>{
//     crypto.pbkdf2('a','b',100000, 512, 'sha512', ()=> {
//       res.send('Hi there');
//     });
//   });
//
//   app.get('/fast',(req, res) =>{
//     res.send('This was fast');
//   });
//
//
//   app.listen(3000,() => {
//     console.log("server running @ 3000");
//   });
// }
//
