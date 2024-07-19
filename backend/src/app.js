import express from "express"
import cros from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cros({
    origin: process.env.CROS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// import routes
import userRouter from "./routes/user.route.js"

// routes declaration
app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v1/users/register

export { app }