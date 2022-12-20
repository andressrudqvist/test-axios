const express = require('express')
const app = express()
const qs = require('qs');
const port = 3000

app.get('/', (req, res) => {
	console.log({ query: req.query })
	console.log({ qs: qs.parse(req.query )});
	res.send('ran test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})