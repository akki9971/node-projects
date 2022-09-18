// const fs = require('fs');
// const [add, sub, mult, divi] = require('./modules/customModules')

// fs.writeFileSync('readme.txt', "hey there i am learning node js backend course")
// fs.appendFileSync('readme.txt','hi this is aaquib your host your ghost')
// const data = fs.readFileSync('readme.txt' , 'utf8');
// console.log(data);

// fs.writeFile('modules/customModules.js', ` const add = (a,b)=>{
//     return a + b; 
// }

// module.exports = add`, (err)=>{
//     console.log('file created successfully');
// });
// fs.mkdirSync('./modules',{recursive: true})
// console.log(add(10,20));
// console.log(sub(10,20));
// console.log(mult(10,20));
// console.log(divi(10,20));




// console.log("hello 1");
// setTimeout(function() {
//     console.log("hello 2");
// },1000)
// setTimeout(function() {
//     console.log("hello 3");
// },0)
// console.log("hello 4");



// var num = 0
// while(num < 10) {
//     console.log('in '+num);
//     num++
// }


// do {
//     console.log('in ' + num);
//     num++
// } while (num < 10)
// console.log(num);

// function fibo(n) {
//     if (n == 0) {
//         return 0
//     } else if (n == 1) {
//         return 1
//     } else {
//         return (fibo(n - 1) + fibo(n - 2))
//     }
// }
// let num = 10
// for( let i = 0; i < num; i++ ) {
//     debugger;
//     console.log(fibo(i) )
// }


// let num = 625
// function findSqrt(n) {  // manually find squareroot of any number
//     return n**(1/2)
// }
// let sqrtNum = findSqrt(num)  
// console.log(sqrtNum);


// let nums = [2,3,4,6,8,9]
// let newNums = nums.map(elem=>{
//     elem*=2
//     if (elem>=10){
//         return elem
//     }
// })
// console.log(newNums );

const obj = [
    {name:'name1',email:"email1@email.com", position:"HR"},
    {name:'name2',email:"email2@email.com", position:"BR"},
    {name:'name3',email:"email3@email.com", position:"CR"},
    {name:'name4',email:"email4@email.com", position:"DR"},
]
const newObj = obj.map((elem)=> { return {name: elem.name, age: 'age'}})
console.log(obj)
console.log(newObj)