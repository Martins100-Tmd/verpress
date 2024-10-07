import express, { type Response, type Request } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
   res.status(200).json({ msg: 'Hello World' });
});

app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;
