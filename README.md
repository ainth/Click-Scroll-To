## Click Scroll To v0.1

Markup:
```
<a href="#contact" class="scroll-to-target">Contact</a>
```
Initialize:
```
$('.scroll-to-target').clickScrollTo(options) 
```
Options to pass to clickScrollTo and their defaults:
```
// How many pixels above the target link to scroll on.
addedOffset: 50
// Scroll animation time.
animationTime: 800
// What kind of animation.
animationType: 'swing'
```

What happens when you click on this link now:
1. Default link behaviour is prevented.
2. It tries to find `$('#contact')`. If it can't, nothing happens.
3. It animations the page to $('#contact'). If possible it will finish `addedOffset` pixels above the element.

Other tricks:
It doesn't have to be a link. Clicking on any element will work but you'll need to put a `data-scroll-target` attribute on the element to specify the selector you want to scroll to.
