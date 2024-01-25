import app from './app.mjs';
import config from './config.mjs';
import bodyParser from 'body-parser';

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000; 

app.listen( PORT,() => {
    console.log(`server is listeinig at http://localhost:${PORT}`);
    }); 