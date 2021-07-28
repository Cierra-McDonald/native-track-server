require('./models/User')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes')


const app = express();


//information needs to be parsed first, this order matters
app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = 'mongodb+srv://admin:Mariposa@96!@cluster0.sb9jc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri, { 
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => { 
    console.log('Connected to mongo instance')
})

mongoose.connection.on('error', (err) => { 
    console.error('Error connecting to mongo', err);
})

app.get('/', (req, res) => { 
    res.send('Hello there!')
})

app.listen(7890, () => { 
    console.log('Listening on port 7890!')
})

//hello is this working???
