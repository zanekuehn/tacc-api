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

StudentsRouter.get('/student/:id', (req, res, next) => {
	StudentsServices.getSingleStudent(req.app.get('db'), req.params.id).then(
		(student) => {
			if (!student) {
				return res
					.status(404)
					.json({ error: { message: 'Student not found' } });
			}
			return res.json(student);
		}
	);
});

StudentsRouter.post('/', jsonBodyParser, (req, res, next) => {
	const { name, grade, classroom } = req.body;

	const newStudent = {
		name,
		grade,
		classroom
	};

	StudentsServices.addStudent(req.app.get('db'), newStudent).then((student) =>
		res
			.status(201)
			.location('/:id')
			.json(student)
	);
});

StudentsRouter.post('/:id', jsonBodyParser, (req, res, next) => {
	const { accomdation, description, currentday, fulfilled } = req.body;
	const accom_id = req.params.id;
	console.log(accom_id);
	const newAccomodation = {
		accomdation,
		description,
		currentday,
		fulfilled,
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

	StudentsServices.getAccomodationsLimited(req.app.get('db'), id).then(
		(accom) => {
			return res.json(accom);
		}
	);
});

StudentsRouter.get('/all/:id', (req, res, next) => {
	const id = req.params.id;

	StudentsServices.getAccomodations(req.app.get('db'), id).then((accom) => {
		return res.json(accom);
	});
});

StudentsRouter.get('/form/:id', (req, res, next) => {
	const id = req.params.id;
	StudentsServices.fillForm(req.app.get('db'), id).then((accoms) => {
		return res.json(accoms);
	});
});

StudentsRouter.delete('/:id', (req, res, next) => {
	StudentsServices.deleteStudent(req.app.get('db'), req.params.id)
		.then(res.status(204).end())
		.catch(next);
});

module.exports = StudentsRouter;
