require('dotenv').config();
const express = require('express');
const articleRoutes = require('./routes/articleRoute');
const authRoutes = require('./routes/authRoute');
const cors = require('cors');

const app = express();


app.use(cors('*'))

app.use(express.json());

app.use('/auth', authRoutes)

app.use('/article', articleRoutes);

app.listen(process.env.PORT, () => {
    console.log("listening on 5000");
})