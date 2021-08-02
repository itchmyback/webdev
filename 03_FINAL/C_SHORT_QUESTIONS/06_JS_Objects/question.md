# code included

Consider the following code.  What would be console logged?  Why is apple type reported incorrectly?
# Apple type is Clementine
# setting orange to apple object has orange pointing to the apple object, copy of the reference, not a copy of the object value

What would you change to address this issue (the Apple type is mis-represented in the last line below)?
# If orange were to be a copy of the apple object, any changes to orange primitive values (like 'type') would not affect apple
# So a shallow copy can be made 
# var orange = { ...apple };


    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = apple

    orange.type = 'Clementine'

    console.log('Apple type is ', apple.type)


Why does this comparison return false?  Please explain.

    var school_a = {name: 'UTexas', place: 'Austin'};
    var school_b = {name: 'UTexas', place: 'Austin'};

    console.log(school_a == school_b);   // returns false, why?
# The two objects are diffrent object and exist in different memory locations.
# Their object properties are the same, but the objects themselves are different.
# Comparing the two objects, in a simplified way, compares their memory location
# and because they are not the same object, returns false.



## Feedback
***
* 1. - Correct
* 2. - Correct