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

app.use( express.static( `${__dirname}/../build` ) );


//============== AUTH ==============//

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.SUCCESS_REDIRECT,
    failureRedirect: process.env.FAILURE_REDIRECT
}))

app.get('/auth/me', function(req, res) {
    if(req.user) {
        res.status(200).send(req.user);
    } else {
        res.status(401).send('You need to log in!');
    }
})


//============   PROFILE  ============//

app.get('/displayProfileInfo', (req, res) => {
    const db = req.app.get('db');
    db.view_profile([req.session.passport.user]).then((profileInfo) => {
        res.status(200).send(profileInfo);
    })
})
//trying a post, lolz
app.post('/api/updateInfo', (req, res) => {
    console.log('server: trying to update!')
    console.log('req.params', req.params)
    console.log('req.params.id', req.params.id)
    const db = req.app.get('db');
    const { birthday, color, cake, icecream } = req.body;
    db.find_session_user([req.session.passport.user]).then((userId) => {
        if(!userId) {
            res.redirect(process.env.FAILURE_REDIRECT)
            console.log('server: could not find an id...')
        } else {
            // db.find_info([req.params.id]).then( infoResult => {
            //     if(!infoResult[0]) {
            //         console.log('server: could not find info so I am adding some')
            //         console.log('server 106', req.params.id, req.body)
            //         db.create_info([birthday, color, cake, icecream]).then( createdInfo => {
            //             res.send(createdInfo)
            //         })
            //     } else {
                    db.update_info([birthday, color, cake, icecream, req.params.id, req.session.passport.user])
                    .then( newInfo => {
                        console.log('newInfo ==>', newInfo)
                        console.log('Oh I know you I am adding the updates')
                        res.send(newInfo);
                    })
                }
            })
        // }
    })
// })

//===============   FRIENDS   =============//

app.get('/displayFriendsList', (req, res) => {
    const db = req.app.get('db');
    db.find_session_user([req.session.passport.user]).then((userId) => {
        if(!userId) {
            res.redirect(process.env.FAILURE_REDIRECT)
        } else {
            db.view_friends([req.session.passport.user])
            .then((friendsList) => {
                res.status(200).send(friendsList);
            })
        }
    })
})

app.get('/api/displayFriendInfo/:id', (req, res) => {
    const db = req.app.get('db');
    db.find_session_user([req.session.passport.user]).then((userId) => {
        if(!userId) {
            res.redirect(process.env.FAILURE_REDIRECT)
        } else {
            db.view_friend_info([req.session.passport.user, req.params.id])
            .then((friendInfo) => {
                res.status(200).send(friendInfo);
                console.log(req.session.passport.user, req.params.id)
                console.log('friendInfo:', friendInfo);
            })
        }
    })
})

app.put('/api/addFriend/:id', (req, res) => {
    const db = req.app.get('db');
    db.find_session_user([req.session.passport.user]).then((userId) => {
        if(!userId) {
            res.redirect(process.env.FAILURE_REDIRECT)
        } else {
            db.add_friend([req.session.passport.user, req.body.newFriend])
            .then((addedFriendList) => {
                res.send(addedFriendList);
            })
        }
    })
})

app.delete('/api/deleteFriend/:id', (req, res) => {
    const db = req.app.get('db');
    db.find_session_user([req.session.passport.user]).then((userId) => {
        if(!userId) {
            res.redirect(process.env.FAILURE_REDIRECT)
        } else {
            db.delete_friend([req.session.passport.user, req.params.id])
            .then( (newFriendList) => {
                res.send(newFriendList);
            })
        }
    })
})




//=========== AUTH LOGOUT ============//

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(process.env.FAILURE_REDIRECT)
})

// In case we used browser history?
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});





app.listen(SERVER_PORT, () => {console.log(`${SERVER_PORT} bunnies hopping down Center Street.`)})