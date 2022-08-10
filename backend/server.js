const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();


const app = express()

const port = 5000;


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});