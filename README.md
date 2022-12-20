# Run
- Install dependencies
	`npm install`
- Start server
	`node server.js``
- Start client
	`node client.js`

# Output:
```
{
  query: {
    case: 'attach object',
    testObj: {
      param1: 'hello',
      param2: 'world',
      param3: [Object],
      param5: [Array]
    }
  }
}
{
  qs: {
    case: 'attach object',
    testObj: {
      param1: 'hello',
      param2: 'world',
      param3: [Object],
      param5: [Array]
    }
  }
}
{
  query: {
    case: 'url search params',
    testObj: 'param1=hello&param2=world&param3=%5Bobject+Object%5D&param5=a%2Cb%2Cc'
  }
}
{
  qs: {
    case: 'url search params',
    testObj: 'param1=hello&param2=world&param3=%5Bobject+Object%5D&param5=a%2Cb%2Cc'
  }
}
```
