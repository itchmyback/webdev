var casual = require('casual');

var sentence = casual.sentence;

var city = casual.city;

console.log(`
Hello there ${casual.name}!
How was your trip to ${casual.country}?
Did you get to visit ${casual.city}?
I sure do hope you had a wonderful time.
Is your phone number still ${casual.phone}?
I will try to give you a call sometime. By the way, I want to send you a fresh loaf of bread at your address of:

${casual.address}

Well, I will see you soon. I will be visiting some time before ${casual.month}.
Until then, farewell!
`);
