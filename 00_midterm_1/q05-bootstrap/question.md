What screen sizes in name and size are supported by bootstrap?

Please describe what would be the output of the following code snippet on mobile phone and on desktop computer, when using Twitter Bootstrap?  What would you expect to see?

```
    <div class="row">
        <div class="col-xs-12 col-md-3">Ruby Red</div>
        <div class="col-xs-12 col-md-3">Navy Blue</div>
        <div class="col-xs-12 col-md-3">Lime Green</div>
        <div class="col-xs-12 col-md-3">Egg Nog</div>
    </div>
```
### Answer:
bootstrap sizes based on screen width
xs - phones, width < 768px
sm - tablets, 992px > width >= 768px
md - small laptops, 1200px > width >= 992px
lg - desktops and laptops, width >= 1200px

bootstrap output
On a mobile phone, all the div entries will stacked in a single column
On a desktop, all the div entries will be in their own column on a single row

### Feedback:
For the screen sizes part, this seems to be information from w3 schools. Unfortunately, it's outdated and uses bootstrap 3.4. Bootstrap 5 is pretty new, so we would have been OK with Bootstrap 4. I think the lesson here is to double check against different sources just in case things are out of date or plain wrong. Anyways, here are the sources to help you out with this:

[Bootstrap 5.0](https://getbootstrap.com/docs/5.0/layout/breakpoints/)
[Bootstrap 4.6](https://getbootstrap.com/docs/4.6/layout/overview/)

Totally right on the second part.