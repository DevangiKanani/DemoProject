// https://www.javatpoint.com/node-js-interview-questions for nodejs questions

// const { formatNumber } = require("@angular/common");
// const { Result } = require("postcss");

// https://www.linkedin.com/pulse/top-10-tricky-javascript-questions-i-used-ask-interviews-amit-pal

// https://testbook.com/interview/javascript-logical-interview-questions

// https://github.com/sudheerj/javascript-interview-questions#what-is-the-difference-between-let-and-var best for learn

// https://builtin.com/software-engineering-perspectives/javascript-interview-questions

// https://www.scaler.com/topics/pattern-in-javascript/


// latest
// https://github.com/Mohamed-Hashem/nodejs-interview-questions
// https://github.com/sujeet-agrahari/javascript-questions
// 63bd57b02e39825b5e8221a6
// https://codeshare.io/63bd57b02e39825b5e8221a6
// curl -x http://online-server-ip:8080 https://example.com

// for javascript qustions
// https://hackr.io/blog/javascript-interview-questions 
// https://www.edureka.co/blog/interview-questions/javascript-interview-questions/
// https://in.indeed.com/career-advice/interviewing/javascript-interview-questions-and-answers
// https://www.toptal.com/javascript/10-most-common-javascript-mistakes
// https://www.guru99.com/javascript-interview-questions-answers.html
// https://www.upgrad.com/blog/javascript-interview-questions-answers/

// nodejs questions
// https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-interview-questions 
// https://nodesource.com/blog/avoiding-common-challenges-node-js/

// Normal use of the object and how get value of object using for in loop
// const property = "name";
// let user = {
//     a: 100,
//     b: "abc"
// }
// for (const key in user) {
//     console.log("--key--", typeof user[key]);
// }

// how value change in the object
// const a = {};
// const b = { keyName: "h" }
// const c = { key: "c" }
// a[ JSON.stringify(b)] = 12345;
// console.log(a, "-1-")
// a[c] = 45698;
// console.log(a,"-2-")
// a['b'] = 12345;
// a['c'] = 45698;
// console.log("---a--", a[b]);
// console.dir(a,{depth: 99});
// console.log("----a----", a, b, c);'

// program for divided string as per given number
// function demo(str, number) {
//         console.log("--str---", str, number);
//         const arr = str.split('');
//         const res = []
//         for (let i = 0; i < arr.length; i += number) {
//                 console.log("--arr.slice(i, i + number)--", arr.slice(i, i + number).length);
//                 if (arr.slice(i, i + number).length === number) {
//                         res.push(arr.slice(i, i + number).join(''))
//                 }
//         }
//         console.log("---res---", res);
// }
// demo("devangi", 2)

// const str = "123456789"
// console.log(str.match(/.{2,4}/g));

// program for find a number form given array usinh isNaN
// const arr = [1, 3, 4, "a", "b", 7, 9]
// for (let i = 0; i < arr.length; i++) {
//     if (isNaN(arr[i])) {
//         arr.splice(i, 1)
//         i--;
//     }
// }
// console.log(arr);

//conver string into array
// let str = "devangi";
// let a = [...str];
// console.log(str.split(''));
// console.log(a);

// let user = {
//     name: "abc",
//     age: 20,
//     clg: {
//         a: "pqr", b: "b"
//     }
// }
// use of spread oprator
// let admin = { admin: "xyz", ...user }
// console.log(admin);

// desturing
// change name of object property
// const { name: myname } = user;
// console.log(user);
// console.log(myname);

// nested desture object
// const { clg: { a: nested } } = user
// console.log(nested);

// function get(a, b,c) {
//     // console.log(...a, ...c, b);
//     return [...a, c, b]
// }
// console.log(get(['1','2'], 'a', 'c')); 

// let a = { name: "abc" }
// let b = a
// console.log("b:", b)
// console.log('---',a);
// b = null
// console.log("a",a);
// console.log("b",b);


// here it's update the value of the number when we pass the arguments with value
// const value = { number: 10 }
// const mul = (x = { ...value }) => {
//     console.log("value of x===>", x);
//     console.log("----output----", (x.number *= 2))
// }
// console.log("-------value1------",value);
// mul();
// console.log("-------value2------",value);
// mul(value)
// console.log("-------value3------",value);
// mul()

// here how pass by reference can work for data1 it's change the original value 
// function change(data) {
//         console.log("--data--", data);
//         data.age = 20
//         console.log("--data 1---", data, "---data,age---", data.age);
//         data = {
//                 age: 30
//         }
//         console.log("----", data);
//         return data
// }
// const data1 = {
//         age: 25
// }
// console.log("--outside--", data1);
// const data2 = change(data1)
// console.log("data1", data1);
// console.log("data2", data2);

// hoisting
// let x;
// console.log("--x--", x);
// x = 3;
// var a = 1;
// var a = "name"
// var x = 20;
// function z() {
//     x = 21
//     console.log(x);
//     var x;
//     // console.log(x);
// }
// z()

// console.log('1' + 2);
// let a = [2, 3, 6]
// console.log(typeof +'2');
// console.log(a.includes(+'2')); 


// function grandfather() {
//     let name = 'Hammad';
//     // 'likes' is not accessible here
//     return function parent() {
//         // 'name' is accessible here
//         // 'likes' is not accessible here
//         return function child() {
//             // Innermost level of the scope chain
//             // 'name' is also accessible here
//             var likes = 'Coding';
//             console.log("--likes--", likes, name);
//         }
//     }
// }
// let a = grandfather();
// console.log("--a--",a()());


// const n = 5;
// let fact = 1;
// for (i = 1; i <= 5; i++) {
//     console.log(i);
//     fact = fact * i
//     console.log("--", fact);
// }

// n = 8
// let a = 0;
// let b = 1;
// let c;
// let temp;
// for (let i = 2; i < n; i++) {
//     c = a + b
//     a = b
//     b = c
//     console.log("--c--", c);
// }


// let n = 23
// if (n % 2 == 0) {
//     console.log("--not--");
// } else {
//     console.log("--prime--");
// }

// prime number serises
// for (let i = 1; i <= 15; i++) {
//     let flag = 0
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1
//             break
//         }
//     }
//     if (flag === 0) {
//         console.log(i);
//     }
// }

// let count = 0
// let i, j
// for (j = 1; j <= 15; j++) {
//     for (i = 1; i <= j; i++) {
//         if (j % i == 0) {
//             count++
//         }
//     }

//     if (count == 2)
//         console.log(j)
//     count = 0
// }


//palindrome number
// const n = 131;
// var n = 131
// let sum = 0
// let res
// let a = n
// console.log(a);
// while (n > 0) {
//     console.log("--n--", n);
//     res = n % 10
//     console.log("--res--", res);
//     sum = (sum * 10) + res
//     console.log("--sum--", sum);
//     n = parseInt(n / 10)
//     console.log("--n last--", n);

// }
// if (sum === a) {
//     console.log("--yes--");
// }

// palindrome string
// let str = 'madam'
// let arr = str.split('')
// console.log('--arr--', arr);
// let res = arr.reverse().join('')
// console.log("--res--", res);
// if (str === res) {
//     console.log("--true--");
// }

// Armstrong Number
// let n = 371;
// let sum = 0, op;
// let a = n
// while (n > 0) {
//     op = n % 10;
//     console.log('--op--', op);
//     sum = sum + (op * op * op)
//     console.log("--sum--", sum);
//     n = parseInt(n / 10)
//     console.log("--n--", n);
// }
// if (a === sum) {
//     console.log('--true--');
// }


//callback

// function modifyArray(arr, callback) {
//     // do something to arr here
//     console.log("---in 2--");
//     console.log("---arr1---", arr);
//     arr.push(100);
//     console.log("---arr2---", arr);

//     // then execute the callback function that was passed
//     callback();
// }

// var arr = [1, 2, 3, 4, 5];

// modifyArray(arr, function () {
//     console.log("---in 1--");
//     console.log('--arr--',arr);
//     console.log("array has been modified", arr);
// });

// for (let i = 1; i <= 15; i++) {
//     let f = i % 3 == 0,
//         b = i % 5 == 0;
//     console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
// }


// anagrams of one another
// let firstWord = "Marys";
// let secondWord = "Army";

// let a = firstWord.toLowerCase()
// let b = secondWord.toLowerCase()

// a = a.split('').sort().join('');
// console.log("--A--", a);

// b = b.split('').sort().join('');
// console.log("--b--", b);

// if (a === b) {
//     console.log("true");
// }

// var y = 1;
// if (function f() { }) {
//     // console.log('--typeof--', typeof f());
//     y += typeof f;
// }
// console.log(y);


// let arr = [1, 5, 4, 6, 1, 4, 6, 3, 1, 4, 1, 5, 7]
// count = {};
// arr.forEach((b) => {
//     if (count[b]) {
//         count[b]++
//     } else {
//         count[b] = 1
//     }
// })
// var result = Object.values(count).sort((a, b) => a - b);
// var result1 = Object.entries(count).sort((a, b) => b - a);
// console.log(count,result,result[result.length - 2], result1);

// o/p = { '1': 4, '3': 1, '4': 3, '5': 2, '6': 2, '7': 1 } [
//     [ '1', 4 ],
//     [ '3', 1 ],
//     [ '4', 3 ],
//     [ '5', 2 ],
//     [ '6', 2 ],
//     [ '7', 1 ]
//   ]

// let a = [1, 5, 3, 5]
// let d = []
// let c = a.map((b) => b * 2)
// console.log(c);

// a.forEach((b,i) => {
//     a[i] = b*2
// })
// console.log(a);


// let people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 },
//     { name: 'Jane', age: 21 }
// ]
// let data = {};
// people.forEach((item) => {
//     console.log("--", data[item.age]);
//     if (!data[item.age]) {
//         console.log("--if--");
//         data[item.age] = [item]
//         console.log("--data--", data);
//     } else {
//         console.log("--else--");
//         data[item.age].push(item)
//     }
// })
// console.log("--data--", data);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // if (JSON.stringify(arr) == JSON.stringify(arr1)) {
// //     console.log('--true--');
// // }
// let sum = []
// let result = [];
// let target = 10

// for (const a of arr) {
//     let diff = target - a
//     // console.log('--', JSON.stringify(sum).includes(JSON.stringify([1, 8])));
//     if (!JSON.stringify(sum).includes(JSON.stringify([a, diff]))) {

//         sum.push([diff, a])
//     }
// }

// console.log("--sum--", sum);


// let num = 3
// let result = num === 1 ? 'one' : num === 2 ? 'two' : 'three'
// console.log('--result--', result);

// let friends = [{
//     name: 'Anna',
//     books: ['Bible', 'Harry Potter'],
//     age: 21
// }, {
//     name: 'Bob',
//     books: ['War and peace', 'Romeo and Juliet'],
//     age: 26
// }]

// let a = friends.reduce((cur, pre) => {
//     return [...pre.books, ...cur];
// }, [])
// console.log(a);

// let a = [1, 111, 22, 2, 5, 1, 2, 3, 4, 9, 7, 3, 45, 5]
// // a.sort((a, b) => a - b)
// let b = a.filter((c, i) => { return a.indexOf(c) !== i })
// console.log(b);
// let c = ['vidhi', 'dhara', 'priya']
// c.sort().reverse();
// console.log(c, a[a.length - 1]);

