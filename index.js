import express from 'express'
import { getAllCustomers, getCustomerById } from './src/customers.js'

const app = express()

app.get('/customers', getAllCustomers)
app.get('/customers/:customerId', getCustomerById)

app.listen(3033, () => console.log('Listening 0n http://localhost:3030....'))

