const sqlite = require("aa-sqlite");

const dbsoruce = `${__dirname}/data.db`;

const db = async () => {
  await sqlite.open(dbsoruce);
  return sqlite;
};

exports.connectDB = db;
