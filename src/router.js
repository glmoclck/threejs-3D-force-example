
import express from 'express';
import path from 'path';

import { engine } from 'express-handlebars';
import graphData from'../src/public/flare.json' assert { type: "json" };

import * as d3 from "d3"

const router = express.Router();


// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', path.join(rootDir, 'src/views'));



/* views */
router.get('/', (req, res) => {
  res.render('3d');
});

router.get('/square', (req, res) => {
  res.render('square');
});

// same rendering as '/'
router.get('/bubble', (req, res) => {
  res.render('3d');
});

/* sending data */
router.get('/api/tree', (req, res) => {
  res.send(graphData);
});


router.get('/api/bubble', async (req, res) => {
  const data = await d3.csv('public/test.csv');
  files = data.filter(d => d.value !== null) // just the leaves
  res.send(files);
});



export default router;