import express from 'express';
const app = express();

import {PORT,SERVER_URL} from './config/env.js'

app.get('/', (req,res) => {
  res.send('<body style="display:flex; justify-content:center; align-items:center; background-color:#222;"><div style="display:flex; flex-direction:column; justify-content:center; height:200px; width:500px; color:#fff; background-color:#111; border-radius:15px; padding:20px;"><h1>TaskFlowAPI</h1><p>TaskFlowAPI is a backend API for managing tasks with user authentication, CRUD operations, task statuses, due dates, filtering, and sorting. It ensures secure, efficient task tracking with role-based access.</p></div></body>');
});

app.listen(PORT, () => {
  console.log(`server is running on : ${SERVER_URL}`);
});