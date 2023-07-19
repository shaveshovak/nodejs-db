var express = require('express');
const fs = require('fs');
var app = express();

// Exercise 1 
app.get('/', function(req, res) {
    res.send('Welcome to the page!');
});

var server = app.listen(3000, function() {
    console.log('Server is running at http://localhost:3000');
});

// Exercise 2 

// PUT request handler for the home page
app.put('/', (req, res) => {
    const htmlContent = `
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Hello</title>
      </head>
      <body>
        How are you?
      </body>
      </html>
    `;
  
    // Write the HTML content to a file
    fs.writeFile('response.html', htmlContent, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        res.status(500).send('An error occurred while generating the HTML file.');
      } else {
        console.log('HTML file generated successfully.');
        res.sendFile(__dirname + '/response.html');
      }
    });
});
  
// Exercise 3
// Handle DELETE requests to the home route
app.delete('/', (req, res) => {
    const jsonResponse = {
      good: "yep"
    };
  
    res.json(jsonResponse);
});


// Exercise 4
// https://ejs.co/#install
const ejs = require('ejs');
// Set EJS as the view engine
app.set('view engine', 'ejs');

// Handle GET requests to the /test-ejs route
app.get('/test-ejs', (req, res) => {
    const myTitle = 'My First Title';
    res.render('test', { myTitle });
});

// Exercise 5
// Handle GET requests to the /test-ejs2 route
app.get('/test-ejs2', (req, res) => {
    const data = {
      users: ['Bob', 'John', 'Jane']
    };
  
    res.render('test2', data);
});

// Exercise 6
const methodOverride = require('method-override');
// Use method-override middleware
app.use(methodOverride('_method'));

// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Set the static file directory (if needed)
app.use(express.static('public'));
  

// Handle PUT requests to the root route
app.put('/', (req, res) => {
    res.send('PUT request received.');
});
  