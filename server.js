const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const app = express();

const database = [
	user1 = {
		id: '1',
		name: 'John',
		password: '123',
		questionsAnswered: '21'
	}
]

app.use(bodyParser.json());

app.use(cors()); //Remember to use empty brackets to call cors()!

app.get('/', (req, res) => {
	res.send('getting root');
})

app.post('/signin', (req, res) => {
	const { name, password } = req.body;

	console.log("FRONT END : ", password);
	console.log("BACK END: ", database[0].passwrd);
	if(name == database[0].name && password == database[0].password){
		res.json(database[0]);
	}else{
		res.status(400).json("Couldn't get user");
		console.log('didnt work');
	}
})

app.post('/register', (req, res) => {
	const { name, password } = req.body;

	const user2 = {
		id: '2',
		name: name,
		password: password,
		questionsAnswered: 10
	};

	if(name !== '' || pass !== ''){
		database.push(user2);
		res.json(user2);
	}else{
		res.status(400).json("One of the fields is blank; couldn't return user");
	}
	console.log(user2);
})

app.put('/questionAnswered', (req, res) => {
	const { id } = req.body;
	let found = false;
	database.forEach( user => {
		if(user.id === id){
			found = true;
			return res.json(user);
		}
	})
	if(!found){
		res.status(400).json("Couldn't get user");
	}
})

app.listen(3000, () => {
	console.log('running!');
})