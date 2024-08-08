import prexit from "prexit";
import { Database, open } from "sqlite";
import sqlite3 from "sqlite3";

let db: Database<sqlite3.Database, sqlite3.Statement>;

declare global {
  // eslint-disable-next-line no-var
  var __db: Database<sqlite3.Database, sqlite3.Statement>;
}

export const dbConnect = async () => {
  if (db) {
    console.log("Using existing MongoDB client");
    return db;
  }

  if (process.env.NODE_ENV === "production") {
    db = await open({
      filename: "../db.sqlite",
      driver: sqlite3.Database,
    });
  } else {
    if (!global.__db) {
      console.warn("Creating new MongoDB client");
      global.__db = await open({
        filename: "../db.sqlite",
        driver: sqlite3.Database,
      });
    }

    db = global.__db;
  }

  return db;
};

// TODO: Why is this getting cut off in development?
prexit(async () => {
  await db.close();

  console.warn("db connection closed");
});
