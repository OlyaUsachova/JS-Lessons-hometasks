'use strict'

/*let s = 0;

for (let i = 0; i < 3; i++) {
    s += i;
}

 */


/* var n = 5;
var preLast = 0;
var last = 1;



for (var i = 0; i < n-2; i++) {
    var newValue = preLast + last; // 2
    preLast = last; // 1
    last = newValue; // 2

    console.log(newValue);
}
*/


/* for (inizializations; condition; step) {

}
*/

/* while (condition) {
}

только когда true работает
 */

/* var i = 0;
while(i < 10){
console.log(i);
i++

var i = 9;
while(i > -1 ){
console.log(i);
i--;


 */

// массивы
/*
var m = [10, 7, 8, 9, 10];

var a = m[2]

console.log(m);
console.dir(m);

*/

/*var m = [];
var n = 10;

for (var i =0; i < n; i++) {
    m[i] = i*i;
}

console.log(m);
*/

/* var m = [0,1,2,3,4,5,6,7,8,9,];

var s = 0;

for (var i = 0; i < m.length; i++) {
    s += m[i]; // s = s + m[i]
}

console.log(s);
*/

/*var m = [0,-1,2,-3,4,5,6,-7,8,9,];

var s = 0;

for (var i = 0; i < m.length; i++) {
    if(m[i] > 0) {
        s += m[i]; // s = s + m[i]
    }
}

console.log(s);
 */

/*var m = [0,-1,2,-3,0,4,5,6,-7,8,0,9,'0'];

var s = 0;

for (var i = 0; i < m.length; i++) {
    if(m[i] == 0) {
        s++
    }
}
 */

/* var m = [0,-1,2,-3,0,4,5,6,-7,8,0,9,0];

var s = m[0];

for (var i = 0; i < m.length; i++) { //максимальное значение
    if(s < m[i]) {
        s = m[i];
    }
}
*/

var m = [0,-1,2,-3,0,4,5,6,-7,8,0,9,0];

var s = m[0];
var last = m[0];

for (var i = 0; i < m.length; i++) { //второе по величине минимальное
    if(s > m[i]) {
        last = s; // -2
        s = m[i]; // -3
    }
}


var a = 9;
var b = 3;

var c = a % b; // 0

if(a % b === 0) {
    console.log()
}





var m = [0,-1,2,-3,0,4,5,6,-7,8,0,9,0];

var s = 0;

for (var i = 0; i < m.length; i++) { //кратное двум
    if(((s > m[i] % 2) === 0) && (m[i] > 0)) {
        s += m[i];
    }
}