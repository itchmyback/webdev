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