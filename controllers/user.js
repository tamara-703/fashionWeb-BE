//this file will contain async functions that will handle the create and login features of user auth

const express = require('express');
//require user model

//require bcrypt
const bcrypt = require('bcrypt');
//require jsonwebtoken
const jwt = require('jsonwebtoken');


//async function for singup (create)
async function create(req,res)
{
    res.send('I handle sign up')
}


//async function for login (login)
async function login(req,res)
{
    res.send('I handle login')
}


module.exports = {
    create,
    login
}
