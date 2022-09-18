// let n = 121212112
// let d = 1
// let start_time = new Date()
// console.log(start_time)
// while (true) {
//     let q = n / d
//     var i = 0
//     if (i <= q){
//         i += 1
//         continue
//     } else {
//         i -= 1
//         let remainder = n - (i * d)
//         console.log(`The remainder is ${remainder}\n\n\n`)
//         let end_time = new Date()
//         console.log(end_time - start_time); 
//         break
//     }
// }





let startTime = Date.now()
console.log(startTime)
let j = 0
for (let i = 0; i < 900; i++){
    // console.log(i)
    j+=i
}
// setTimeout(() =>{console.log('hello')}, 2000)

let endTime = Date.now()
console.log(endTime)

console.log(endTime - startTime)