
const fs = require('fs');
const request = require('request');//npm install request
const readline = require('readline');
const web = process.argv.slice(2);

request(web[0], (error, response, body) => {
    fs.readFile(web[1], 'utf8', (error, data)=> {
    if (data !== undefined||!error) {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      rl.question("This File already exist, do you wanna overwrite? if yes enter y   ", (response) => {             
         if(response === "y") {
          fs.writeFile(web[1], body, function (err) {
            if (err) throw err;
            console.log(`Downloaded and saved ${body.length} bytes to ${web[1]}`);
          });
         }
      });
    } else {
      fs.writeFile(web[1], body, function (err) {
        if (err) throw err;
        console.log(`Downloaded and saved ${body.length} bytes to ${web[1]}`);
      });

    }
  })
  //console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  });


