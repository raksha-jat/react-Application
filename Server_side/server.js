//printing hello world

// import http from 'http';
// http.createServer(function(req,res){
//    res.writeHead(200,{"content-type":'text/html'})
  
//    res.end('Hello World!');
// }).listen(4000);

//asynchroneous programming
//  console.log('start');
//    setTimeout(()=>{
//      console.log('fetching Data ...');
//    },1000)
//    console.log('end');

// console.log('start');
// console.log('fetching data...');
// console.log('end')

// callback
// import fs from 'fs';
// fs.readFile('Server_side/example.txt','utf-8' ,(error,data)=>{
//     if(error){
//         console.log('error in fetching data');
//         return;
//     }
//     console.log('content in file : '+data);
// })
// console.log('reading file finished')

// promises
import  {promises as fs} from 'fs';
// fs.readFile('Server_side/example.txt','utf-8')
// .then(data=> console.log('content : '+data))
// .catch(err=> console.log('error in fetching data'));

//async/await
async function readfile(){
    try{
        const data=await fs.readFile('Server_side/example.txt','utf-8')
        console.log('content : '+data);
    }
    catch(err){
       console.log('error in fetching data')
    }
}
readfile();