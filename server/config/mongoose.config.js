const mongoose = require('mongoose');

mongoose.connect('mongodb://locahost/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(()=> console.log('estbalished a connection to the database'))

.catch(err => console.log('something went wrong when connecting to the database', err));