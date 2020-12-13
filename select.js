const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test.db");

db.serialize(() => {
  db.each("SELECT id, 都道府県, 人口 FROM example;", (error, row) => {
    if (error) {
      console.log("Error: ", error);
      return;
    }
    console.log(row.id + " : " + row.都道府県 + " : " + row.人口);
  });
});
db.close();
