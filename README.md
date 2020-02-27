# Final Activity 1

## Steps
1. Initialize node repository ```npm iniy --y```
2. Install plotly dependency ```npm install --save plotly```
1. Draw your plot.
```js
# instantiate plotly
# define data
# graph options
# graph plot
```
1. Setup express scripts
```js
const path = require('path')
const express = require('express')
const app = require()

app.get('/', function(req,res){
    res.end('Hello World!');
});
app.listen(3000)
console.log('Server is running on 192.168.202.106:3000')

```
1. Deploy to Heroku
```js
# Install Heroku CLI
> heroku --version
> heroku login
Loggin in... done
Logged in as jvillaflores_180000001215@uic.edu.ph
>heroku create jvillaflores
Creating jvillaflores...done
https://jvillaflores.herokuapp.com. | https://git.heroku.com/jvillaflores.git
>git push heroku master
>heroku open

