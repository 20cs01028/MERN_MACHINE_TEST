import multer from 'multer';
import pkg from '@thebguy/multer-gridfs-storage';
import mongoose from 'mongoose';
const { GridFsStorage } = pkg;


const storage = new GridFsStorage({
    db: mongoose.connection,
    url: 'mongodb://20cs01028:Database18@cluster0-shard-00-00.jqyoo.mongodb.net:27017,cluster0-shard-00-01.jqyoo.mongodb.net:27017,cluster0-shard-00-02.jqyoo.mongodb.net:27017/?ssl=true&replicaSet=atlas-5l29hd-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0',
    file: (request, file) => {
        return {
            bucketName: "fs",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 