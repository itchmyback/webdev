## Question A (50% credit): 

What does the following code do?  How can you reverse the order?

    ```
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return roo-raa});
    ```

# index.js attached as reference
# This code sorts the array of numbers, ascending. 
# To reverse the sort, switch the order of the arguments 
# eg   points.sort(function(roo,raa){return raa-roo});

## Question B (50% credit): 

What's wrong with my code below?  How would you fix it?  Would using `var pi =` help? Why or why not?

    http://jsbin.com/zugaginigu/edit?js,console

# code is
#  (function myFn(radius){
#  var boundary = Math.pow(radius, 2) * pi
#  const pi = 3.1415926;  
#    
#  if(boundary) console.log('boundary is ', boundary);
# }(20)) 

# Error is can't use pi before it's initialized, so
# pi initialization needs to come before boundary  initialization

#  (function myFn(radius){
#  const pi = 3.1415926;  
#  var boundary = Math.pow(radius, 2) * pi
#
#  if(boundary) console.log('boundary is ', boundary);
# }(20)) 
#
# "boundary is "
# 1256.63704

## Feedback
***

Correct!