// var x = 20;

// function func1() {

//     var x = 5;

//     console.log("----1--", this.x);

//     function func2() { console.log("--2-", x); }

//     func2();

// }

// func1();

// function sayHello(name) {
//     console.log('Hello ' + name);
// }

// function greetPerson(callback) {
//     let name = 'abc'; // displays a prompt to the user to submit a name
//     callback(name);
// }

// greetPerson(sayHello);

// function isPalindrome(str) {
//     str = str.replace(/\W/g, '').toLowerCase();
//     console.log("--str--", str);
//     return (str == str.split('').reverse().join(''));
// }

// console.log(isPalindrome("A car, a man, a maraca"))

// var d = {};
// ['zebra', 'horse'].forEach(function (k) {
//     d[k] = undefined;
// });
// console.log(Object.entries(d));

// let arr1 = "john".split('');
// console.log(arr1);
// let arr2 = arr1.reverse();
// console.log(arr2.length);
// let arr3 = "jones".split('');
// console.log(arr3.length);
// arr1.push(arr3);
// console.log(arr2);
// console.log(arr1);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


// for (var i = 0; i < 5; i++) {
//     ((x) => {
//         setTimeout(function () { console.log(x); }, x * 1000);
//     })(i);
// }

// console.log(typeof null);

// var a = [1, 2, 3];
// a[10] = 99;
// console.log(a[6]);

// console.log(1 < 2 < 3);
// console.log(3 > 2 >= 1);

// var x = 21;
// function girl() {
//     console.log(this.x);
//     // var x = 20;
// };
// girl ();


// you can differentiate between primitive and non-primitive
// Primitive Data Types : 1)Stored by Value 2)Immutable
// Non-Primitive (Object) Data Types : 1) Stored by Reference 2) Mutable

// The spread operator makes deep copies of data if the data is not nested. When you have nested data in an array or object the spread operator will create a deep copy of the top most data and a shallow copy of the nested data.
// if you want to deep copy of the nested object than use this let deepCopyObj = JSON.parse(JSON.stringify(obj));
// let obj = {
//     a: 1,
//     b: 2,
//     c: {
//         age: 30
//     }
// };
// var objclone = Object.assign({}, obj);
// // var objclone = { ...obj };
// // var objclone = JSON.parse(JSON.stringify(obj));
// console.log('objclone: ', objclone);
// // objclone.c.age = 45;
// obj.b = 5
// console.log('After Change - obj: ', obj);           // 45 - This also changes
// console.log('After Change - objclone: ', objclone); // 45

// var length = 10;
// function fn() {
//     console.log(this.length);
// }
// var obj = {
//     length: 5,
//     method: function (fn) {
//         fn();
//         arguments[0]();
//     }
// };

// obj.method(fn, 1);

// let obj = {
//     name: "abc", age: 21, c: { a: 21 }
// }

// let { c:{a:n} } = obj
// console.log(n);


// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// function demo(a) {
//     console.log(a);
//     // let c = [...new Set(a)]
//     // console.log(c);
//     for (const b of arr) {
//         // console.log(b);
//         if (!a.toString().includes(b.toString())) {
//             return false
//         }
//     }
//     return true
// }

// let r = demo(112233445566778899)
// console.log("---r---", r);

// console.log(a);
// var a;


// let [x, y] = [10, 20]
// console.log(x);

// let a = {
//     name: "abc", age: 20
// }

// let { name: myName } = a
// console.log(myName);
// console.log(a);

// a['myName'] = a['name']
// delete a['name']

// delete Object.assign(a, { myName: a.name })['name']
// console.log(a);


// let a = [1, 2, 3, 4, 6, 4, 5, 6, 2]
// function unique(d) {
//     let res = d.filter((a, i) => { return d.indexOf(a) !== i });
//     let a = d.filter((data) => { return !res.includes(data) })
//     return a
// }
// let a = unique([1, 9, 8, 8, 7, 6, 1, 6])
// console.log("--a--", a);


// let str = 'army';
// let str1 = 'marys'

// let a = str.split('').sort().join();
// let b = str1.split('').sort().join();


// if (a === b) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// const number = undefined + 11;
// console.log(typeof number,typeof NaN);
// if(number === 'NaN'){
//     console.log("true");
// }else{
//     console.log("false");
// }

// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++); {
//     numbers.push(i + 1);
// }
// console.log(numbers);

// function arrayFromValue(item) {
//     return [item];
// }
// console.log(arrayFromValue(10));
// let i;
// for (let i = 0; i < 3; i++) {
//     const log = () => {
//         console.log(i);
//     }
//     setTimeout(log, 100);
// }


// const passengers = [
//     {
//         id: 1,
//         passengerName: "Freddie Mercury",
//         isVegetarianOrVegan: false,
//         connectedFlights: 2,
//     },
//     {
//         id: 2,
//         passengerName: "Amy Winehouse",
//         isVegetarianOrVegan: true,
//         connectedFlights: 4,
//     },
//     {
//         id: 3,
//         passengerName: "Kurt Cobain",
//         isVegetarianOrVegan: true,
//         connectedFlights: 3,
//     },
//     {
//         id: 4,
//         passengerName: "Michael Jackson",
//         isVegetarianOrVegan: true,
//         connectedFlights: 1,
//     },
// ];

// // let names = []
// // for (const data of passengers) {
// //     names.push(data.passengerName)
// // }
// // console.log(names);

// let a = passengers.sort((connectedFlights1, connectedFlights2) => connectedFlights1 - connectedFlights2)
// console.log(a);


// function modifyArray(arr, callback) {
//     // do something to arr here
//     arr.push(100);
//     // then execute the callback function that was passed
//     callback();
// }

// var arr = [1, 2, 3, 4, 5];

// modifyArray(arr, function () {
//     console.log("array has been modified", arr);
// });

// console.log(foo);
// var foo = function () { }

// 134430468813

// let a = [9,2,8,1,3,5,6,7,3,1,1,6]
// let b = [7,8,4,6,2,1,9,9,7]

// let str = a.join('');
// let str1 = b.join('');
// console.log("--str--", parseInt(str)+parseInt(str1));


// const prompt = require('prompt-sync')();

// let arr = ['red', 'pink', 'blue', 'white', 'green', 'orange', 'yellow']
// // let str = 'samir has blue and white t-shirt with blue'
// let a = str.split(' ');
// let str = prompt('enter text :  ', '');
// console.log(a);
// let obj = {};
// for (const ele of a) {
//     if (arr.includes(ele)) {
//         if (obj[ele]) {
//             obj[ele]++;
//         } else {
//             obj[ele] = 1;
//         }
//     }
// }
// console.log("---obj---", obj);

// let arr = [1, 5, 3, 54, 6, 5, 5, 4]
// console.log(arr.length, arr);
// delete arr[2];
// console.log(arr.length, arr);
// let b = arr.concat(arr);

// let b = Array.isArray(arr);

// let a = arr.slice(0, -2)
// console.log("--a--", b);

// let str = 'hello hii'
// let a = str.split('').reverse().join('')
// console.log(a);

// let Employee = {
//     company: 'abc'
// }
// console.log(Employee.company);

// let emp1 = Object.create(Employee);
// console.log(emp1,emp1.company);

// delete emp1.company
// console.log(emp1.company);


// var s = '100'
// function demo(){
//     console.log("--s--",this.s);
//     var s = '200'
//     console.log('==s==',s);
// }

// demo()
// let str = 'pqr';
// let str1 = 'apc';
// let count = 0;
// function demo(a, b) {
//     a.split('').map((c) => {
//         if (!b.includes(c)) {
//             count++;
//         }
//     })
//     b.split('').map((c) => {
//         if (!a.includes(c)) {
//             count++;
//         }
//     })
//     return count;
// }
// console.log(demo(str, str1));

// let arr = [9, 4, -2, -1, 5, 0, -5, -3, 2]
// let positive = [], negative = [], result = []
// for (const [i, a] of arr.entries()) {
//     a >= 0 ? positive.push(a) : negative.push(a);
// }
// // const maxLength = Math.max(positive.length, negative.length)
// for (let i = 0; positive[i] || positive[i] === 0; i++) {
//     result.push(positive[i])
//     if (negative[i]) result.push(negative[i])
// }
// console.log(result);

// const prompt = require('prompt-sync')();

// let arr = ['red', 'pink', 'blue', 'white', 'green', 'orange', 'yellow'];
// let ans = {}
// let arrayString = []
// const testCases = prompt('Enter Test case : ', '');
// console.log("🚀 ~ testCases:", testCases)
// for (let i = 0; i < testCases; i++) {
//     arrayString[i] = prompt(`Enter String ${i + 1} : `, "");
// }
// console.log('--arrayString--', arrayString);
// let stringWords = arrayString.join(" ").split(" ");
// for (let color of stringWords) {
// 	if (arr.includes(color)) {
//         if (ans[color]) {
//             ans[color]++
//         } else {
// 			ans[color] = 1
//         }
//     }
// }
// console.log("🚀 ~ ans:", ans)

// console.log(Object.fromEntries(Object.entries(ans).sort((a, b) => b[1] - a[1])))

// let a = 'hello how are you'
// // console.log('a===>', a, typeof a);
// // let b = a.split('\n');
// // console.log('b===>', b, typeof b);
// let c = a.replace('hello', '').trim()
// console.log(c);


// let user = { name: "anc", age: 23 }

// let arr = [1, 2, 4, 5, 6]

// for (const a in arr) {
//     console.log(arr[a]);
//     // console.log(user[a]);
// }

// let arr = [
//     {
//         name: 'abc',
//         age: 23
//     },
//     {
//         name: 'ab',
//         age: 23
//     },
//     {
//         name: 'ac',
//         age: 23
//     },
//     {
//         name: 'wbc',
//         age: 23
//     }
// ]

// let d = arr.reduce((a, c) => {
//     console.log('--a--', a);
//     console.log("--c--", c);
//     a.push(c);
//     return a
// }, [])

// console.log('--d--', d);

// let num = [5, 9, 12, 24, 67]

// let sum = num.reduce(function (accumulator, curValue) {

//   return accumulator + curValue

// })

// console.log(sum)

// let initialValue = 0

// let obj = [{ n: 5 }, { n: 9 }, { n: 13 }, { n: 25 }, { n: 40 }]

// let sum = obj.reduce(function (accumulator, curValue) {
//     console.log("--accumulator--", accumulator, curValue);
//     return accumulator + curValue.n

// },0)

// console.log(sum)

// https://www.youtube.com/watch?v=zWSvb5t_zH4 socket-io


// console.log(Array.from('foo'));
// let a = 'foo'
// console.log(a.split(''));

// const set = new Set(["foo", "bar", "baz", "foo"]);
// console.log(set);
// console.log(Array.from(set));

// const fn = (n, l) => [...Array(n)].map((i, id) => Math.floor(l/(n-1) * id))
// console.log(fn(3,100))


// let a = ' str';
// console.log(a.trim().charAt(0).toUpperCase() + a.slice(1));

