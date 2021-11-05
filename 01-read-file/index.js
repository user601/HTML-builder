const fs = require('fs');
const { text } = require('stream/consumers');

const stream = fs.createReadStream('01-read-file/text.txt', 'utf-8');

stream.on('data', (data) => console.log(data));
stream.on('error', (error) => console.log('Error', error.message));
