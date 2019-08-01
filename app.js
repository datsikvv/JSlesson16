const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false }));

app.use(bodyParser.json());

app.get ('/json', function (req, res){
    let obj = {
        id: 1,
        name: 'Node.js'
    }
    res.send(obj)
});

let courses = [
{
	id: 1,
	name: 'Node.js'
},
{
	id: 2,
	name: 'Angular'
},
{
	id: 3,
	name: 'React'
}  
];


app.get('/', function (req, res) {
	res.send('Hello world!');
});

app.get('/api/courses', function (req, res) {
	res.send(courses)
});

app.get('/api/courses/:id', function (req, res) {
	//console.log(req.params);
	let course = courses.find(function (course) {
        return course.id === parseInt(req.params.id);
	});
	res.send(course)
});

app.post('/api/courses/',  function (req, res) {
	let course = {
		id: Date.now(),
		name: req.body.name
	};

	courses.push(course);
	res.send(courses);
})








































app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});




