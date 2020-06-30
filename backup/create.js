const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test.db');

db.run('CREATE TABLE IF NOT EXISTS students( name TEXT, number INT)');
db.close();
