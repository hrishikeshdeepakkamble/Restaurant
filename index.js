let express = require('express')
let app = express()
app.set('view engine','ejs')

app.use(express.static('public'));
let body_parser = require('body-parser')
app.use(body_parser.urlencoded({extended : true}))
app.use(body_parser.json())

let dbConnect = require('./config.js')

let adminCollection = require('./model/admin.js')

let staffCollection = require('./model/staff.js')


app.get('',(req,res)=>{
    res.render('home');
})

app.get('',(req,res)=>{
    res.render('home');
})

app.get('/exploremenu',(req,res)=>{
    res.render('exploremenu.ejs');
})

app.listen(5000,()=>{
    console.log('Server Start');
})