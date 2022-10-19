import pg from 'pg'
import { creds } from '../creds.js'

const { Pool } = pg



export async function getAllCustomers(req, res) {
    const pool = new Pool(creds)
   const customers = await pool.query("SELECT * FROM customers")
   .catch(err => res.status(500).send(err))
    res.send(customers)
    pool.end()
}