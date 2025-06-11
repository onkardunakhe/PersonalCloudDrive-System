const express = require('express')
const dotenv = require('dotenv');
const cookieparser = require('cookie-parser')


const ConnectDB = require('./configue/db')
const UserRoute = require('./routes/user.routes')
const HomeRoute = require('./routes/home.routes')
const app = express();
dotenv.config();
ConnectDB();
app.set("view engine", 'ejs')

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

app.use('/', UserRoute);
app.use('/', HomeRoute);

process.on('unhandledRejection', (reason, promise) => {
    // console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Optionally, you can decide to exit the process after logging the error:
    // process.exit(1);  // Exiting process after unhandled rejection (optional)
});


app.listen(8000, () => {
    console.log("Server started");
})