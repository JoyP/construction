
/* jshint -W069 */
/* global prompt:true */

'use strict';

var prompt = require('sync-prompt').prompt;

var Room = require('./room');
var House = require('./house');

var houses = [];

var r1 = new Room('living', 10, 12, 9, 'carpet', 'aqua');
var r2 = new Room('dining', 8, 10, 10, 'tile', 'green');
var r3 = new Room('bedroom', 9, 11, 12, 'wood', 'orange');


console.log(r1,r2,r3);

var h1 = new House('M-4', 'brick', 1993);
var h2 = new House('M-5', 'stone', 1785);
var h3 = new House('M-6', 'straw', 1832);

h1.rooms.push(r1, r2, r3);
h2.rooms.push(r1, r2, r3);
h3.rooms.push(r1, r2, r3);

houses.push(h1, h2, h3);

console.log(h1, h2, h3);

//console.log('These are the houses:',houses);

console.log('The area of room 1 is', r1.floorArea());
console.log('The cost of room 1 is', r1.cost());
console.log('The cost of room 2 is', r2.cost());
console.log('The cost of room 3 is', r3.cost());

console.log('The area of the house is',h1.floorArea());
console.log('The total cost of h1 is', h1.cost());

console.log('\n\n\n');

for(var i = 0; i < houses.length; i++){
  console.log('The area of house',i + ' is',houses[i].floorArea());
}

console.log('\n\n\n');

