import express from 'express'
import { addCustomer, getAllCustomers, getCustomerById } from './src/customers.js'


const app = express()
app.use(express.json())

app.get('/customers', getAllCustomers)
app.get('/customers/:customerId', getCustomerById)
app.post('/customers', addCustomer)

app.listen(3033, () => console.log('Listening 0n http://localhost:3033....'))

