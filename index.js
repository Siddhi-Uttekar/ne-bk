const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the specified directory
app.use(express.static(path.join(__dirname)));         //__dirname is a Node.js global variable that contains the path of the directory where the current JavaScript file resides.

// Define route to serve the index.html file
app.get('/', (req, res) => {
  // Set the path to the index.html file
  const indexPath = path.join(__dirname, 'index.html');

  // Send the index.html file as response
  res.sendFile(indexPath);
});

// Start the server
app.listen(port, () => {
  console.log("Server is running on http://localhost:3001");
  console.log(`Process ID: ${process.pid}`);
});

// askkill /pid 11704 /F

const http = require('http');
const fs = require('fs'); // Import the file system module
const path = require('path'); // Import the path module

const hostname = '127.0.0.1';
const port = 3002; // Change this to a different port if needed

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html'); // Path to your HTML file

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Internal Server Error');
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data); // Send the content of the HTML file as the response
    });
});

server.listen(port, hostname, () => {
    console.log(Server running at http://${hostname}:${port}/);
});