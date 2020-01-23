const StudentsServices = {
	getStudents(db) {
		return db.from('students').select('*');
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
	getAccomodations(db, id) {
		return db
			.select('*')
			.from('accomodations')
			.where('accom_id', id);
	}
};

module.exports = StudentsServices;