// let parts = [];

// const eachPart = 100 / 3;
// const roundedPart = Math.round(eachPart);
// const totalSum = roundedPart * 3;
// const remainingFraction = 100 - totalSum;

// parts.push(roundedPart + remainingFraction);
// parts.push(roundedPart);
// parts.push(roundedPart);

// console.log(parts); // output: [33.34, 33, 33]


// const myAwesomeArray = [1, 2, 3, 4, 5]

// const startForEach = performance.now()
// myAwesomeArray.forEach((x) => { x + 2 })
// // console.log(a);
// const endForEach = performance.now()
// console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`)
// console.log('--myAwesomeArray--', myAwesomeArray);

// const startMap = performance.now()
// let b = myAwesomeArray.map(x => (x + x) * 10000000000)
// console.log(b);
// const endMap = performance.now()
// console.log(`Speed [map]: ${endMap - startMap} miliseconds`)
// console.log("--2-myAwesomeArray--", myAwesomeArray);


// let a = [{ name: 'abc', age: 29 }, { name: 'ac', age: 29 }, { name: 'ab', age: 29 }, { name: 'aiic', age: 29 }]
// let b = a.map((c) => Object.values(c))
// console.log(b);

// let a = { name: 'abc', age: 1 }
// let b = { add: 'abds' }
// let c = Object.assign({}, a, b)
// console.log(c);

// let a = [1, 2, 3, 4]
// a.forEach((b,i) => a[i] + 1)
// console.log(a);

// var arr = ["one","two","three"];

// arr.forEach(function(part, index) {
//   arr[index] = "four";
// });

// console.log(arr);

// let a = {age:32}
// let b = {name:'hbc'}
// let c = {...b,...a,year:2023}
// c.age=12
// console.log(c,a);

// let a = [5, 7, 9, 6, 8, 58, 63, 2]
// let target = 11
// let map = new Map()
// let ans = []
// a.map((b) => {
//     let value = 11 - b
//     if (a.includes(value)) {
//         if (!JSON.stringify(ans).includes(JSON.stringify([b, value])))
//             ans.push([value, b])
//     }
// })
// console.log([...new Set(ans)]);


