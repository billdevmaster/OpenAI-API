import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routers/index.js';
import http from "http";
import cors from "cors";
import config from './config.js';

var app = express();

// const socketUtils = require("./utils/socketUtils");

const server = http.createServer(app);
// const io = socketUtils.sio(server);
// socketUtils.connection(io);

var HOST_NAME = config.DATABASE_URI;

mongoose.connect(HOST_NAME).catch(error => console.error("error", error.message));
app.use(cors({origin: "*"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', router);

server.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
