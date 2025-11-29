import express, { Request, Response } from "express";
import { Pool } from "pg";
const app = express();
const port = 5000;

// parser
app.use(express.json());

//DB
// const pool = new Pool({
//   connectionString: `${process.env.CONNECTION_STR}`,
// });
const pool = new Pool({
  connectionString: `psql 'postgresql://neondb_owner:npg_xQp2mYVJiZ4b@ep-round-river-aden8ef1-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'`,
});

const initDB = async () => {
  await pool.query(
    `
    CREATE TABLE IF NOT EXISTS users(
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) NOT NULL,
          age INT ,
          phone VARCHAR(15),
          address TEXT,
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW()
 
    )
    `
  );
};

// initDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req: Request, res: Response) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
