var st = "string";
// var st1 = 'string';
// we can define string with single quotes('') and double quotes("")
// console.log(st===st1);
// console.log(st , typeof (st) , st[0], st[1], st[2], st[3], st[4]);
// ans - string , s,t,r,i,n
var b = "5"
// console.log(b, typeof (b) , b[0], b[1] , b[2], b[3]);
//ans1 - 5,string , " , 5 , " , object
//ans2 - 5 , string, 5 , undefined , undefined , undefined

// var c = parseInt(b) // convert string to number
// console.log(c, typeof (c));


// var num = 123
// console.log(num, typeof (num) );
// console.log(num, typeof (num) , num[0], num[1], num[2], num[3]);
// ans - 123 , number , undefinded , undefinded , undefinded , undefined
// var snum = num.toString(); // convert number to string
// console.log(snum, typeof (snum));

// let bool = false;
// console.log(bool, typeof (bool));
// console.log(bool, typeof (bool) , bool[0], bool[1], bool[2], bool[3]);
// ans- false, boolean, undefined , undefined , undefined , undefined 
// let sbool = bool.toString(); // convert boolean to string
// console.log(sbool, typeof (sbool) , sbool[0], sbool[1], sbool[2], sbool[3]);
// ans- false,  string, f ,a ,l , s

let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// console.log(arr, typeof (arr));
// console.log(arr.join('-'));

// console.log(`we are ${arr}`);

// let sarr = arr.toString(); // convert array to string
// console.log(sarr, typeof (sarr), sarr[0], sarr[1], sarr[2], sarr[3]);

// let obj = {
//     name: "a",
//     age: 10,
//     contact: 789797998,
//     isDeveloper: true
// }
// console.log(obj, typeof (obj));
// console.log(typeof(obj.contact),obj);
// let sobj = obj.toString(); // convert object to string
// console.log(sobj , typeof (sobj)  , sobj[0], sobj[1], sobj[2], sobj[3]);

// let x;
// console.log(x, typeof (x));
// let sx = x.toString();
// console.log(sx , typeof (sx));
// console.log(x, typeof (x) , y); here x is undefined and y is not definded

// let av = null;
// console.log(av, typeof (av));
// let sav = av.toString();
// console.log(av , typeof (av));

/* prototype  inheritance */

// var ob = {};
// console.log(ob, typeof (ob) );

// var Func = function(s){
//     // anonymous function
//     let fnv = "hello fn " + s;
//     // console.log(fnv);
//     return fnv
// }
// var Funcarrow = (s) => {
//     // arrow function
//     let fnv = "hello fn " + s;
//     // console.log(fnv);
//     return fnv
// }
// // Func('argumented')
// console.log(Func('argumented'));

function NameSorter(names){
    let namedArray = [];
    let namedString = '';
    if (typeof names === 'object'){
        namedArray = names.sort();
        return namedArray
    } else if(typeof names === 'string'){
        namedArray = names.split(' ').sort();
        namedString = namedArray.join(' ')
        return namedString
    }
}




































let Users = ["akib" , "rakib", "jaan", "akshay", "qasim"]
let userString = "akib rakib jaan akshay qasim"
console.log(NameSorter(Users));
console.log(NameSorter(userString));