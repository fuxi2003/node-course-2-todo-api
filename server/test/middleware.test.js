const express = require('express');
const supertest = require('supertest');

var middleware = require('./../middleware');

middleware.csrf = function(){
  return function(req,res,next){
    req.session._csrf = '';
    next();

  };
};

var app = require('./../app');
var request = request('supertest');

describe('calendar',function(){
  it('should allow us to turn off csrf',function(done){
    request(app)
    .post('/calendars')
    .expect(200,done);
    });
  });
