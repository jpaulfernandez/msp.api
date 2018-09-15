"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const passportLocal = require("passport-local");
const passportJWT = require("passport-jwt");
const User_1 = require("../model/areas/user/User");
const localStrategy = passportLocal.Strategy;
const jwtStrategy = passportJWT.Strategy;
const extractJWT = passportJWT.ExtractJwt;
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});
passport.use(new localStrategy({ usernameField: "username", passwordField: "password" }, (email, password, cb) => {
    User_1.UserModel.findUserById(email).then(resolve => {
        let user = resolve;
        if (user.password === password) {
            return cb(null, resolve, { message: "logged in success" });
        }
        else {
            return cb("incorrect password");
        }
    }, reject => {
        return cb(null, null, { message: "no user found" });
    });
}));
let opts = {
    jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secret"
};
passport.use(new jwtStrategy(opts, (jwt, cb) => {
    console.log(jwt);
    let user = { username: "hello" };
    return cb(null, user);
}));
//# sourceMappingURL=passport.js.map