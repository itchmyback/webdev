Write a JavaScript function that checks how similar are two strings, which are passed in to this function as arguments.

See example below ...

```
    This is a string
    There was string
      ^^^^^^^          <-- 7 differences
```

In the above example, the function should return 7.

Please do not look for solved problems on the web. They are too complicated and you are likely to get into rabbit holes. Think about a string as an array of characters. How would you iterate over them and compare?  What edge conditions should you check for?

Give it a try.
# file attached

# Not sure about edge cases, as the use case isn't described and all cases seem like fair game?
# Punctuation that is clearly in an incorrect position can just be assumed to be a typo.
#
# With the simplified approach of comparing two string arrays characters per index,
# there are overkill cases that could be accounted for.
#
# As an example, a single extra space in otherwise identical strings would throw the rest of the comparisons off.
#
# So for this solution, all white spaces will be removed.