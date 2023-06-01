import express from 'express';
import cors from 'cors';
import BookRoute from './routes/BookRoute.js'
import MemberRoute from './routes/MemberRoute.js'

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(BookRoute);
app.use(MemberRoute);

app.listen(PORT, () => {console.log("Server up and running...");})