const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test.db');

db.run('INSERT INTO students VALUES ("工大太郎",1832999);');
db.close();
