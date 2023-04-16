const mysql = require('mysql');
const ejs = require('ejs');
const express = require('express');
const bodyparser = require('body-parser')
const path = require('path');
const app = express();

app.listen('3000',()=>{
	console.log('tudo está funcionando')
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
	hostname:'localhost',
	user:'root',
	password:'',
	database:'news',
})

//app.get('/',function(req, res){
	//let query = db.query("SELECT * FROM `emails` ",function(err,results){
	//	res.render('clientes',{lista:results})
	//});
//});

app.get('/newsletter',function(req,res){
	res.render('cadastro',{});
});

app.post('/newsletter',function(req,res){
	console.log('Cadastro Realizado com sucesso!')
	let emails = req.body.emails;
	db.query("INSERT INTO emails (emails) VALUES (?)",[emails],function(err,results){})
	res.render('cadastro',{});
});
