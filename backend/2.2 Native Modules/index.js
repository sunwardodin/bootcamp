const fs = require("fs");

fs.writeFile('messages.txt', "Hello from this new message I just made", (err) => {
    if (err) throw err;
    console.log('The file has been saced!');
})


fs.readFile('messages.txt', "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
})