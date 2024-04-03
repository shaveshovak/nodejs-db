// // Exercise 1

const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
const port = process.env.PORT || 3002;
const axios = require('axios');
const fs = require('fs');

// // Middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(port, () => console.log('Server is running on port', port));

// Exercise 2

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// Exercise 3
// app.delete('/', (req, res) => {
//   res.json({ good: 'yep' });
// });

// // Exercise 4
// const ejs = require('ejs');

// app.get('/test-ejs', (req, res) => {
//   const myTitle = "My First Title";
//   ejs.renderFile(__dirname + '/test.ejs', { myTitle }, (err, html) => {
//     if (err) throw err;
//     res.send(html);
//   });
// });

// // Exercise 5
// app.get('/test-ejs2', (req, res) => {
//   const users = ['Bob', 'John', 'Jane'];
//   res.render('test2.ejs', { users });
// });

// // Exercise 6
// app.get('/uploadTweet', (req, res) => {
//   res.sendFile(__dirname + '/uploadTweet.html');
// });

// app.post('/showTweet', (req, res) => {
//   console.log('userName:', req.body.userName);
//   console.log('message:', req.body.message);
// });

// // Exercise 7
// app.get('/searchForm', (req, res) => {
//   res.sendFile(__dirname + '/searchForm.html');
// });

// app.get('/notGoogleSearch', (req, res) => {
//   const searchQuery = req.query.search;
//   const date = req.query.date;
//   console.log('Search Query:', searchQuery);
//   console.log('Date:', date);
//   res.send('Form data received successfully!');
// });

// // Exercise 8
// app.get('/number/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(`The number is ${id}`);
// });

// // Exercise 9
// const axios = require('axios');

// app.get('/postlist', async (req, res) => {
//   try {
//     const response = await axios.get('http://jsonplaceholder.typicode.com/posts/1');
//     res.json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Exercise 10
// app.get('/postlist', async (req, res) => {
//   try {
//     const response = await axios.get('http://jsonplaceholder.typicode.com/posts/1');
//     const data = response.data;
//     // Write data to a file
//     fs.writeFile('posts.json', JSON.stringify(data), (err) => {
//       if (err) throw err;
//       console.log('Data written to file');
//     });
//     res.json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Exercise 11

// Install PM2 globally: npm install -g pm2
// Start your Express.js server with PM2: pm2 start app.js --name my-app
// Display the list of servers: pm2 ls
// View server logs: pm2 logs

// Exercise 12

// const cluster = require('cluster');
// const os = require('os');
// const express = require('express');

// if (cluster.isMaster) {
//   // Count the number of CPU cores
//   const numCPUs = os.cpus().length;

//   console.log(`Master ${process.pid} is running`);

//   // Fork workers equal to the number of CPU cores
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   // Handle worker death and respawn
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died`);
//     console.log('Respawning new worker...');
//     cluster.fork();
//   });
// } else {
//   // Worker process: create an Express app
//   const app = express();
//   const port = process.env.PORT || 3000;

//   app.get('/', (req, res) => {
//     res.send(`Worker ${cluster.worker.id} responding to request`);
//   });

//   // Start the server
//   app.listen(port, () => {
//     console.log(`Worker ${cluster.worker.id} is running on port ${port}`);
//   });
// }
