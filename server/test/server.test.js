const expect = require('expect');
const request = require('supertest');
const {ObjectID }  = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../model/todo');
const {todos,populateTodos,users,populateUsers} = require('./seed/seed');
const todos = [{
  _id: new ObjectID(),
  text:'First test todo'
  },
  {_id:new ObjectID(),
  text: 'second test todo'
  }];

beforeEach(populateUsers);
beforeEach(populateTodos);

describe('POST/todos',()=> {
  it('should create a new todo',(done)=> {
    var text = 'Test.todotext';
    request(app)
    .post('/todos')
    .set('X-auth',users[0].tokens[0].token[])
    .send({text})
    .expect(200)
    .expect((res)=> {
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=> {
      if(err){
        return done(err);
      }
     Todo.find().then(todos => {
       expect(todos.length).toBe(1);
       expect(todos[0].text).toBe(text);
       done();
     }).catch((err)=>
         done(err));
    });
  });
 it('should not create todo with invalid body date',(done)=>{
    request(app)
    .post('/todos')
    .send()
    .expect(400)
    .end((err,res)=> {
      if(err){
        return done(err);
      }
     Todo.find().then(todos => {
       expect(todos.length).toBe(1);
       done();
     }).catch((err)=>
         done(err));
    });
});
//});
describe('GET/todos:id',()=> {
  it('should return todo ',(done)=> {
    request(app)
    .get(`/todos/${todos[0]._id.toHexString()}`)
    .expect(200)
    .expect((res)=> {
      expect(res.body.todo.text).toBe(todos[0].text);
      })
    .end(done);
    });

  it('should return 404 if todo not found',(done)=> {
    var hexId = new ObjectID().toHexString();
    request(app)
    .get('/todos/${hexId}')
    .expect(404)
    .end(done);
    });

  it('should return 404 if non-object ids',(done)=> {
    request (app)
    .get('/todos/123abc')
    .expect(404)
    .end(done);
    });
  });

describe('GET /users/me',()=>{
  it('should return user if authenticated',(done)=> {
    request(app)
    .get('/users/me')
    .set('x-auth',users[0].tokens[0].token)
    .expect(200)
    .expect((res)=>{
      expect(res.body._id).toBe(users[0]._id.toHexString());
      expect(res.body.email).toB(users[0].email);
      })
    .end(done);
    });

  it('should return 401 if not authenticated',(done)=> {
     request(app)
     .get('/users/me')
     .expect(401)
     .expect((res)=> {
       expect(res.body).toEqual({});
       })
     .end(done);
    });
  });

describe ('POST /users', ()=> {
  it('should create a user',(done)=>{
    var email = 'example@example.com';
    var password = '123mnb!';
    request(app)
    .post('/users')
    .send({email,password})
    .expect(200)
    .expect((res)=> {
      expect(res.headers['x-auth']).toExist();
      expect(res.body._id).toExist();
      expect(res.body.email).toBe(email);
      })
    .end((err)=> {
      if(err){
        return done(err);
      }});
      User.findOne({email}).then((user)=>{
        expect(user).toExist();
        expect(user.password).toNotBe(password);
        done();
        });
      });

    it('should return validation errors if request valid',(done)=>{
        request(app)
        .post('/users')
        .send({
          email:'and',
          password:'123'
          })
        .expect(400)
        .end(done);
        });

   it('should not create user if email in use',(done)=>{
        request(app)
        .post('/users')
        .send({
          email:users[0].email,
          password:'Password 123!'
          })
        .expect(400)
        .end(done);
        });
    )

describe('POST/users/login',()=>{
  it('should login user and return auth login token',(done)=> {
    request(app)
    .post('/users/login')
    .send({
      email:users[1].Email
      password:users[1].password
      })
    .expect(200)
    .expect((res)=>{
      expect(res.headers['x-auth']).toExist();
      })
    .end((err,res)=>{
      if(err){
        return done(err);
      }
      user.findById(users[1]._id).then((user)=>{
        expect(users[0].token).toInclude({
          access:'auth',
          token:res.headers['x-auth']
          });
          done();
        }).catch((err)= done(err));
        });
      });
      it('should reject invalid login ',(done)=>{
        request(app)
        .post('/users/login')
        .send({
          email:users[1].Email,
          password:users[1].password
          })
        .expect(400)
        .expect((res)=>{
          expect(res.headers['x-auth']).toNotBeExist();
          })
        .end((err,res)=>{
          if(err){
            return done(err);
          }

          User.findById(users[1]._id).then((user)=>{
            expect(user.tokens.length).toBe(0);
              done();
            }).catch((err)= done(err));
            });
        });

      )




describe('Delete users/me/token',()=>{
  it('should remove auth token on logout ',(done)=>{
    request(app)
    .delete('Delete users/me/token')
    .set('X-auth',users[0].tokens[].token[0])
    .expect(200)
    .end((req,res)=>{
      if(err){
        return done (err);
      }

    User.findById(users[0]._id).then((user)=> {

      expect(user.tokens.length).toBe(0);
      done（);
      }).catch((err)=>done(err));
    //Delete user/me token
    //set x-auth equal  to token
    //200
    //Find user, verify that the tokens array has length of zero
    });
  });
});
