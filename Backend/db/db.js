const mongoose=require('mongoose');

require('dotenv').config();

const connectdb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName:"Chat-app"
        });
        console.log("Connected to MongoDB",conn.connection.host);
    } catch (error) {
        console.error(`Error connecting to database: ${error}`);
    }
}
module.exports=connectdb;