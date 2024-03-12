const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('X3nzDl0QFn', uuidlib.v4());
	}

module.exports = generateId
