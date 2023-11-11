
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const db = process.env.db;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true, // Use tls for SSL configuration
    tlsAllowInvalidCertificates: true, // Use this instead of deprecated sslValidate
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error('Error connecting to MongoDB:', error.message));
