import express from 'express';
import 'dotenv/config';
import { dbConnection } from './database/db.js';
import router from './router.js';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT

app.get('/healthy', (req, res) => {

    return res.status(200).json({
        success: true,
        message: "Server is healthy"
    });
});
app.use('/api', router)

dbConnection()
    .then(() => {
        console.log("Database Connected");
        app.listen(PORT, () => {
            console.log(`Server running ${PORT}`);
        });
    }).catch(error => {
        console.log("Error conecction database: " + error.message);
    });