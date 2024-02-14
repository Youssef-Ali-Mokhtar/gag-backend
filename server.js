require('dotenv').config();
const express = require('express');
const postRoutes = require('./routes/posts');

const app = express();

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

app.use(express.json());

app.use('/api/posts', postRoutes);

app.listen(process.env.PORT, ()=>{
    console.log('Listening on port 4000...');
})