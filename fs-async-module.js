const {readFile, writeFile} = require('fs');
readFile('./content/result.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return }
    console.log(result);
})