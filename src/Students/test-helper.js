const testHelpers = {
	makeStudentsArray() {
		return [
			{ id: 2, name: 'Bob', grade: 12, classroom: 'Algebra' },
			{ id: 3, name: 'sTob', grade: 12, classroom: 'Algebra' },
			{ id: 4, name: 'Nancy', grade: 12, classroom: 'Algebra' }
		];
	},

	makeAccomodations() {
		return [
			{
				id: 4,
				accomdation: 'Printer',
				description: 'Its so fancy',
				currentday: '2020-01-27',
				fulfilled: 'Yes',
				accom_id: 2
			},
			{
				id: 5,
				accomdation: 'Printer',
				description: 'Its so fancy',
				currentday: '2020-01-27',
				fulfilled: 'Yes',
				accom_id: 2
			},
			{
				id: 6,
				accomdation: 'Printer',
				description: 'Its so fancy',
				currentday: '2020-01-27',
				fulfilled: 'Yes',
				accom_id: 2
			}
		];
	},
	seedStudentsTable(db) {
		return db('students').insert(this.makeStudentsArray());
	}
};

module.exports = testHelpers;
