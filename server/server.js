const express = require('express');
const app = express();
const user_info = require('./routes/user_info');
const upload_file = require('./routes/upload_file');
 
app.use('/user_info', user_info);
app.use('/upload_file', upload_file);

const port = 3001;
app.listen(port, () => console.log(`Node.js Server is running on port ${port}...`));
