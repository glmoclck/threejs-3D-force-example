import  express from 'express';
import { engine } from 'express-handlebars';
import graphData from'./src/public/flare.json' assert { type: "json" };
import * as d3 from "d3"
import path from 'path';
import router from './src/router.js';
const rootDir = path.resolve();

const app = express();
const port = 3000;

app.use(express.static('./src/public'));

// same as ejs but config is slightly different : 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(rootDir, 'src/views'));

// fixing cors error :https://stackoverflow.com/questions/49031758/node-js-cors-error
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(router);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
