import * as express from "express";
import * as passport from "passport";
import * as jwt from "jsonwebtoken";

export const authRouter = express.Router();

authRouter.post("/auth", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("logging in");
    passport.authenticate("local", {session: false}, (err, user, info) => {
        if (err) {
            res.json({message: err + " from first throw"});
        }

        req.login(user, {session: false}, (err) => {
            if (err) {
                res.json({message: err + " from login"});
            }
            let { userId, role } = user;
            const token = jwt.sign({userId, role}, "secret");
            res.json(token);
        });
    })(req, res);
});
