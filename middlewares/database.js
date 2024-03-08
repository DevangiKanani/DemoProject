const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URL, {});
        if (connection) { console.log("Database connected sucessfully") };
    } catch (error) {
        console.log("Error while connecting database", error);
    }
}

module.exports = connect;