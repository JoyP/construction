
/* jshint -W069 */
/* global prompt:true */

'use strict';

function Room(name, length, width, height, floor, color){
  this.name = name;
  this.length = parseFloat(length);
  this.width = parseFloat(width);
  this.height = parseFloat(height);
  this.floor = floor;
  this.color = color;
}

Room.prototype.floorArea = function(){
  return this.length * this.width;
};

Room.prototype.wallArea = function(){
  return (this.length * this.height + this.width * this.height) * 2;
};

Room.prototype.cost = function(){
  var rate, total = 0;

  switch(this.floor){
    case 'carpet':
      rate = 15;
      break;
    case 'tile':
      rate = 12;
      break;
    case 'wood':
      rate = 10;
   }

  total += rate * this.floorArea();
  total += 0.50 * this.wallArea();

  return total;
};

module.exports = Room;

