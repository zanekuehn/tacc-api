const StudentsServices = {
	getStudents(db) {
		return db.from('students').select('*');
	},
	getSingleStudent(db, id) {
		return db
			.from('students')
			.where('id', id)
			.returning('*');
	},

	addStudent(db, newStudent) {
		return db
			.insert(newStudent)
			.into('students')
			.returning('*')
			.then(([students]) => students);
	},

	addAccomdation(db, newAccomodation) {
		return db
			.insert(newAccomodation)
			.into('accomodations')
			.returning('*')
			.then(([accomdations]) => accomdations);
	},
	getAccomodationsLimited(db, id) {
		return db
			.select('*')
			.from('accomodations')
			.where('accom_id', id)
			.limit(10);
	},
	getAccomodations(db, id) {
		return db
			.select('*')
			.from('accomodations')
			.where('accom_id', id);
	},
	fillForm(db, id) {
		return db
			.from('accomodations')
			.where('accom_id', id)
			.distinct('accomdation', 'description');
	},

	deleteStudent(db, id) {
		return db
			.from('students')
			.where('id', id)
			.del();
	}
};

module.exports = StudentsServices;
