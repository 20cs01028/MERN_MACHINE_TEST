import express from 'express';
import Connection from './db.js';
import Router from './router.js';
import cors from 'cors';

const PORT = 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', Router);

app.listen(PORT, () => {
    console.log(`server running on port ${8000} successfully`);
});

Connection();