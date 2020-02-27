
const path = require('path')
const express = require('express')
const app = express()

app.get('/', function(req, res){
const plotly = require('plotly')("jvillaflores", "M8Rg0zWBDbUHXyPsQYND")

const trace1 = {
    x: ["Monday", "Tuesday", "Wednesday","Thursday","Friday"],
    y: [390, 124, 88,25,20],
    name: "FOOD",
    type: "bar"
  };
  const trace2 = {
    x: ["Monday", "Tuesday", "Wednesday","Thursday","Friday"],
    y: [14,28,24,14,14],
    name: "TRANSPORTATION",
    type: "bar"
  };
  const trace3 = {
    x: ["Monday", "Tuesday", "Wednesday","Thursday","Friday"],
    y: [346,194,82,43,9],
    name: "SAVINGS",
    type: "bar"
  };

const data = [trace1, trace2,trace3];
const layout = {barmode: "group"};
const graphOptions = {layout: layout, filename: "grouped-bar", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);

    res.end(`<a href=${msg.url}>View My Daily Expenses Plot</a>`)   
    });
    
})
const PORT = process.env.PORT ||5000
app.listen(PORT)
console.log(`Server is running on local host ${PORT}`);
