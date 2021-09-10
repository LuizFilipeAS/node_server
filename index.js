const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

//  Middleware resposável pelo hadler dos cookies.
//  Extrai os dados e coloca em passport.session
//  Cookie = sessão
//  Cookie-session guarda dados da sessão nele mesmo

app.use(express.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //30 dias em ms
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    //Routes externas ao servidor (routes do cliente)
    app.use(express.static('client/build'));
    //Routes não reconhecidas
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);