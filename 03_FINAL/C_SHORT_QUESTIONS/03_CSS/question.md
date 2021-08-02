Take a look at this code snippet

https://jsbin.com/yohivodobe/edit?html,output

## Question: 

1. Why can I not set the margin-top on the span with the id "txt" ? 

2. Why can I not set the margin-top on the img with the id "pic" in the head section?

# styling for id="txt" and id="pic" is already done in the html element <style>
note to self - maybe confirm this in code later


### Feedback: 
Incorrect

* 1. This is about inline elements
* 2. The img has an inline style applied to it which is taking precedence over the id in the internal styles. - This is about specificity 
