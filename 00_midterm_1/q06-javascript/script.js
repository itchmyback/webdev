function oddeven(a, b) {
    var output = {};
  
    for (var i = Number(a); i <= Number(b); i++) {
      if (i % 2 == 0) {
       output[i.toString()]  = "even";
  //      output.i.toString() = "even";
  //      console.log(i + " is even");
  //      console.log(i.toString());
      } else {
       output[i.toString()]  = "odd";
  //      output.i = "odd";
  //      console.log(i + " is odd");
      }
    } // end for
    console.log(output);
    return output;
  } // end function
  
  oddeven(1,5);