const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
require("dotenv").config();
const app = express();
const routes = require("./routes");

const { mongoose } = require('./db.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//list all of your routes here
app.use("/api/electeur", routes.electeurRoute);
app.use("/api/admin", routes.adminRoute);
app.use("/api/condidat", routes.condidatRoute);
app.use("/api/listCondidat", routes.listCondidatRoute);
app.use("/api/PrivilegeAdmin", routes.PrivilegeAdminRoute);
app.use("/api/vote", routes.voteRoute);


app.listen(3000, () => console.log('server started at port : 3000'));

