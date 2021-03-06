const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        mongoose.set('useCreateIndex', true);
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useFindAndModify: false
            ,useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.log(err.message);
        process.exit(1)
    }
}

module.exports = connectDB;