import type { DB } from "./db";


export const createTables = async (db: DB) => {

  db.exec(`
  DROP TABLE IF EXISTS projects;
  CREATE TABLE IF NOT EXISTS projects (
    id UUID NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    url TEXT,
    is_public BOOLEAN NOT NULL,
    created_at DATETIME NOT NULL,
    published_at DATETIME NOT NULL
  );
`);
};