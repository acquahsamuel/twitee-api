const path = require("path");
const hpp = require("hpp");
const cors = require("cors");
const colors = require('colors');
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const xss = require("xss-clean");
const express = require("express");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const fileupload = require("express-fileupload");
const errorHandler = require('./middleware/error');
const mongoSanitize = require("express-mongo-sanitize");
const connectDB = require("./config/db");


// Load env vars
dotenv.config({
  path: "./config.env"
});

// Connect to database
connectDB();

// Route files in
const auth = require('./routes/auth');
const user = require('./routes/users');
const twitee = require('./routes/twitees');
const comment = require('./routes/comments');

const app = express();

// Body parser 
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}




// File uploading
app.use(fileupload());

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// Set CORS for different client access 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST , PUT , PATCH , DELETE');
  res.setHeader('Access-Control-Allow-Header', 'Content-Type,  Authorization');
  next();
})

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Mount routers
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', user);
app.use('/api/v1/twitees', twitee);
app.use('/api/v1/comments', comment);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
});
