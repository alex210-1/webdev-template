import express from 'express';
import { Client } from 'pg';
import { config } from './config';
import { getName } from './generated/test.queries';


export const pgClient = new Client(config.dbConfig);
pgClient.connect(); // async

export const app = express();

// routes
app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.get('/name/:id', (req, res) => {
    const id = Number(req.params.id);

    const name = getName.run({ id }, pgClient)

    res.json({ name });
});

app.listen(config.port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${config.port}`);
});
