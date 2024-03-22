const { resolve } = require('path');
const request = require('supertest');

request('https://petstore.swagger.io').post('/v2/pet/1/uploadImage')
.send ({
    petId: '1',
    additionalMetadata: 'additionalInfo',
    file: '',
})

.end((err, res) => {
    if (err) {
        reject (new err('Error'))
    }
    resolve(res.body)
})