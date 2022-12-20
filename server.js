const express = require('express')
const app = express()
const qs = require('qs');
const port = 3000

app.get('/', (req, res) => {
	console.log(req.url);
	console.log('query:', JSON.stringify(req.query, null, '  ') )
	console.log('qs:', JSON.stringify(qs.parse(req.query ), null, '  '));
	res.send('ran test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})