// function findFirstNonRepeatedChar(str) {
//     const map = new Map();
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (map.has(char)) {
//         map.set(char, map.get(char) + 1);
//       } else {
//         map.set(char, 1);
//       }
//     }
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (map.get(char) === 1) {
//         return char;
//       }
//     }
//     return null;
//   }

//   console.log(findFirstNonRepeatedChar("leetlcode")); // Output: "l"


// let str = 'leetltcode'
// let a = str.split('')
// let ans = []
// let ans1 = []
// a.map((b) => {
//     if (!ans.includes(b)) {
//         ans.push(b)
//     } else {
//         ans1.push(b)
//     }
// })
// console.log(ans, ans1);
// for (const d of ans) {
//     if (!ans1.includes(d)) {
//         console.log(d);
//         break;
//     }
// }


// function longestPalindrome(str) {
//     let longest = "";
//     for (let i = 0; i < str.length; i++) {
//       for (let j = i + 1; j <= str.length; j++) {
//         const subStr = str.substring(i, j);
//         if (isPalindrome(subStr) && subStr.length > longest.length) {
//           longest = subStr;
//         }
//       }
//     }
//     return longest;
//   }

//   function isPalindrome(str) {
//     const reversed = str.split("").reverse().join("");
//     return str === reversed;
//   }

//   console.log(longestPalindrome("banbad")); // Output: "bab" or "aba"


// const myObj = {
//     name: 'John',
//     age: 30,
//     job: {
//       title: 'Developer',
//       salary: 50000,
//     },
//   };
//   const newObj = { ...myObj };
//   console.log(newObj);
//   myObj.job.salary = 60000;
//   console.log(newObj.job.salary);

// function f1() {
//     setTimeout(() => console.log('--f1 set timeout 1'), 0)
//     Promise.resolve().then(() => console.log("---f1 promise 1---"))
//     const promise = Promise.resolve();
//     setTimeout(() => console.log('--f1 set timeout 2'), 0)
//     console.log('---function 1---');
//     setTimeout(() => promise.then(() => console.log("---f1 set timeout 3 with promise--")), 0)
// }
// function f2() {
//     setTimeout(() => console.log('--f2 set timeout 1'), 0)
//     Promise.resolve().then(() => console.log("---f2 promise 1---"))
//     const promise = Promise.resolve();
//     setTimeout(() => console.log('--f2 set timeout 2'), 0)
//     console.log('---function 2---');
//     setTimeout(() => promise.then(() => console.log("---f2 set timeout 3 with promise--")), 0)
// }
// console.log(f1());
// console.log(f2());

// callstack[]
// taskqueue[]
// microtask[]

// let str = 'str'
// let str1 = new String('str')
// console.log(str == str1,typeof str, typeof str1);
// console.log(str === str1);


//https://www.youtube.com/watch?v=qsNxdukPc2U

// let a = [{ name: 1 }, { name: 2 }, { name: 3 }]
// console.log(a.length);

// let a = [{ a: 1, b: [{ e: 1 }, { f: 1 }] }, { a: 2, b: [{}, {}] }, { a: 1, b: [{ e: 1 }, { f: 1 }] }]
// // let a = [1, 3, 5, 3, 3, 21, 6, 6]


// let ans = {}

// for (const data of a) {
//     console.log(data.a);
//     // console.log(data.b);
//     if (!ans[data.a]) {
//         console.log("--in--");
//         ans[data.a] = data
//     } else {
//         console.log("----", ans[data.a]);
//         console.log("--data[b]---", data.b);
//         console.log("---ans['1'].b----", ans['1'].b);
//         ans['1']['b'] = [...ans['1']['b'], ...data.b]

//     }
// }
// console.log(ans['1'].b);


// let b = new Set(a)
// console.log([...new Set(a)]);


// const orders = [
//     { id: 1, products: ['Apple', 'Banana', 'Orange'], total: 50 },
//     { id: 2, products: ['Milk', 'Bread'], total: 20 },
//     { id: 3, products: ['Chicken', 'Rice', 'Vegetables'], total: 70 },
//     { id: 4, products: ['Pizza'], total: 30 },
//   ];

//   const orderSummary = orders.reduce((summary, order) => {
//     console.log("🚀 ~ file: test.js:1121 ~ orderSummary ~ summary:", summary)

//     const { products, total } = order;
//     console.log("🚀 ~ file: test.js:1140 ~ orderSummary ~ products:", products)
//     console.log("🚀 ~ file: test.js:1124 ~ orderSummary ~ total:", total)


//     const productCount = products.length;
//     console.log("🚀 ~ file: test.js:1137 ~ orderSummary ~ productCount:", productCount)
//     const totalPrice = summary.totalPrice + total;
//     console.log("🚀 ~ file: test.js:1140 ~ orderSummary ~ totalPrice:", totalPrice)
//     const averagePrice = totalPrice / (summary.orderCount + 1);
//     console.log("🚀 ~ file: test.js:1133 ~ orderSummary ~ averagePrice:", averagePrice)

//     return {
//       orderCount: summary.orderCount + 1,
//       productCount: summary.productCount + productCount,
//       totalPrice,
//       averagePrice,
//     };
//   }, { orderCount: 0, productCount: 0, totalPrice: 0, averagePrice: 0 });

//   console.log(orderSummary);

// let b = { add: 20 }
// const a = { name: 'abc', age: 20, acc: 'hdjsf' }

// Object.keys(a).map((ele) => {
//   console.log("--b--",b,ele);
//   const c = b[ele]
//   console.log(c);
//   // console.log("--ele---", a[ele]);
// })


// const names = ['dhara', 'vidhi', 'devangi', 'shivani', 'roshni', 'mamta'];

// // Generate a random index within the range of the array length
// const randomIndex = Math.floor(Math.random() * names.length);
// console.log("randomIndex:", randomIndex)
// console.log("names.length:", names.length)

// // Get the random name using the random index
// const randomName = names[randomIndex];

// console.log(randomName);


// console.log('first')

// new Promise(resolve => resolve('resolve')).then((value)=>{
//     for(let i = 0; i<= 10**10 ; i++){
//         if(i=== 10**10) console.log(i)
//     }
// })
// console.log('second')

// let str = 'hello'

// console.log(str.split(''))
// let a = []
// for (let i = 0; i < str.length; i++) {
//     // console.log("--str--",str[i]);
//     a.push(str[i])
//     // console.log("--a--",a);
//     if (a.includes(str[i])) {
//        console.log(str[i])
//     } else {
//         console.log("--else str--",str[i]);
//     }
// }

// const charCount = {};
// for (let char of str) {
//     console.log("----------char",char);
//   charCount[char] = charCount[char] + 1 || 1;
// }
// console.log("---charCount",charCount);
// for (let char of str) {
//   if (charCount[char] === 1) {
//     console.log("--char--",char);
//     break;
//     // return char;
//   }
// }

// var a = new Person("a");
// var b = Person 
// var c = Person("c");

// function Person(fname) {
//     console.log("fname:", fname)
//     this.fname = fname;
// }

// console.log("1.", fname);   
// console.log("2.", a.fname);    
// console.log("3.", b.fname);    
// console.log("4.", c.fname);

// var foo = 1;
// function myFun(){
//   console.log(foo);
//   foo = 2;
// }
// myFun();

// var outerFunc = function (c) {
//   console.log("c:", c)
//   var a = 1;
//   var innerFunc = function (d) {
//     console.log("d:", d)

//     var b = 2;
//     var innerMostFunc = function (e) {
//       console.log("e:", e)
//       console.log("--a + b + c + d + e--", a + b + c + d + e)
//       return a + b + c + d + e;
//     }
//     return innerMostFunc;
//   }
//   return innerFunc;
// }
// console.log("---------1-------",outerFunc(3));
// console.log("---------2--------",outerFunc(3)(4));
// console.log("------------3--------",outerFunc(3)(4)(5)); 


// async function hello() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 5000)
//   });

//   let value = await promise; // wait until the promise resolves

//   return value;
// }

// hello().then(data => console.log(data));

// console.log("bar",bar)
// bar = 1;
// var f = 2
// console.log("bar:",bar,"f----",f);
// var bar;

// a()
// function a(){
//   console.log("--a first--");
// }
// a()
// var a = ()=>{
//   console.log("--b second--");
// }
// a();

// b()
// var b = ()=>{
//   console.log("--a first--");
// }
// b()
// function b(){
//   console.log("--b second--");
// }
// b();

// var v = 10;
// (() => {
//   v_3 = 35
//   console.log("--1 v_3--", v_3);
//   var v_3 = 45;
//   v_2 = 15;
//   console.log("-- v--", v);
// })();
// console.log("--1 v_2--", v_2);
// console.log("--2 v_3--", v_3);
// var v = 30

// let a = [{ a: 1, b: [{ e: 1 }, { f: 1 }] }, { a: 2, b: [{}, {}] }, { a: 1, b: [{ e: 1 }, { f: 1 }] }]
// let b = a.reduce((a, n) => {
//   if (!a[n.a]) {
//     a[n.a] = n
//   } else {
//     a[n.a].b = [...a[n.a].b, n.b]
//   }
//   return a
// }, {})
// console.log("--b--",b);


// const length = 4;
// const numbers = [];
// var i;
// for (i = 0; i < length; i++) {
//   numbers.push(i);
// }

// console.log("--numbers--",numbers); 


// const data = [
//   { name: 'John', age: 25, city: 'New York' },
//   { name: 'Alice', age: 30, city: 'London' },
//   { name: 'Bob', age: 22, city: 'Paris' },
//   { name: 'Eve', age: 35, city: 'A' },
// ];

// // Sort by name (ascending) and then city (ascending)
// data.sort((a, b) => {
//   if (a.name === b.name) {
//     return a.city.localeCompare(b.city);
//   }
//   return a.name.localeCompare(b.name);
// });

// console.log(data);

// let x = true
// setTimeout(() => {
//   x = false
// },0)
// while (x) {
//   console.log('hello')
// }


// let x = true
// let count = 0;
// setTimeout(() => {
//   x = false;
// }, 200)
// setInterval(() => {
//   if (x) {
//     console.log(count++)
//   }
// }, 100)

// let obj1 = { key: "value" };
// let obj2 = obj1;
// let obj3 = obj2;

// obj1.key = "new value";
// obj2 = { key: "another value" };
// console.log("obl1===>",obj1);
// console.log("obl2===>",obj2);
// console.log("obl3===>",obj3);

// console.log("obj1.key", obj1.key);
// console.log('obj2.key', obj2.key);
// console.log('obj3.key', obj3.key);

// const arr = [1, 2, 3, 4, 5];

// arr.forEach(function (element) {
//   console.log(element);
// });

// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;
// console.log(z);

// console.log(x == y);
// console.log(x === y);
// console.log(z === y);
// console.log(z == x);


// var x = 0;
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     x++;
//     console.log(x);
//     console.log("i-",i);
//   }, 1000);
// }

// let a = { x: 1 };
// let b = { x: 2 };
// let c = { x: 3 };
// let d = { x: 4 };
// let e = { x: 5 };
// let arr = [a, b, c, d, e];

// arr.forEach((obj) => (obj.x = obj.x * 2));

// console.log(a.x, b.x, c.x, d.x, e.x);

// const arr = [1, -2, 3, 4, -5, 6];
// const a = arr.reduce((a, c) => {
//   if (c > 0) a += c
//   return a
// }, 0)
// console.log(a);


// function removeVowels(str) {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i])) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

// // Example usage:
// const str = "This is a test string with vowels";
// console.log(removeVowels(str)); // Output: Ths s  tst strng wth vwls

// function getRandomColor() {
//   const hexChars = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += hexChars[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// // Example usage:
// console.log(getRandomColor()); // Output: e.g. '#3D5A89'

// function createCheckDigit(membershipId) {
//   let a = membershipId.split('').reduce((a, c) => {
//     return a += +c
//   }, 0)
//   if (a >= 9) {
//     return createCheckDigit(String(a))
//   }
//   return a;
// }
// console.log(createCheckDigit("55555"));

// function createCheckDigit(membershipId) {
//   let sum = membershipId.split('').reduce((a, c) => {
//     a =  a + parseInt(c);
//     return a
//   }, 0);
//   if (sum >= 10) {
//     return createCheckDigit(String(sum));
//   }
//   return sum;
// }

// console.log(createCheckDigit("55555"));


// let data = [
//   { date: '19/04/2023', time: '16:00' },
//   { date: '19/04/2023', time: '15:00' },
//   { date: '20/04/2023', time: '11:00' },
//   { date: '20/04/2023', time: '10:00' },
//   { date: '21/04/2023', time: '12:00' },
// ]
// data.sort((a, b) => {
//   // Compare only the times
//   const timeA = new Date('1970-01-01 ' + a.time);
//   const timeB = new Date('1970-01-01 ' + b.time);

//   if (timeA > timeB) return 1;
//   if (timeA < timeB) return -1;

//   return 0;
// });

// console.log(data);

// let data = [
//   { date: '19/04/2023', time: '16:00' },
//   { date: '19/04/2023', time: '15:00' },
//   { date: '20/04/2023', time: '11:00' },
//   { date: '20/04/2023', time: '10:00' },
//   { date: '21/04/2023', time: '12:00' },
// ];

// // ['16:00','15:00','17:00','10:00','11:00']

// let ans = []
// let c = []
// for (const d of data) {
//   // console.log(d);
//   if (!ans[0]) {
//     console.log("--1--");
//     ans.push(d)
//     console.log("--1 ans--", ans);
//   } else if (ans[0].date == d.date) {
//     console.log("ans[0].date = d.date:", ans[0].date = d.date)
//     console.log("--2--", d);
//     ans.push(d)
//     console.log("--2--", ans);
//   } else {
//     ans.sort((a, b) => a.time.localeCompare(b.time))
//     c.push(ans)
//     ans = []
//     ans.push(d)
//     console.log("--------------ans---------------", ans);
//     console.log("--3--");
//     console.log("--second--");
//   }
// }
// console.log("--ans--", c);

// let data = [3, 7, 1, 2, 8, 4, 5]
// let temp = [1, 2, 3, 4, 5, 6, 7, 8]

// temp.forEach(element => {
//   if (!data.includes(element)) {
//     console.log(element);
//   }
// });


// const b = 'B';
// const c = 'C';

// const data = {
//     a: true,
//     [b]: true, // dynamic property
//     [`interpolated-${c}`]: true, // dynamic property + interpolation
//     [`${b}-${c}`]: true
// }
// console.log("data:", data)

// var x = 10;

// function foo() {
//   console.log(this.x);
//   var x = 20;
// }

// foo();


// const array = [1, 2, 3, 4, 5];
// const indexToRemove = 2;
// array.splice(indexToRemove, 1);
// console.log(array);

// var fruits = ['apple', 'banana', 'orange'];

// // Add 'grape' and 'pear' after 'banana' (index 2)
// // fruits.splice(1,2, 'grape', 'pear');

// // console.log(fruits);

// fruits.map((data,i)=>{
//     console.log(fruits[i]);
// })


// hoisting
// doSomething()
// function doSomething(){
//     x = 33;
//     console.log(x);
//     var x;
//   } 
// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
// var hoistedVariable;


// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// function pandigit(x) {
//     console.log("---", typeof x);

//     a.forEach(element => {
//         console.log("element:",typeof element)
//         if (!x.toString().includes(element.toString())){
//             console.log("--in--");
//             return false
//         }   
//     });
//     return true
// }

// console.log(pandigit(12356440789));


// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// function demo(a) {
//     console.log(a);
//     // let c = [...new Set(a)]
//     // console.log(c);
//     for (const b of arr) {
//         // console.log(b);
//         if (!a.toString().includes(b.toString())) {
//             return false
//         }
//     }
//     return true
// }

// let r = demo(3444560789)
// console.log("---r---", r);


// let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = []
// let unique = []

// function uniqueNumber(x) {
//     console.log(x);
//     for (const a of x) {
//         if (!result.includes(a)) {
//             result.push(a)
//         } else {
//             unique.push(a)
//         }
//     }
//     let b = result.filter((ans) => {
//         if (!unique.includes(ans)) {
//             return ans;
//         }
//     })
//     console.log("---b---", b);
//     console.log("--r--", result);

//     console.log("--u--", unique);
// }

// uniqueNumber([5,5,2,4,4,4,9,9,1])

// function unique(d) {
//     let res = d.filter((a, i) => { return d.indexOf(a) !== i });
//     let a = d.filter((data) => { return !res.includes(data) })
//     return a
// }
// let a = unique([1, 9, 8, 8, 7, 6, 1, 6])
// console.log("--a--", a);


// function returnUnique(arr) {
//     arr.filter((num) => {
//         console.log("num:", num)
//         console.log("--arr.indexOf(num)--",arr.indexOf(num));
//         console.log("--arr.lastIndexOf(num)--",arr.lastIndexOf(num));

//         arr.indexOf(num) === arr.lastIndexOf(num)
//     });
// }

// // Example usage:
// const inputArray = [1, 9, 8, 8, 7, 6, 1, 6];
// const result = returnUnique(inputArray);
// console.log(result); // Output: [9, 7]




//sum the number in one digit

// function addNumber(x) {
//     console.log("x:", x)
//     let number = x.toString().split('')
//     let b = number.reduce((a, c) => {
//         return +a + +c;
//     }, 0)
//     if (b > 9) {
//         return addNumber(b)
//     }
//     return b
// }

// console.log("----", addNumber(1238763636555555555));


// function rootDigit(number) {
//     console.log("number:", number)
//     if (number < 10) {
//         console.log("--inside--");
//       return number;
//     }

//     let sum = 0;

//     while (number > 0) {
//       sum += number % 10;
//       number = Math.floor(number / 10);
//     }

//     return rootDigit(sum);
//   }

//   // Example usage:
//   console.log(rootDigit(1238763636555555555)); // Output: 6



// function toCamelCase(string) {
//   const arr = string.split(' ');

//   const upperCase = arr.map((x, i) => {
//     console.log("--x--",x,"--i--",i);
//     if (i === 0) return x;
//     else return x.charAt(0).toUpperCase() + x.slice(1);
//   })
//   console.log("upperCase:", upperCase)

//   return upperCase.join('');
// }
// console.log(toCamelCase('devangi kanani abc'))


// function removeDuplicates(arr) {
//   return arr.filter((x, i) => arr.indexOf(x) === i);
// }

// console.log(removeDuplicates(4,4,5,4,4,1,7,8,9,7,8,7));

// const isPalindrome = str => {
//   str = str.toLowerCase().split(' ').join('');
//   return str === str.split('').reverse().join('');
// };

// // Example usage:
// const inputString = "madam madam";
// const result = isPalindrome(inputString);
// console.log(result); 

// function calculateCharFrequency(inputString) {
//   const frequency = {};
//   for (let char of inputString) {
//     if (char.match(/[a-zA-Z]/)) {
//       char = char.toLowerCase();
//       frequency[char] = (frequency[char] || 0) + 1;
//     }
//   }
//   return frequency;
// }

// // Example usage:
// const inputString = "Hello, World!";
// const charFrequency = calculateCharFrequency(inputString);
// console.log(charFrequency);



// function bubbleSort(arr) {
//   const n = arr.length;
//   let swapped;
//   console.log("--swapped--", swapped);
//   do {
//     swapped = false;

//     for (let i = 0; i < n - 1; i++) {
//       console.log("--arr[i]--", arr[i], "----", arr[i + 1]);
//       if (arr[i] > arr[i + 1]) {
//         console.log("--inside--");
//         // Swap arr[i] and arr[i + 1]
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         console.log("--[arr[i], arr[i + 1]] --", [arr[i], arr[i + 1]]);
//         swapped = true;
//       }
//     }
//     console.log("--arr-", arr);
//   } while (swapped);
//   return arr;
// }

// // Example usage:
// const unsortedArray = [34, 64, 25, 12, 22, 11, 90];
// const sortedArray = bubbleSort(unsortedArray);
// console.log(sortedArray);



// function findNonRepeatingCharacters(inputString) {
//   return inputString.split('').filter((char, index, arr) => arr.indexOf(char) === arr.lastIndexOf(char));
// }

// // Example usage:
// const inputString = "programming";
// const result = findNonRepeatingCharacters(inputString);
// console.log(result); 


// function fibo(n) {
//     let a = 0, b = 1, fibo = [];
//     for (var i = 0; i < n; i++) {
//         fibo.push(a)
//         var temp = a + b;
//         a = b;
//         b = temp;
//     }
//     return fibo
// }
// console.log("--fibo--", fibo(10));


// function fib(n) {
//   var sequence = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     sequence[i] = sequence[i - 1] + sequence[i - 2];
//   }
//   return sequence.slice(0, n + 1);
// }
// console.log("--fib--", fib(9));


// console.log('Fibonacci Series:');
// let n1 = 0, n2 = 1, nextTerm;
// for (let i = 1; i <= 10; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }



//Write a sum method which will work properly when invoked using either syntax below.
// function sum(x) {
//   if (arguments.length == 2) {
//     return arguments[0] + arguments[1];
//   } else {
//     return function(y) { return x + y; };
//   }
// }
// console.log(sum(2,5));
// console.log(sum(2)(3))

// function sum(x, y) {
//   if (y !== undefined) {
//     return x + y;
//   } else {
//     return function(y) { return x + y; };
//   }
// }

// var d = {};

// [ 'zebra', 'horse' ].forEach(function(k) {
// 	d[k] = undefined;
// });

// console.log(d);


// var arr1 = "john".split('');
// console.log("arr1:", arr1)
// var arr2 = arr1.reverse();
// console.log("arr2:", arr2)
// var arr3 = "jones".split('');
// console.log("arr3:", arr3)
// arr2.push(arr3);
// console.log("arr2.push(arr3):", arr2.push(arr3))
// console.log("------1----",arr1,"array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("------2----",arr2,"array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// let i;
// for (let i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }


// let a = [1, 2, 3, 2, 1, 2, 3, 4, 5, 6, 7, 7, 8, 4, 9]
// let b = a.filter((data, i, arr) => arr.indexOf(data) !== i)
// let unique = [], duplicate = []
// let b = a.filter((data, i,arr) => {
//   if (a.indexOf(data) === i) {
//     unique.push(data);
//   }
//   if(arr.indexOf(data) !== i){
//     duplicate.push(data)
//   }
// })

// console.log("--u--", unique, "--d--", duplicate, b);

// const arr = [1, 2, 3, 2, 4, 2, 5, 1, 6, 7, 8, 7];
// const duplicates = arr.filter((element, index, self) => self.indexOf(element) !== index);

// console.log(duplicates);

// const arr = [1, 2, 3, 2, 4, 2, 5, 1, 6, 7, 8, 7];
// const duplicates = arr.filter((element, index) => arr.indexOf(element) !== index && arr.lastIndexOf(element) === index);

// console.log(duplicates); 


// let a = [{ name: 'abc', book: ['abc'] }, { name: 'abc', book: ['cvb'] }, { name: 'abc', book: ['asd'] }, { name: 'abc', book: ['pqr'] }]

// let b = a.reduce((a, c) => {
//   return [...a, ...c.book]
// }, [])
// console.log(b);


// function example() {
//         console.log("--", varVariable)
//         console.log("--", letVariable)
//         varVariable = "I'm a var"; // Function-scoped, hoisted
//         let letVariable = "I'm a let"; // Block-scoped, not hoisted
// }
// example();

// let a = {name:'abc',age:20,year:2023 }

// function performOperation(callback) {
//         // Some task is performed here.
//         console.log("Performing the operation...");

//         // After the task is done, call the callback function.
//         callback();
// }

// function callbackFunction() {
//         console.log("Callback function is executed.");
// }

// performOperation(callbackFunction);

// this keyword
// function doSomething() {
//         console.log(this);
// }
// doSomething();

// let a = [1,2,3,4]
// a[9] = 90
// console.log(a);

// for (let i = 1; i <= 3; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += j
//     }
//     console.log(line);
// }
// op
// *
// **
// ***

// for (let i = 1; i <= 4; i++) {
//   let line = ''
//   console.log("-i----------", i);
//   // for adding space
//   for (let space = 4 - i; space > 0; space--) {
//     // console.log('---inside 1--');
//     line += '-';
//     console.log("line:", line)
//   }
//   // console.log("--1--", line);
//   for (let j = i; j >= 1; j--) {
//     console.log("---j-------", j);
//     // console.log('---inside 2--');
//     line += j;
//   }
//   // console.log("--2--",line);
//   //for adding numbers
//   for (let k = 2; k <= i; k++) {
//     console.log("------k-------", k);
//     // console.log('---inside 3--');
//     line += k;
//   }
//   console.log(line);
// }

// op
//   1
//  212
// 32123

// for (let i = 1; i <= 3; i++) {
//     let line = ''
//     for (let space = 3 - i; space > 0; space--) {
//         line += '  ';
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         line += '* ';
//     }

//     console.log(line);
// }
// for (let i = 2; i >= 1; i--) {
//     let line = ''
//     for (let space = 3 - i; space > 0; space--) {
//         line += '  ';
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         line += '* ';
//     }
//     console.log(line);
// }
// op
//   1
//  222
// 33333
//  222
//   1 

// this for top columns


// const rows = 5;
// const columns = 8;
// for (let i = 1; i <= rows; i++) {
//     let line = i === 1 || i === rows ? '*'.repeat(columns) : '*' + ' '.repeat(columns - 2) + '*';
//     console.log(line);
// }

// const size = 5;

// for (let i = 1; i <= size; i++) {
//   let line = ' '.repeat(size - i) + '*' + ' '.repeat(2 * i - 3) + (i > 1 ? '*' : '');
//   console.log(line);
// }

// for (let i = size - 1; i >= 1; i--) {
//   let line = ' '.repeat(size - i) + '*' + ' '.repeat(2 * i - 3) + (i > 1 ? '*' : '');
//   console.log(line);
// }

// const size = 5;
// Print the top half of the pattern
// for (let i = 1; i <= size; i++) {
//   let spacesBefore = ' '.repeat(size - i);
//   let middlePart = i === 1 ? '' : ' '.repeat(2 * (i - 1) - 1) + '*';
//   let line = spacesBefore + '*' + middlePart;
//   console.log("middlePart:", middlePart)
//   console.log(line);
// }

// // Print the bottom half of the pattern
// for (let i = size - 1; i >= 1; i--) {
//   let spacesBefore = ' '.repeat(size - i);
//   let middlePart = i === 1 ? '' : ' '.repeat(2 * (i - 1) - 1) + '*';
//   let line = spacesBefore + '*' + middlePart;
//   console.log(line);
// }

// const rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let line = ' '.repeat(rows - i) + '*'.repeat(2 * i - 1);
//   console.log(line);
// }

// for (let i = rows - 1; i >= 1; i--) {
//   let line = ' '.repeat(rows - i) + '*' + ' '.repeat(2 * i - 1) + '*';
//   console.log(line);
// }

// let count = 1
// for (let i = 1; i <= 3; i++) {
//   let line = ''
//   for (let j = 1; j <= i; j++) {
//     line += count++
//   }
//   console.log(line);
// }

// const rows = 3;

// let currentNumber = 1;

// for (let i = 1; i <= rows; i++) {
//   let line = '';

//   // Add spaces
//   for (let space = rows - i; space > 0; space--) {
//     line += ' ';
//   }

//   // Add numbers
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     line += currentNumber++;
//   }

//   console.log(line);
// }

// const lines = [1, 2, 3];

// for (const lineNumber of lines) {
//   const line = String(lineNumber).repeat(lineNumber);
//   console.log(line);
// }

// const lines = [1,2,3,4,5]

// for (const d of lines) {
//   // let line = '*'.repeat(d)
//   let line = String(d).repeat(d)
//   console.log(line);
// }
// for (let i = 0; i < 5; i++) {
//     let line =  String(i).repeat('*');    
//     console.log("🚀 ~ line:", line)
//  }

// const rows = 5;
// for (let i = 1; i <= rows; i++) {
//   let line = i === 1 || i === rows ? '*'.repeat(i) : '*' + ' '.repeat(i - 2) + '*';
//   console.log(line);
// }


// let str = 'hello how are you'
// let reverse = '';
// let a = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     a += str[i]
//     reverse += str.charAt(i);
// }
// console.log("---a--", a);
// console.log(reverse);


// let arr = [2, 5, 6, 7, 3, 2, 1, 2, 4, 6, 7, 8, 98, 88, 98]
// let unique = []
// for (const a of arr) {
//     if (!unique.includes(a)) {
//         unique.push(a)
//     }
// }
// console.log("unique:", unique)


// function addUp(num) {
//   return (num * (num + 1))/2;
// }
// console.log(addUp(5))

// function swap(a, b) {
//   let temp;
//   temp = a
// 	a = b
//   b = temp
// 	return [a, b]
// }
// console.log(swap(100,200));

// function countTrue(arr) {
//   let counter = 0;
//   for (a of arr) {
//     if (a == true) {
//       counter++;
//     }
//   }
//   return counter
// }
// console.log(countTrue([true, false, false, true, false]));

// function redundant(str) {
//   return function () {
//     return str
//   }
// }

// const f1 = redundant("apple")
// console.log(f1());

// function getFirstValue(arr) {
// 	return arr[0]
// }
// console.log(getFirstValue([1, 2, 3]));

// function possibleBonus(a, b) {
//   // Calculate the absolute difference between your position and your friend's position
//   const positionDifference = Math.abs(a - b);

//   // Check if the difference is between 1 and 6 (inclusive)
//   return positionDifference >= 1 && positionDifference <= 6;
// }

// // Example usage:
// console.log(possibleBonus(5, 3)); 


// function calcAge(age) {
// 	return age * 365
// }
// console.log(calcAge(20));

// function num_of_digits(num) {
//   return String(num).length
// }
// console.log(num_of_digits(13059810311305981031));


// function addName(obj, name, value) {
//   obj[name] = value
//   return obj
// }
// console.log(addName({ piano: 500 }, "Brutus", 400));


// Generation	Male	Female
// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter


// function generation(x, y) {
//   if (x === 0) {
//     return "me!";
//   }

// const absX = Math.abs(x);
// console.log("absX:", absX)

// const relationships = {
//   m: ["son", "grandson", "great grandson"],
//   f: ["daughter", "granddaughter", "great granddaughter"]
// };

//   const generationNames = {
//     '-1': ["son", "daughter"],
//     '-2': ["grandson", "granddaughter"],
//     '-3': ["great grandson", "great granddaughter"],
//      1: ["son", "daughter"],
//      2: ["grandson", "granddaughter"],
//      3: ["great grandson", "great granddaughter"],
//   };

//   if (x < 0) {
//     return generationNames[x][y === "m" ? 0 : 1] + "father";
//   } else {
//     return generationNames[x][y === "m" ? 0 : 1];
//   }
// }

// // Examples:
// console.log(generation(2, "f")); // Output: "granddaughter"
// console.log(generation(-3, "m")); // Output: "great grandfather"
// console.log(generation(0, "f")); // Output: "daughter"



// function isShinyNumber(number) {
//   const digits = number.toString().split('').map(Number);
//   const sumOfDigits = digits.reduce((sum, digit) => sum + digit, 0);
//   return number % sumOfDigits === 0;
// }

// function findShinyNumbersInRange(start, end) {
//   const shinyNumbers = [];

//   for (let i = start; i <= end; i++) {
//     if (isShinyNumber(i)) {
//       shinyNumbers.push(i);
//     }
//   }

//   return shinyNumbers;
// }

// // Find and print shiny numbers from 1 to 100
// const shinyNumbersInRange = findShinyNumbersInRange(1, 100);
// console.log('Shiny numbers from 1 to 100:', shinyNumbersInRange);

// function isShinyNumber(num) {
//   let sum = 0;
//   let digits = num.toString().split('');

//   for (let i = 0; i < digits.length; i++) {
//     sum += parseInt(digits[i]);
//   }

//   return num % sum === 0;
// }

// function findShinyNumbers(start, end) {
//   let shinyNumbers = [];

//   for (let i = start; i <= end; i++) {
//     if (isShinyNumber(i)) {
//       shinyNumbers.push(i);
//     }
//   }

//   return shinyNumbers;
// }

// let shinyNumbers = findShinyNumbers(1, 100);
// console.log(shinyNumbers);


// function sevenBoom(arr) {
//   if (arr.join().includes('7')) {
//     return 'Boom!'
//   } else {
//     return 'there is no 7 in the array'
//   }
// }
// console.log(sevenBoom([8, 6, 33, 100]));


// function countBoomerangs(arr) {
// 	return arr.reduce((acc , e , index) => acc + (e === arr[index+2] && e!= arr[index+1]) , 0);
// }
// console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]));

// function oddishOrEvenish(num) {
//   let a = String(num).split('')
//   let sum = a.reduce((a, n) => Number(a) + Number(n), 0)
//   return sum % 2 ? 'Oddish' : 'Evenish'
// }
// console.log(oddishOrEvenish(121));


// function getDays(date1, date2) {
//   console.log("🚀 ~ file: test.js:2343 ~ getDays ~ date2:", new Date(date1).getDate())
//   console.log("🚀 ~ file: test.js:2343 ~ getDays ~ date1:", new Date(date2).getDate())
//   if (new Date(date1).getMonth() === new Date(date2).getMonth()) {
//     return new Date(date2).getDate() - new Date(date1).getDate()
//   }
// }

// function getDays(date1, date2) {
// 	return new Date(date2 - date1).getDate() - 1
// }
// console.log(getDays(new Date("December 29, 2018"), new Date("January 1, 2019")));


// function getLength(arr) {
//   return arr.flat(99).length;
// }
// console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));

// function numInStr(arr) {
// 	return arr.filter(x=>/\d/.test(x));
// }

// function numInStr(arr) {
//   return arr.filter(str => str.split('').some(char => '0123456789'.includes(char)));
// }

// console.log(numInStr(["1a", "a", "2b", "b"]));

// function combinations(items) {
//   return [...arguments].reduce((a, n) => n ? a * n : a + n, 1)
// }
// console.log(combinations(0));  

// const valueInTree = (tree, val) => tree.flat(Infinity).includes(val);
// console.log(valueInTree([3, [ 8, [ 5, null, null], null], [ 7, null, null]], 5));

// function isPositiveDominant(a) {
//   const positives = new Set(a.filter(n => n > 0));
//   const negatives = new Set(a.filter(n => n < 0));

//   return positives.size > negatives.size;
// }
// console.log(isPositiveDominant([5, 99, 832, -3, -4])); 


// let arr = [
//   {
//     type: 'login',
//     uid: 'u1',
//     timestamp: 2
//   },
//   {
//     type: 'login',
//     uid: 'u2',
//     timestamp: 1
//   },
//   {
//     type: 'logout',
//     uid: 'u2',
//     timestamp: 3
//   },
//   {
//     type: 'logout',
//     uid: 'u1',
//     timestamp: 5
//   },
//   {
//     type: 'logout',
//     uid: 'u3',
//     timestamp: 4
//   }
// ];

// function getLoggedInUsersAtTimestamp(arr) {
//   const result = {};

//   arr.forEach(({ type, uid, timestamp }) => {
//     if (type === 'login') {
//       for (let i = timestamp; i < 25; i++) {
//         result[i] = result[i] || [];
//         if (!result[i].includes(uid)) {
//           result[i].push(uid);
//         }
//       }
//     } else {
//       for (let i = timestamp + 1; i < 25; i++) {
//         result[i] = result[i] || [];
//         result[i] = result[i].filter(user => user !== uid);
//       }
//     }
//   });

//   return result;
// }

// const result = getLoggedInUsersAtTimestamp(arr);
// console.log(result);



// function getTotalPrice(groceries) {
//   return groceries.reduce((a, n) => a + (n.price * n.quantity), 0).toFixed(2)
// }
// console.log(getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.10 },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ]));

// function countLayers(rug) {
//   return new Set(rug).size
// }
// console.log(countLayers([
//   "AAAAAAAAA",
//   "ABBBBBBBA",
//   "ABBAAABBA",
//   "ABBBBBBBA",
//   "AAAAAAAAA"
// ]));


// function reverseOdd(str) {
//   console.log(str.split(" "));
//   return str.split(" ").map((w) => {console.log(w.length % 2); w.length % 2 ? [...w].reverse().join("") : w }).join(" ");
// }
// console.log(reverseOdd("One two three four"));

// function isPandigital(number) {
//   const numberStr = String(number);
//   const allDigits = '0123456789';

//   // Check if each digit from 0 to 9 appears at least once in the string
//   return allDigits.split('').every(digit => numberStr.includes(digit));
// }

// function isPandigital(num) {
// 	return new Set(num.toString().split('')).size===10
// }

// // Examples
// console.log(isPandigital(981472356891)); // true
// console.log(isPandigital(90864523148909)); // false
// console.log(isPandigital(123654789)); // false


// function getFrequencies(arr) {
//   return arr.reduce((a, n) => {
//     // if (a[n]) {
//     //   a[n]++
//     // } else {
//     //   a[n] = 1
//     // }
//     a[n] = a[n] + 1 || 1
//     return a
//   }, {})
// }
// console.log(getFrequencies([true, false, true, false, false]));


// function minSwaps(s1, s2) {
// 	return s1 .split('').filter((char,i) => char !=s2[i]).length/2;
// }
// console.log(minSwaps("1100", "1001"));  
// console.log(minSwaps("110011", "010111"));  
// console.log(minSwaps("10011001", "01100110"));

// function isDisarium(n) {
// 	let a = String(n).split('')
// 	console.log("🚀 ~ file: test.js:2512 ~ isDisarium ~ a:", a.length)
// }
// console.log(isDisarium(135));

// function isDisarium(n) {
//   let a = [...n + '']
//   console.log("🚀 ~ file: test.js:2517 ~ isDisarium ~ a:", a)
//   let b = a.reduce((a, n, i) => {
//     console.log("🚀 ~ file: test.js:2519 ~ b ~ i:", i)
//     return a + (+n) ** (i + 1)
//   }, 0)
//   console.log("🚀 ~ file: test.js:2522 ~ b ~ b:", b)
// }
// // =  => [...n+''].reduce((a,b,i) => a + (+b)**(i+1), 0) == n

// console.log("🚀 ~ file: test.js:2528 ~ a:", a)
// var a = 10

// getName()
// console.log("🚀 ~ file: test.js:2531 ~ getName:", getName)

// var getName = () => {
//   console.log("hello");
// }


// function hello() {
//   // var a = 10;
//   function c() {
//     console.log(a);
//   }
//   let a = 100
//   c()
// }
// hello()
// let b = hello()
// console.log(b);
// b()


// function hello() {
//   for (var i = 1; i < 5; i++) {
//     function demo(i){
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000)
//     }
//     demo(i)
//   }
// }
// hello()



// function a(b) {
//   console.log("-function a before------------");
//   console.log(b());
//   console.log("---------after----");
// }
// function b() {
//   return "hello"
//   // console.log("--function b--");
// }

// a(b)

// console.log('outside setTimeout1');
// setTimeout(() => {
//   console.log('inside parent1 setTimeout1');
//   setTimeout(() => {
//     console.log('inside parent2 setTimeout1');
//     setTimeout(() => {
//       console.log('inside child setTimeout');
//     }, 3000);
//     console.log('inside parent2 setTimeout2');
//   }, 2000);
//   console.log('inside parent1 setTimeout2');
// }, 1000);
// console.log('outside setTimeout2');

// for(var i=1; i<=5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }



// let print3 = async()=>{
//   return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//           console.log("3");
//           resolve();
//       },100)
//   })

// }

// let print = async () => {
//   console.log("1");
//   setTimeout(() => {
//       console.log("5");
//   }, 100);
//   return new Promise(async (resolve,reject)=>{
//       console.log("2");
//       print3();
//       resolve();
//       console.log("4");
//   })
// };

// let start=async()=>{
//  print();
//  console.log("done")
// };

// start();

// function demo(age){
//   console.log(this);
// }
// console.log(demo(11));

// function calculateChocolates(initialRupees, chocolatesPerRupee, wrappersForExtraChocolate) {
//     let chocolatesBought = Math.floor(initialRupees * chocolatesPerRupee);
//     let wrappers = chocolatesBought;

//     while (wrappers >= wrappersForExtraChocolate) {
//       const extraChocolates = Math.floor(wrappers / wrappersForExtraChocolate);
//       chocolatesBought += extraChocolates;
//       wrappers = extraChocolates + (wrappers % wrappersForExtraChocolate);
//     }

//     return chocolatesBought;
//   }

//   const initialRupees = 10;
//   const chocolatesPerRupee = 4;
//   const wrappersForExtraChocolate = 3;

//   const totalChocolates = calculateChocolates(initialRupees, chocolatesPerRupee, wrappersForExtraChocolate);

//   console.log(`With ${initialRupees} rupees, you can buy ${totalChocolates} chocolates.`);


// function bark() {
//   console.log('Woof!');
// }

// bark.animal = function() {
//   return `hello`;
// };
// console.log(bark.animal());
// bark()


// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function() {
//   return `hiiii`;
// };

// console.log(Person.getFullName());


// (() => {
//   let x, y;
//   try {
//     throw new Error();
//   } catch (e) {
//     (x = 1), (y = 2);
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();


// function getInfo(member, year) {
//   member.name = 'Lydia';
//   year = '1998';
//   return member
// }

// const person = { name: 'Sarah' };
// const birthYear = '1997';

// console.log(getInfo(person, birthYear));

// console.log(person, birthYear);


// const set = new Set([1, 1, 2, 3, 4]);

// console.log(set);

// let num = 10;

// const increaseNumber = () => num++;
// const increasePassedNumber = number => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num);


// function addToList(item, list) {
//   return list.push(item);
// }

// const result = addToList('apple', ['banana']);
// console.log(result);


// const add = () => {
//   const cache = {};
//   return num => {
//     console.log("🚀 ~ file: test.js:2744 ~ add ~ num:", num)
//     if (num in cache) {
//       return `From cache! ${cache[num]}`;
//     } else {
//       const result = num + 10;
//       cache[num] = result;
//       return `Calculated! ${result}`;
//     }
//   };
// };

// const addFunction = add();
// console.log(addFunction(10));
// console.log(addFunction(10));
// console.log(addFunction(5 * 2));

// var status = '😎';

// setTimeout(() => {
//   const status = '😍';

//   const data = {
//     status: '🥑',
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus());
//   console.log(data.getStatus.call(this));
// }, 0);

// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// let city = person.city;
// city = 'Amsterdam';

// console.log(person);

// function getName(name) {
//   const hasName = !!name
//   console.log("🚀 ~ file: test.js:2787 ~ getName ~ hasName:", hasName)
// }

// console.log(getName(undefined));

// function divideIntoParts(total, numberOfParts) {
//   const eachPart = total / numberOfParts;
//   const roundedPart = Math.round(eachPart * 100) / 100; // Round to two decimal places

//   const remaining = total - roundedPart * (numberOfParts - 1);
//   const lastPart = Math.round(remaining * 100) / 100;

//   const parts = Array.from({ length: numberOfParts - 1 }, () => roundedPart);
//   parts.push(lastPart);

//   return parts;
// }

// const total = 100;
// const numberOfParts = 9;

// const result = divideIntoParts(total, numberOfParts);
// console.log(result);


// var a = 10;
// {
//     var a = -10;
// }
// let b = a;
// {
//     let b = -20;
// }

// console.log(b)


// function fun1() {
//     function fun2() {
//         console.log(arguments);
//     }

//     fun2('c', 'd');
// }

// fun1('a', 'b');

// let obj = {
//     a: 100,
//     fun1() {
//         let a = 20;
//         let fun2 = () => {
//             console.log(this.a);
//         }
//         fun2();
//     }
// }

