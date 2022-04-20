import express from 'express';
import { 
    Request, 
    Response,
} from 'express';

const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../react-app/build')));

app.get('/api', (req: Request, res: Response) => {
  res.send('API works!');
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../react-app/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Application started on port ${PORT}!`);
});