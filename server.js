const express = require('express')
const app = express()
require("dotenv").config();
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongodb://localhost:27017/vquad',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to your V Quad DB")
)

app.use("/auth", require('./routes/authRouter'))
// app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
// app.use("/api/issue", require('./routes/issueRouter'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("Server is listening on port 9000")
})