/*const fs = require('fs');
const stream = fs.createReadStream('text.txt', 'utf-8');
stream.on('text', (partText) => console.log(partText));*/

const fs = require('fs');
const { text } = require('stream/consumers');

const stream = fs.createReadStream('01-read-file/text.txt', 'utf-8');

stream.on('data', (data) => console.log(data));
stream.on('error', (error) => console.log('Error', error.message));
