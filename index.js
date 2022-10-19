import express from 'express'
import { getAllCustomers } from './src/customers.js'

const app = express()

app.get(getAllCustomers)

app.listen(3030, () => console.log('Listening 0n http://localhost:3030....'))

