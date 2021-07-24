var points = [40, 100, 1, 5, 25, 10];

points.sort(function(roo,raa){return roo-raa});

console.log( typeof( points[0] ));
//number

console.log( points );
// [ 1, 5, 10, 25, 40, 100 ]

var points1 = [40, 100, 1, 5, 25, 10];

points1.sort(function(roo,raa){return raa-roo});

console.log( points1 );