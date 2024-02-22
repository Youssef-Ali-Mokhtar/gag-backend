require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');
const cors = require('cors');
const app = express();

app.use(cors());

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

app.use(express.json());

app.use('/api/posts', postRoutes);

app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('Conntected to db and now listening on port 4000...');
        })
    })
    .catch(error=>{
        console.log(error);
    })