// obj.fun1();

// function solve(arr, rotations){
//  if(rotations == 0) return arr;
//  for(let i = 0; i < rotations; i++){
//    let element = arr.pop();
//    console.log("🚀 ~ file: test.js:2851 ~ solve ~ element:", element)
//    arr.unshift(element);
//  }
//  return arr;
// }
// solve([44, 1, 22, 111], 5);

// var a = 1;
// var b = 0;
// console.log("----------", a);
// while (a <= 3) {
//     a++;
//     console.log("**************",a);
//     b += a * 2;
//     console.log(b);
// }

// let sum = 0; 
// const a = [1, 2, 3];
// a.forEach(getSum);
// console.log(sum);
// function getSum(ele) {
//    sum += ele;
// }


// function Rotation(arr, r) {
//     if (r === 0) return arr
//     for (let index = 0; index < r; index++) {
//         const element = arr.pop();
//         arr.unshift(element)
//     }
//     return arr;
// }
// console.log(Rotation([2, 3, 4, 5], 5));

// function randomFunc() {
//     for (var i = 0; i < 2; i++) {
//         (function (i) {
//             setTimeout(() => console.log(i), 1000);
//         })(i);
//     }
// }
// randomFunc();

// var scope = "global scope";
// function check() 
// {
//     var scope = "local scope"; 
//     function f() 
//     { 
//          return scope; 
//     }
//     return f();
// }

