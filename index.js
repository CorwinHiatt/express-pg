import express from 'express'

const app = express()


app.get('/customers', (req, res) => {
    res.send('This will be a list of customers soon....🤯')
})

app.listen(3030, () => console.log('Listening 0n http://localhost:3030....'))

