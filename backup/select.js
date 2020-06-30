const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test.db');

db.serialize( () => {
	db.each('SELECT name, number FROM students;', (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( row.number + ' : ' + row.name );
	});
});
db.close();