// console.log(check());
// console.log("---strat---------");

// setImmediate(() => {
//     console.log('This will be executed in the next event loop iteration.');
// });
// setTimeout(() => {
//     console.log('This will be executed after a delay.');
// }); 
// process.nextTick(() => {
//     console.log('This will be executed every 2 seconds.');
// }); // Executes every 2 seconds (2000 milliseconds)

// console.log("------end---------");


// const cp = require('child_process')

// const op = cp.execSync('node d.js')
// console.log("🚀 ~ op:", op)

// const fs = require('fs');

// let content = ''

// let read = fs.createReadStream('text.txt')

// read.on('data', function (chunk) {
//     content += chunk;
// })

// read.on('end', function () {
//     console.log(content);
// })

// let a = "hiiiiiiiiiiiii"
// let write = fs.createWriteStream('output.txt')
// read.pipe(write)
// write.write(a)
// write.end()


//chid process
// const { exec, execFile } = require('child_process')

// exec('pwd', (error, stdout, stderr) => {
//     console.log(stdout);
// })

// execFile('./text.txt', (error, stdout, stderr) => {
//     console.log("---------",stdout);
// })


// let c=0;

// let id = setInterval(() => {
// 	console.log(c++)
// },200)

// setTimeout(() => {
// 	clearInterval(id)
// },2000)

// var employeeId = 'aq123';

// function Employee() {
// 	this.employeeId = 'bq1uy';
// }
// console.log(new Employee().employeeId);
// Employee.prototype.employeeId = 'kj182';
// Employee.prototype.JobId = '1BJKSJ';
// console.log(new Employee().JobId);
// console.log(new Employee().employeeId);


// function passWordMngr() {
// 	var password = '12345678';
// 	this.userName = 'John';
// 	return {
// 		pwd: password
// 	};
// }
// // Block End
// var userInfo = passWordMngr();
// console.log(userInfo.pwd);
// console.log(userInfo.userName);

// function myFunc() {
//     myFunc.message = 'Hi John';
//     console.log(myFunc.message);
//   }
//   console.log(myFunc());

// (function(){
// 	var numbers = [2,3,4,8,9,11,13,12,16];
// 	var even = numbers.filter(function(element, index){
// 		return element % 2 === 0; 
// 	});
// 	console.log(even);

// 	var containsDivisibleby3 = numbers.filter(function(element, index){
// 		return element % 3 === 0;
// 	});

// 	console.log(containsDivisibleby3);	
// })();

// (function(){
// 	var array = [1,2,3,4,5,1,2,3,4,5,6];
// 	console.log(array.indexOf(2));
// 	console.log(array.indexOf(4));
// 	console.log(array.indexOf(2,10));
// })();

// (function() {
// 	var objA = Object.create({
// 		foo: 'foo'
// 	});
// 	var objB = objA;
// 	objB.foo = 'bar';

// 	delete objA.foo;
// 	console.log(objA.foo);
// 	console.log(objB.foo);
// }());

// var employeeId = 'abc123';

// function foo() {
// 	employeeId = '123bcd';
// 	return;

// 	function employeeId() {}
// }
// foo();
// console.log(employeeId);


// var employeeId = 'abc123';
// function foo(){
// 	employeeId = '123bcd';
// 	return;
// }
// foo();
// console.log(employeeId);

// var arrA = [{prop1: "value of array A!!"}, {someProp: "also value of array A!"},3,4,5];
// var arrB = arrA.slice();
// arrB[0].prop1=42;
// arrB[3] = 20;
// console.log(arrA);

// let a = { name: 'abc' }
// let b = { age: 20 }

// let c = { ...a, ...b }
// let d = Object.assign(a,b)
// console.log("🚀 ~ d:", d)
// c.name = 'pqr'
// console.log(c,a);

// Non-Stop Endless Love Mashup Jukebox | 2023 | Musical Planet | Arijit Singh Jukebox | Best of 2023

// let employee = {
// 	name: "Nishant"
// };
// // Object.preventExtensions(employee);
// Object.freeze(employee); 
// // Object.seal(employee);
// employee.name = "John"; // work fine 
// delete employee.name
// employee.age = 24; 
// console.log("🚀 ~ employee:", employee)

// function buyChocalte(amount, chocolates) {
// 	let count = 0
// 	let sum = 0
// 	chocolates.forEach(element => {
// 		let a = sum + element
// 		if (element < amount && sum <= amount && a <= amount) {
// 			sum += element
// 			count++;
// 		}
// 	});
// 	return count
// }
// console.log(buyChocalte(50, [2, 45,11, 6, 111, 200, 100, 9, 45]));



// let arr = ["Angular", "React", "NodeJS", "VueJS"];
// console.log(arr.map(str => {
//     return str.split('').reverse().join('');
// }));
//Res 1: ["VueJS","NodeJS","React","Angular"]
//Res 2: ["ralugnA","tcaeR","SJedoN","SJeuV"]
//Res 3: ["SJeuV","SJedoN","tcaeR","ralugnA"]


// function bubbleSort(arr) {
//     let len = arr.length;
//     let swapped;

//     do {
//         swapped = false;
//         for (let i = 0; i < len - 1; i++) {
//             console.log("🚀 ~ bubbleSort ~ arr[i]:", arr[i])
//             console.log("🚀 ~ bubbleSort ~ arr[i + 1]:", arr[i + 1])
//             if (arr[i] > arr[i + 1]) {
//                 console.log("--inside-------------");
//                 // Swap elements if they are in the wrong order
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//         console.log("🚀 ~ bubbleSort ~ swapped:========================", swapped)
//     } while (swapped);

//     return arr;
// }

// let unsortedArray = [2, 34, 2, 24, -67, 45, 12, 22, 6, 9, 0, 3];
// let sortedArray = bubbleSort(unsortedArray.slice()); // Clone the array to avoid modifying the original

// console.log(sortedArray);




// sort number without using sort function

// let a = [2, 34, 2, 24, -67, 45, 12, 22, 6, 9, 0, 3]

// for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//         if (a[i] > a[j]) {
//             let temp = a[i]
//             a[i] = a[j];
//             a[j] = temp
//         }
//     }
//     // return a;
// }
// console.log(a);



//take one array has 30 element,take two blank array
// 1)array store element which is devided by 2
// 2)array store element which is devided by 3

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], arr1 = [], arr2 = []

// arr.forEach(element => {
//     if (element % 2 == 0) {
//         arr1.push(element)
//     }
//     if (element % 3 === 0) {
//         arr2.push(element)
//     }
// });

// console.log("--2--", arr1);
// console.log("--3--", arr2);



//store value in object
// let key = [1, 2, 3, 4, 5];
// let values = ['apple', 'banana', 'mango', 'orange', 'chicoo'];
// let obj = {};

// for (let i = 0; i < key.length; i++) {
//     obj[key[i]] = values[i]
// }
// console.log(obj);

//fibonacci series dynamically mode
// for (let i = 0; i < 10; i++) {
//     let a = 0, b = 1, c, temp;
//     c = a + b
//     // temp = 
//     console.log(c);
// }

// function demo(cb) {
//     console.log("----first---");
//     cb()
//     console.log("---last----");
// }

// function callbackFn() {
//     console.log("-----middle-------");
// }

// demo(callbackFn)

// function outer() {
//     let a = 10;
//     console.log(b);
//     function inner() {
//         var b = 20
//         console.log(a);
//     }
//     inner()
// }
// outer()

// const originalObject = {
//     name: 'John',
//     age: 30,
//     address: {
//         city: 'New York',
//         country: 'USA'
//     }
// };
// console.log("🚀 ~ originalObject:", originalObject)

// const copiedObject = Object.assign(originalObject);
// console.log("🚀 ~ copiedObject:", copiedObject)
// originalObject['name'] = 'abc'
// console.log("🚀 ~ copiedObject:", copiedObject)
// console.log("🚀 ~ originalObject:", originalObject)

