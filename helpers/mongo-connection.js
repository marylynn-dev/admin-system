const mongoose = require('mongoose');
// const dbURi = 'mongodb+srv://user:user@cluster0.dguon8p.mongodb.net/?retryWrites=true&w=majority'

// mongoose.connect(dbURi)
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error(err.message));

mongoose.connect(process.env.dbURi,
    {
        dbName: process.env.dbName,
    })
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err.message))

mongoose.connect(process.env.dbURi,)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err.message));

mongoose.connection.on('connected', () => console.log('MongoDB connected'));
mongoose.connection.on('error', (err) => console.error(err));
mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected'));

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
});
