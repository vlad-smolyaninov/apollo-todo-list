import express from 'express';
import reactSSR from "./reactSSR";
import path from "path";

const app = express();

app.get('/', reactSSR);
app.use('/static', express.static(path.join(__dirname, '../../build/client')))

export default app;