// const parent = { foo: 'hello' };
// console.log("🚀 ~ parent:", parent)
// const child = Object.create(parent);
// console.log("🚀 ~ child:", child)
// delete child.foo
// console.log("🚀 ~ child:", child)
// console.log("🚀 ~ parent:", parent)

// const obj = { a: 1, b: 2, c: 3 };
// for (let key in obj) {
//     console.log(obj[key]);
// }


// const obj = { a: 1, b: 2, c: 3 };
// const values = Object.values(obj);
// console.log(values);

// const obj = { a: 1, b: 2, c: 3 };
// const values = JSON.stringify(obj);
// console.log(values);


// let a= {a:1}
// let b = {...a}
// console.log(b);
// b.a = 3
// console.log(b);
// console.log(a);

// var globalVar = 'I am global';

// function outerFunction() {
//     var outerVar = 'I am outer';

//     function innerFunction() {
//         var innerVar = 'I am inner';
//         console.log(innerVar);  // Accesses innerVar
//         console.log(outerVar);  // Accesses outerVar from the outer scope
//         console.log(globalVar); // Accesses globalVar from the global scope
//     }

//     innerFunction();
// }

// outerFunction();


// function example() {
//   const x = 10;
//   if (true) {
//     let a// This is a new variable, scoped to the block
//     let a
//     console.log(x); // Output: 20
//   }
//   console.log(x,a); // Output: 10
// }
// example()

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.map(function(number) {
//     if (number % 2 === 0) {
//         return number;
//     } 
// })

// console.log(evenNumbers);

// function foo() {
//     console.log(arguments);
// }
// foo(1, 2, 3); // Output: [1, 2, 3]

// // Arrow function
// const bar = () => console.log(...arguments); // Error: arguments is not defined
// bar(1, 2, 3);


// console.log('start')
// setTimeout(() => {
//   console.log('setTimeout')
// })
// Promise.resolve().then(() => {
//   console.log('resolve')
// })
// console.log('end')

// function demo(){

// }
// console.log(demo([3,30,34,5,9]));

// function demo(arr) {
//     // Convert array elements to strings, concatenate them, and then sort them as strings
//     let a = arr.map(String).sort((a, b) => {
//         console.log(a, b);
//         let d = (b + a) - (a + b)
//         console.log(d);
//     }).join('');
// }

// console.log(demo([10, 2])); 

// function demo(arr) {
//     // Convert array elements to strings, concatenate them, and then sort them as strings
//     return arr.map(String).sort((a, b) => (b + a) - (a + b)).join('');
// }

// console.log(demo([3, 30, 34, 5, 9]));

// let a = [3, 56, 6, 32, 3, 2, 1]

// for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//         if (a[i] > a[j]) {
//             let temp = a[i]
//             a[i] = a[j]
//             a[j] = temp
//         }
//     }
// }
// console.log(a);

// let a = [3, 56, 6, 32, 3, 2, 1];
// let len = a.length;

// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//         // console.log(a[j], "-a[i]-", a[i]);
//         // console.log("--j+1--", a[j + 1], "a[j]", a[j]);
//         if (a[j] > a[j + 1]) {
//             // Swap the elements
//             let temp = a[j];
//             a[j] = a[j + 1];
//             a[j + 1] = temp;
//         }
//     }
// }

// console.log(a);

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let unsortedArray = [1, 2, 11, 34, 22, 67, 43, 23];
// let sortedArray = bubbleSort(unsortedArray)
// console.log(sortedArray);


// let a = [1, 2, 3, 4, 5]
// let data = []

// for (let i = 0; i < a.length; i++) {
//     console.log("--", a[i]);
//     if (a[i] === 2) {
//         console.log(a[i]);
//         return;
//     }
//     console.log("****************",a[i]);
//     data.push(a[i])
// }

// console.log("------------", data);

// a.forEach((ele) => {
//     if (ele === 2) {
//         return;
//     }
//     data.push(ele)
// })

// console.log(data);

// function countCommonElements(arr1, arr2) {
//     let obj = {}
//     arr1.forEach(element => {
//         obj[element] = 0
//     });
//     let ans = Object.entries(obj)

//     let index = 0
//     arr2.forEach(element => {
//         if (index > arr1.length - 1) {
//             index = 0
//         }
//         ans[index] = [ans[index][0], ans[index][1] + 1]
//         index++
//     })
//     return Object.fromEntries(ans)
// }

// let a = [1, 2, 3, 4, 5];
// let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// let result = countCommonElements(a, b);
// console.log(result);


// function reverseAndJoin(str) {
//     // Split the input string into an array of words
//     const words = str.trim().split(/\s+/).reverse();

//     // Reverse each word within the array
//     const reversedWords = words.map(word => word.split('').reverse().join(''));

//     // Join the reversed words into a single string
//     return reversedWords.join(' ');
// }

// // Test the function with the given strings
// let a = '     hello how are you';
// let b = '    hii then and            ';
// let c = 'last and first       ten and hii';

// console.log(reverseAndJoin(a)); 
// console.log(reverseAndJoin(b)); 
// console.log(reverseAndJoin(c));

// function fact(n){
//     let factorial = 1
//     if(n === 0) return 1;
//     for (let i = 1; i <= n; i++) {
//         factorial = factorial * i
//     }
//     return factorial;
// }
// console.log(fact(5));

// function fibo(n) {
//     let a = 0, b = 1, c, f = []
//     for (let i = 1; i <= n; i++) {
//         f.push(a)
//         c = a + b
//         a = b
//         b = c
//     }
//     return f
// }
// console.log(fibo(10));

// setTimeout(() => {
//     console.log("2");
// }, 1000);

// setImmediate(()=>{
//     console.log("1");
// },1000);


// let book = [1, 2, 3, 4, 5, 6, 7]
// let student = [1, 2, 3, 4, 5]
// let obj = {}
// student.forEach(ele => {
//     obj[ele] = 0
// })
// let ans = Object.entries(obj)
// let index = 0
// book.forEach(ele => {
//     if (index > student.length - 1) {
//         index = 0
//     }
//     ans[index] = [ans[index][0], ans[index][1] + 1]
//     index++
// })
// console.log(ans);

// book = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// user = ['1', '2', '3', '4', '5']
// obj = {}

// function call(initialFlag = false) {
//     user.forEach((data) => {
//         if (book.length || initialFlag) {
//             obj[data] = obj[data] ? (obj[data] + 1) : (book.length ? 1 : 0)
//             book.shift();
//         }
//     })
//     book.length ? call() : console.log(obj)

// }
// console.log(call(true));
// console.log("🚀 ~ obj:", obj)


// let ar = [3, 33, 34, 5, 7, 9, 45];
// let ar = [10, 0, 11, 3, 1, 9, 81, 0, 3]
// let obj = {}
// let count = 0
// ar.forEach(ele => {
//     [...String(ele)].reduce((a, c) => {
//         a = +a + +c
//         obj[`1 + ${ele}`] = a
//         // count++
//         return a
//     }, 0)
// })
// console.log("🚀 ~ obj:", obj)
// let sortedData = Object.entries(obj).sort((a, b) => a[1] - b[1]).map(ele => ele[0].split('+')[1]).join('')
// console.log("🚀 ~ sortedData:", sortedData)


let array = [3, 0, 33, 34, 5, 7, 9, 5, 45, 0]

let res = array.sort((a, b) => passData(b) - passData(a));
console.log(res);

function passData(num) {
    let data = [...String(num)].reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    })
    return data
}

// function hasSquareInArray(arr) {
//     const set = new Set(arr);
//     for (let num of arr) {
//         if (set.has(num * num)) {
//             return true;
//         }
//     }
//     return false;
// }

// const input = [1, 2, 625, 4, 99, 5, 16, 25, 17, 789, 20, 6, 36, 100];
// console.log(hasSquareInArray(input));


// const heros = [
//     { name: 'Spider-Man' },
//     { name: 'Thor' },
//     { name: 'Black Panther' },
//     { name: 'Captain Marvel' },
//     { name: 'Silver Surfer' }
// ];

// let a = []
// let count = 0
// heros.forEach(ele => {
//     a.push({ id: count, hero: ele.name })
//     count++
// })
// console.log(a);


// function sum(arr, sum) {
//     console.log("🚀 ~ sum ~ arr:", arr)
//     let a = []
//     arr.forEach((element, i) => {
//         let reminder = sum - element
//         let b = [arr.indexOf(element), arr.lastIndexOf(reminder)]
//         if (!a.includes(JSON.stringify(b))) {
//             a.push(b)
//         }
//     });
//     console.log(a);
// }

// console.log(sum([3, 1, 5, 7, 5, 9], 10));

// function cleanNames(arr) {
//     let a = []
//     arr.forEach(element => {
//         a.push(element.trim())
//     });
//     console.log(a);
// }

// console.log(cleanNames([" avengers", "   captain_america", "ironman   ", " black panther   "]));

// let nums = [11, 22, 33, 46, 75, 86, 97, 98];

// // Filter even numbers and square them
// let squaredEvenNums = nums.filter(num => num % 2 === 0).map(num => num * num);
// console.log("squaredEvenNums:", squaredEvenNums);

// // Calculate the sum of nums array
// let sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log("Sum of array elements:", sum);

// function countSpacesAfterVowels(paragraph) {
//     // Convert the paragraph to lowercase to handle both lowercase and uppercase vowels
//     paragraph = paragraph.toLowerCase();

//     // Define a variable to store the count of spaces after vowels
//     let count = 0;

//     // Define an array of vowels
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     // Iterate over each character in the paragraph
//     for (let i = 0; i < paragraph.length; i++) {
//         // Check if the current character is a space and the previous character is a vowel
//         if (paragraph[i] === ' ' && vowels.includes(paragraph[i-1])) {
//             // If conditions are met, increment the count
//             count++;
//         }
//     }

//     // Return the total count of spaces after vowels
//     return count;
// }

// // Test the function
// let paragraph = "we are trainees";
// console.log(countSpacesAfterVowels(paragraph));

let a = 'hello how are you'
// let space = a.split(' ').length - 1
// console.log("🚀 ~ space:", space)
// let count = 0
// for (let i = 0; i < a.length; i++) {
//     if(a[i] === ' '){
//         count++
//     }
// }
// console.log(count);

// let obj = {}
// for (let j = 0; j < a.length; j++) {
//     if (a[j] !== ' ') {
//         obj[a[j]] = (obj[a[j]] || 0) + 1
//         // if (obj[a[j]]) {
//         //     obj[a[j]]++
//         // } else {
//         //     obj[a[j]] = 1
//         // }
//     }
// }
// console.log(obj);

// let result = Object.entries(obj).sort((a, b) => b[1] - a[1])[0]
// console.log("🚀 ~ result:", result)


// let role = 'companys'
// let permission = 'write'

// // if (role === 'Admin' || (role === 'company' && (permission === 'read' || permission === 'write'))) {
// //     console.log(true);
// //     return 1
// // }

// let result = (role === 'Admin' || (role === 'company' && (permission === 'read' || permission === 'write'))) ?? true
// console.log("🚀 ~ result:", result)

for (let i = 1; i <= 8; i++) {
    let spaces = ' '.repeat(8 - i);
    let stars = '* '.repeat(i).trim();
    console.log(spaces + stars);
}
