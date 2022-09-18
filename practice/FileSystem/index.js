const fs = require('fs')
const http = require('http')

http.createServer((req,res) => {
    fs.readFile('./myfile.html',(err,data) => {
        if(err) return err
        res.writeHead(200,{"content-type": "text/html"})
        res.end(data)
    })
}).listen(4000,"127.0.0.1")

    // 1. create new file (if file present it appends the data to the existing file)
// fs.appendFile("newfile.js", "<h1>I am A new File </h1>", (erorr) => {
//     if (erorr) {
//         console.log("erorr got" + erorr);
//     }
//     console.log("file successfully saved!");
// })
// fs.writeFile("myfile.txt", "Hello boss", (error) => {
//     if(error){
//         console.log(error);
//     }
//     console.log('file created successfully');
// })

    // 2. read existing file
// fs.readFile("./newfile.js", "utf-8",(err, data)=>{
//     console.log('file readed ',data);
// })
// const rad = fs.readFileSync("./newfile.js","utf-8")
// console.log(rad);
// fs.writeFile('texts.txt','hello i am created n will be deleted shortly',(err)=>{
//     console.log('file saved');
        // for creating new file (if file present it will replace the content)
// })

    // 3. deletes the existing file
// fs.unlink('./texts.txt',(err)=>{
//     console.log("deleted");
//     // for deleting file
// })

    // 4. renames the file
// fs.rename("./newfile.js","myfile.js",()=>{
    // console.log('filerenamed')
// })
