const mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/users', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to Mongoose sucesse'))
.catch((err) => console.error(err))