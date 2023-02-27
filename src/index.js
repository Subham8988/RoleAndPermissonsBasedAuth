// require express
const express = require('express');
const app = express();
const db = require('../src/config/db.Config');
const routes = require('../src/router/router');
const port = process.env.port || 3200;

// accept json via api 
app.use(express.json());

// use handelbars to show html page as in base eurl
const hbs= require('hbs');
const path = require('path');
const homePage = path.join(__dirname,'../src/view/index.hbs');
app.set('view engine',hbs);

//base url http://localhost:3200 home page
app.get('',async (req,res)=>{
try {
    res.status(200).render(homePage);
} catch (error) {
   res.status(500).send(error); 
}
});

// api url and routes link
app.use('/api/usermanagements/v1',routes);


 // server listen 
app.listen(port,'127.0.0.1',(e)=>{
console.log(`app is listening at port no ${port}`);
})

