import express from 'express'
const app =express()

app.post('/login', (req, res) => {
  // Handle login logic here
  res.send('Login endpoint');
});


app.post('/register', (req, res) => {
  // Handle registration logic here
  res.send('Register endpoint');
});
