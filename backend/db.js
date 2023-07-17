console.log("Hi i am on db.js");

const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/ideabook";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, () => {
        console.log("Connected successfully on the mongodb")
    })
}

module.exports = connectToMongo;


   