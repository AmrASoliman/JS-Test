var counter=function (arr) {
    return 'there are '+ arr.length + ' elements in this array';
};

var adder = function(a,b){
    var c=a+b
return 'the sum is '+c;
}

var pi = 3.142;

module.exports.counter = counter;
module.exports.adder=adder;
module.exports.pi=pi;
