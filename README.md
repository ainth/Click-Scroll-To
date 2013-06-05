Usage:

Markup:

```
<a href="#contact" class="scroll-to-target">Contact</a>
Initialize:

```
$('.scroll-to-target').clickScrollTo() 
```

What happens when you click on this link now:
1) Default link behaviour is prevented.
2) It tries to find `$('#contact')`. If it can't, nothing happens.
3) It scrolls the page to $('#contact').
