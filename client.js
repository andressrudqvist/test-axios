const axios = require('axios');

const testObj = {
	param1: 'hello', // this one is serialized
	param2: 'world',
	param3: { // this one isn't correctly serialized
		param4: 'recursive'
	},
	param5: ['a', 'b', 'c'] // this one isn't serialized with plain object, but it does with URLSeachParams
}

axios.get('http://localhost:3000', {
	params: {
		testObj: {
			case: 'destructuring',
			...testObj
		}
	},
});

axios.get('http://localhost:3000', {
	params: {
		// attach object
		case: 'attach object',
		testObj
	},
});

axios.get('http://localhost:3000', {
	params: {
		case: 'url search params',
		testObj: new URLSearchParams(testObj),
	},
});