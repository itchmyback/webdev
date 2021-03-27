### Question 2: 

What do the following CSS selectors select? Please provide short examples

    div + p
    div p
    div, p
    div > p
    div ~ p


### Please place your answer here:
<p>I'm First</p>
<div>
    <p>Hello</p>
    <p>There</p>
    <span>
        <p>I'm in a Span</p>
    </span>
</div>
<p>I'm Outside</p>
<div>I'm Alone</div>

1. div + p: selects <p>I'm Outside</p> -- a <p> following a <div> at the same level

2. div p: selects <p>Hello</p> <p>There</p> <p>I'm in a Span</p> -- all <p> elements inside a <div> 

3. div, p: selects all div and all p elements, everything in the example html

4. div > p: selects <p>Hello</p> and <p>There</p> -- because their parent is a div element

5. div ~ p: <p>I'm Outside</p> is preceded by a <div> element