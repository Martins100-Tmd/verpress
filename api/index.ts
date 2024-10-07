import express, { type Response, type Request } from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
   res.status(200).json({ msg: 'Hello World' });
});

app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;
