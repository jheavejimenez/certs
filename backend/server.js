const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');

const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});


const app = express()
const port = process.env.PORT || 4000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connected');
});


// commented this out because it was causing an error

// app().use(cors()); // Middleware
// app().use(express.json()); // for parsing application/json

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});