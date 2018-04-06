require ('dotenv').config();
const express = require('express');
const session = require('express-session');
// const pc = require('./profile_controller');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL
} = process.env;

const app = express();
app.use(bodyParser.json());

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    db.find_user([profile.id]).then( userResult => {
        if(!userResult[0]) {
            db.create_user([
                profile.picture,
                profile.displayName,
                profile.id
            ]).then( createdUser => {
                return done(null, createdUser[0].id)
            })
        } else {
            return done(null, userResult[0].id)
        }
    })
}))

passport.serializeUser((id, done) => {
    done(null, id);
})
passport.deserializeUser((id, done) => {
    app.get('db').find_session_user([id]).then( loggedInUser => {
        done(null, loggedInUser[0]);
    })
})

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/main/home',
    failureRedirect: 'http://localhost:3000'
}))

app.get('/auth/me', function(req, res) {
    if(req.user) {
        console.log('send req.user');
        res.status(200).send(req.user);
    } else {
        res.status(401).send('You need to log in!');
    }
})

app.get('/displayProfileInfo', (req, res) => {
    const db = req.app.get('db');
    // const { birthday, color, cake, iceCream } = req.body;
    db.view_profile([req.session.passport.user]).then((profileInfo) => {
        res.status(200).send(profileInfo);
    })
})

app.post('/api/updateInfo', (req, res) => {
    console.log("req.body", req.body);
    const db = req.app.get('db');
    const { birthday, color, cake, iceCream } = req.body;
    db.find_session_user([req.session.passport.user]).then((userId) => {
        if(!userId) {
            res.redirect('http://localhost:3000')
        } else {
            db.update_info([birthday, color, cake, iceCream, req.session.passport.user])
            .then( newInfo => {
                console.log("updateInfo");
                console.log("newInfo",newInfo);
                // res.status(200).send(newInfo);
            })
        }
    })
})

//     db.update_info([birthday, color, cake, iceCream, id]).then(info => {
//         console.log(info);
//         // res.status(200).send(info);
//     })



app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect('http://localhost:3000/')
})

app.listen(SERVER_PORT, () => {console.log(`${SERVER_PORT} bunnies hopping down Center Street.`)})