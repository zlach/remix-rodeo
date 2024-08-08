import { open } from "sqlite";
import sqlite3 from "sqlite3";

const db = await open({
  filename: "./db.sqlite",
  driver: sqlite3.Database,
});

await db.exec(
  "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)"
);

const stmt = await db.prepare("INSERT INTO users (id, name) VALUES (?, ?)");

stmt.run(1, "First");
stmt.run(2, "Second");
stmt.run(3, "Third");
stmt.run(4, "Fourth");
stmt.run(5, "Fifth");

await stmt.finalize();
await db.close();
