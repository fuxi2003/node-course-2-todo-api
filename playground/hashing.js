const {SHA256} = require('crypto-js');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var password = 'abc123';
bcrypt.genSalt(10,(err,salt)=> {
bcrypt.hash(password,salt,(err,hash)=> {
  console.log(hash);
  });
});

var hashedPassword = '9da4d19e100809d42da806c2b7df5cf37e72623d42f1669eb112e23f5c9d45a3'';
bcrypt.compare('123!',hashedPassword,(err,res)=> {
  console.log(res);
  });
var data = {
  id:10
};
var token = jwt.sign(data,'123abc');
console.log(token);
var decoded = jwt.verify(token,'123abc');
console.log('decoded',decoded);
//jwt.sign;
//jwt.verify;

var message = 'I am user number 3';
var hash = SHA256(message).toString();
console.log( `message:${message}`);
console.log(`Hash:${hash}`);

var data = {
  id:4
};
var token = {
  data,
  hash:SHA256(JSON.stringify(data)+'somesecret').toString()
}

token.data.id = 5;
tokenhash = SHA256(JSON.stringify(token.data)).toString();



var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();
if(resultHash === token.hash){
  console.log('Data was not changed');
}else{
  console.log('Data was changed,Do not trust!');
}
