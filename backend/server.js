const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv')
dotenv.config();

const app = express()
const port = process.env.PORT || 4000;

app.use(express.json()); // for parsing application/json
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connected');
});

const certificateRouter = require('./routes/certificate');
app.use('/api/certificates', certificateRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
