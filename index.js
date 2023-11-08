const express = require('express')
var hbs=require('express-handlebars')
var path = require('path');
const app =express();
const port=3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.json());

app.get("/",(req,res)=>{
    const taskData = {
        task1: "https://helloworld-p5of.onrender.com",
        task2:"Sreejiths link-2",
        task3:"Sreejiths link-3"
    };
    res.render("home",{taskData});
});


app.listen(3000,()=>{
    console.log(`server started at http://localhost:${port}`);
})