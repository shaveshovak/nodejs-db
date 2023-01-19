// const fs = require('fs/promises'); // Common JS
import fs from 'fs';
const { readFile } = fs.promises;

function readInfoFromFile (fileName) {
    readFile(fileName, 'utf-8', (err, data) => {
        if (err) {
            // console.error(err);
            console.log(err.message)
        } else {
            console.log('data');
            console.log(fileName);
        }
        console.log('The file was readed')
    });
}

// function readInfoFromFile (fileName) {
//     fs.readFile(fileName, 'utf-8', (err, data) => {
//         if (err) {
//             // console.error(err);
//             console.log(err.message)
//         } else {
//             console.log(data);
//             console.log(fileName);
//         }
//     });
// }

readInfoFromFile('./example.txt');