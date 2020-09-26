const express = require('express');
const cors = require('cors')
const app = express();
const config = require('config'); //config is a module to read the the config folder's json file passed in NODE_ENV

const mongoose = require('mongoose');

app.use(cors())
app.use(express.json());
mongoose.connect(config.Mongo_db_conn_url, { useNewUrlParser: true,useUnifiedTopology: true },()=>{
    console.log("Connected to Mongo Cloud");
});
require('./server/routes')(app);
app.listen(config.port, () => { console.log("SERVER IS LISTENING ON PORT===>>> ", config.port, " AND ENVIROMENT IS ===>>>", process.env.NODE_ENV) })
