import express, { Request, Response } from 'express'
import { Pool } from "pg";
const app = express()
const port = 5000

// parser
app.use(express.json());

//DB
const pool = new Pool({
  connectionString: `${process.env.CONNECTION_STR}`,
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req:Request, res:Response) => {
 
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
