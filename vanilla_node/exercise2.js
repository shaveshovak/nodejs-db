// ES5 - Common JS
// var fs = require('fs');
// const fs = require('fs/promises')

// ES6  
import fs from 'fs';
const { writeFile } = fs.promises;

const createFile = (fileName, data) => {
    try {
        writeFile(fileName, data);
        console.log('The file was created!')
    } catch(err) {
        console.log(err.message);
    }
}

createFile('example.txt', 'Hello world!');

// function createFile (fileName, data) {
//     try {
//         fs.writeFile(fileName, data);
//         console.log('The file was created!')
//     } catch(err) {
//         console.log(err.message);
//     }
// }

// createFile('example.txt', 'Hello world!');


