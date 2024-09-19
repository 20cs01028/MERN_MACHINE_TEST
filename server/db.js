import mongoose from "mongoose";

const Connection = async () => {
    const URL='mongodb://<username>:<password>@cluster0-shard-00-00.jqyoo.mongodb.net:27017,cluster0-shard-00-01.jqyoo.mongodb.net:27017,cluster0-shard-00-02.jqyoo.mongodb.net:27017/?ssl=true&replicaSet=atlas-5l29hd-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';
    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch(error) {
        console.log('Error while connecting to the database', error);
    }
}

export default Connection;