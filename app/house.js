
/* jshint -W069 */
/* global prompt:true */

'use strict';

function House(name, material, year){
  this.name = name;
  this.material = material;
  this.year = parseFloat(year);
  this.rooms = [];
}


House.prototype.floorArea = function(){
  var sum = 0;
  for(var i = 0; i < this.rooms.length; i++){
    sum += this.rooms[i].floorArea();
  }
  return sum;
};

House.prototype.cost = function(){
  var sum = 0;
  for (var i = 0; i < this.rooms.length; i++){
    sum += this.rooms[i].cost();
  }
  return sum;
};

module.exports = House;

