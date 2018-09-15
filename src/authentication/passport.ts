import * as passport from "passport";
import * as passportLocal from "passport-local";
import * as passportJWT from "passport-jwt";
import { UserModel, User } from "../model/areas/user/User";

const localStrategy = passportLocal.Strategy;
const jwtStrategy = passportJWT.Strategy;
const extractJWT = passportJWT.ExtractJwt;

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new localStrategy({ usernameField: "username", passwordField: "password"}, (email, password, cb) => {
    UserModel.findUserById(email).then( resolve => {
        let user: User  = <User>resolve;
        if (user.password === password) {
            return cb(null, resolve, {message: "logged in success"});
        } else {
            return cb("incorrect password");
        }
    }, reject => {
        return cb(null, null, {message: "no user found"});
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