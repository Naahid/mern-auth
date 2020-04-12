const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require("passport");





const app = express();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.use(express.urlencoded({
    extended: false
}))

require('./config/passport')
app.use(passport.initialize())



const dbkeys =require("./config/keys").ATLAS_URI
mongoose.connect(dbkeys, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
 .then(() => console.log("MongoDB database connection established successfully"))
 .catch(err => console.log(err))





// const users = require("./routes/api/users")
// app.use("/api/users/", users);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
