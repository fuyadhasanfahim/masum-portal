import express, {
    type Application,
    type Request,
    type Response,
} from 'express';
import cors from 'cors';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth.js';
import 'dotenv/config';

const app: Application = express();

app.use(
    cors({
        origin: [process.env.FRONTEND_URL!],
        credentials: true,
    })
);

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
