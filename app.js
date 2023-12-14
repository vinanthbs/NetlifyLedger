const express = require('express')
const path = require('path')
const app =express()
// app.use(cookieParser());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.set('views',path.join(__dirname,"views"))
app.set('view engine', 'pug')


app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    console.log('entred "/"')
    res.render('home')
})

app.get('/rent/viewall', (req, res)=>{
    console.log('entred "/rent viewall"')
    res.render('ViewAllRent')
})

app.get('/expences/viewall', (req, res)=>{
    console.log('entred "/expences viewall"')
    res.render('ViewAllExp')
})

app.get('/expences/view/1', (req, res)=>{
    console.log('entred "/expences view 1"')
    res.render('viewexp')
})

app.get('/expences/editexp/1', (req, res)=>{
    console.log('entred "/expences editexp 1"')
    res.render('expedit')
})

app.get('/rent/view/1', (req, res)=>{
    console.log('entred "/rent/view/1 "')
    res.render('view')
})

app.get('/rent/editask/1', (req, res)=>{
    console.log('entred "/rent/editask/1"')
    res.render('editRecord')
})

app.get('/rent/AddRent', (req, res)=>{
    console.log('entred "/rent/AddRent"')
    res.render('AddRent')
})

app.get('/expences/AddExp', (req, res)=>{
    console.log('entred "/expences/AddExp"')
    res.render('AddExp')
})

app.get('/report/custom', (req, res)=>{
    console.log('entred "/report/custom"')
    res.render('CustomReport')
})

app.get('/collective', (req, res)=>{
    console.log('entred "/collective"')
    res.render('collective')
})

app.listen(80)