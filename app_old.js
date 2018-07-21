//console.log('Hi all');
//setTimeout(function() {
//    console.log('3333');
//}, (3000));

//var time=0

//var Tilmer = setInterval(function(){
//time += 2;
//console.log(time + 'Secands !');
//if (time >10){
//    clearInterval(Tilmer);
//}

//},2000)

var events = require("events");
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var peaple=[james , mary , ryu];

peaple.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said ' + mssg);
            });

});


james.emit('speak',"Hi all");
mary.emit('speak',"Give my the ball");
ryu.emit('Shot', 'I am Angry');

