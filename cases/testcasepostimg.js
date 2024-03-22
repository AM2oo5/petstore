const { resolve } = require('path');
const request = require('supertest');

request('https://petstore.swagger.io').post('/v2/pet/1/uploadImage')
.send /*({
    "id": 0,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
}) */

.end((err, res) => {
    if (err) {
        reject (new err('Error'))
    }
    resolve(res.body)
})