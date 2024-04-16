import "dotenv/config";
import session from 'express-session';
import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import Lab5 from "./Lab5.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import UserRoutes from "./Users/routes.js";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}))
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.HTTP_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
app.use(express.json())
UserRoutes(app);
CourseRoutes(app);
Lab5(app);
ModuleRoutes(app);
app.listen(process.env.PORT || 4000)