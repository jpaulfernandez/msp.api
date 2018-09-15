"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
exports.authRouter = express.Router();
exports.authRouter.post("/auth", (req, res, next) => {
    console.log("logging in");
    passport.authenticate("local", { session: false }, (err, user, info) => {
        if (err) {
            res.json({ message: err + " from first throw" });
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                res.json({ message: err + " from login" });
            }
            let { userId, role } = user;
            const token = jwt.sign({ userId, role }, "secret");
            res.json(token);
        });
    })(req, res);
});
//# sourceMappingURL=authController.js.map