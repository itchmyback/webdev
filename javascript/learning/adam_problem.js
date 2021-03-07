var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "yonumber": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "yonumber": "0543236543",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "yonumber": "0543236543",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "yonumber": "0543236543",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

  for (var i = 0; i < contacts.length; i++) {
    // iterate through all key-value entries for contacts[i]
    for (var [key, value] of Object.entries(contacts[i])) {
      // get 4 array entries per contacts[i] because it iterates over each key in the object
      // can see from key-value per top level array entry
      console.log(contacts[i]);
      // get 1 entry per contacts[i] in list format - key and value
      // this is template literal notation
      console.log(`${key}: ${value}`);
      // this format returns the value associated with the key "number"
      // I'm not familiar with this format
      console.log(contacts[i]["number"]);
      // this returns undefined
      console.log(contacts["number"]);
      // this is a syntax error
      // console.log(contacts[]["number"]);
      // this isn't - and the return value is always Harry
      console.log(contacts[1]["firstName"]);
      // this iterates through the value of the given key, matches key-value iteration
      console.log(contacts[i][`${key}`]);
      // this notation works and makes more sense than template literation notation
      console.log(contacts[i][key]);
    }; // inner for 
  }; // outter for


function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    for (var [key, value] of Object.entries(contacts[i])) {
      if (contacts[i][`${key}`] != name) {
        return "No such contact";
      };
      if (contacts[i][prop] === undefined) {
        return "No such property";
//      }  if (value === name) {
      };
        if (value === name) {
         return contacts[i][prop];
      }; 
    }; // inner for 
  }; // outter for
  return "No such contact";
} // function

var testCase1 = lookUpProfile("Bob", "potato");
console.log(testCase1);  // Should return "No such contact"

var testCase2 = lookUpProfile("Bob", "likes");
console.log(testCase2); // Should return "No such contact"

var testCase3 = lookUpProfile("Akira", "likes");
console.log(testCase3); // Should return [ 'Pizza', 'Coding', 'Brownie Points' ]

var testCase4 = lookUpProfile("Akira", "potato");
console.log(testCase4); // Should return "No such property"

