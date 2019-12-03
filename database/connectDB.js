const mongoose = require('mongoose');
const config = require('config');
const connectDB = config.get("mongoURI");

module.exports = async () => {
    try {
        let params = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        };
        await mongoose.connect(connectDB,params);
        console.log("Connected to MongoAtlas");
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

