Write a for loop starting from -10 and goes upto 10 and prints (console.logs) these numbers out, all on the same line.  However skip the numbers that are multiples of 3.

Output should look like ..

```
-10 -8 -7 -5 -4 -2 -1 1 2 4 5 7 8 10
```

var myStr = ""
for ( let i = -10; i <= 10; i++ ) {
//    console.log( i );
//    let myArr =  [0, 1 ,2];
    if( i % 3 != 0 ) {
        myStr = myStr.concat( " " + i.toString() );
    }
//    myStr = myStr.concat( i );
};
console.log( myStr );

# -10 -8 -7 -5 -4 -2 -1 1 2 4 5 7 8 10