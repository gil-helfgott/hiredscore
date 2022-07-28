import express from 'express';
import {listen} from './routes/candidates';
import cors from "cors";

export const app = express();
app.use(cors());

listen(app);

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});