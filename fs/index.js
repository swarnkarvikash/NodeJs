const fs = require('fs');

console.log('READ START');
//Asynchronous way to read file
fs.readFile('input.txt', function(err, data){
    if(err) {
        console.log('Error: ', err);
        return err;
    }
    console.log('Data: ',data.toString());
    console.log('READ END');
    return data;
});

console.log('OTHER STUFF');

//synchronous way to readFile

var data = fs.readFileSync('input.txt');
console.log('Data: ', data.toString());

//read > open + read

const buf = new Buffer(1024);

fs.open('input.txt', 'r+', function(err, fd) {
    if(err) {
        console.log('Erroe in file opening: ', err);
    }
    console.log("File open successfully");

    fs.read(fd, buf, 0, buf.length, 0, function(er, data){
        if(er){
            console.log('Erroe in reading file!');
        }
        console.log('Data: ', data.toString());
        console.log('Data: ',buf.slice(0, data).toString());
        fs.close(fd, function(err){
            if(err){
                console.log('Error in closing file');
            }else{
                console.log('Success in closing file');
            }
        })
    });
});

//Writing to file
fs.writeFile('input.txt', 'From Suriyawan', function(err){
    if(err) {
       console.log('Error in writing file!');  
    }else{
        console.log('Success in writing file!');
    }
});

//Append to file

fs.appendFile('input.txt', '--Vikash Swarnkar', 'utf8', function(err){
    if(err) {
        console.log('Error in writing file!');  
     }else{
         console.log('Success in append file!');
     }
});

//Deleting file

fs.unlink('input.txt', function(err){
    if(err){
        console.log('Error in deleting file!');
    }else{
        console.log('Success in deleting file!');
    }
})