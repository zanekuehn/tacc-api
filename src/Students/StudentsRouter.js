const express = require('express');
const StudentsServices = require('./StudentsServices');

const StudentsRouter = express.Router();
const jsonBodyParser = express.json();

StudentsRouter.get('/', (req, res, next) => {
	StudentsServices.getStudents(req.app.get('db')).then((student) => {
		if (!student) {
			return res
				.status(404)
				.json({ error: { message: 'Student not found' } });
		}
		return res.json(student);
	});
});

StudentsRouter.post('/', jsonBodyParser, (req, res, next) => {
	const { name, grade } = req.body;

	const newStudent = {
		name,
		grade
	};

	StudentsServices.addStudent(req.app.get('db'), newStudent).then((student) =>
		res
			.status(201)
			.location('/:id')
			.json(student)
	);
});

StudentsRouter.post('/:id', jsonBodyParser, (req, res, next) => {
	const { accomdation, description } = req.body;
	const accom_id = req.params.id;
	console.log(accom_id);
	const newAccomodation = {
		accomdation,
		description,
		accom_id
	};

	StudentsServices.addAccomdation(req.app.get('db'), newAccomodation).then(
		(accomodation) => {
			res.status(201)
				.location(':/id')
				.json(accomodation);
		}
	);
});

StudentsRouter.get('/:accoms', (req, res, next) => {
	const id = req.params.accoms;

	StudentsServices.getAccomodations(req.app.get('db'), id).then((accom) => {
		return res.json(accom);
	});
});

module.exports = StudentsRouter;
