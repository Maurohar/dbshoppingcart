import express from 'express';
import cors from 'cors';
import connectDB from './database/ProductRepo.js'; // Asumiendo que este archivo tiene la función connectDB
import routes from './Router/products.router.js';
import { __dirname } from '../src/utils.js';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public')); 

// Monta las rutas definidas en routes.js
app.use('/', routes);

connectDB(); // Asumiendo que `connectDB` está definido en ProductRepo.js

app.listen(4000, () => {
  console.log('Server funcionando en el puerto 4000');
});