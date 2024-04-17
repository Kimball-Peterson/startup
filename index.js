require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const port = 4000;
const authCookieName = 'token';
const DB = require('./database');


app.use(cors());
app.use(express.json());
// app.use(session({
//     secret: '260password', 
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: process.env.NODE_ENV === 'production' }
// }));
app.use(express.static('public'));


app.post('/register', async (req, res) => {
    if (await DB.getUser(req.body.username)) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await DB.createUser(req.body.username, req.body.password);
  
      // Set the cookie
      setAuthCookie(res, user.token);
  
      res.send({
        token: user._id,
      });
    }
  });
  
  // GetAuth token for the provided credentials
  app.post('/login', async (req, res) => {
    const user = await DB.getUser(req.body.username);
    if (user) {
        console.log(user);
      if (await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user.token);
        console.log(user.token);
        res.send({ token: user._id });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
  });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }

