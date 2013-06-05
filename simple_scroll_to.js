//
// Copyright (c) 2013 Allen Hebden
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//

/*

    Usage:

    This will make clicking on a link with a class of `scroll-to-target` scroll to the
    element specified by the `href` of that link on the current page. eg you click on:

        <a class="scroll-to-target" href="#contact">Contact</a>

    What happens is:
    1) Default link behaviour is prevented.
    2) It tries to find `$('#contact')`. If it can't, nothing happens.
    3) It scrolls the page to $('#contact').

*/
$(function() {
    // CONFIG //
    // How many pixels above the target link to land on.
    var ADDED_OFFSET   = 50;
    // Class needed on all links we want this behaviour on.
    var LINK_SELECTOR  = '.scroll-to-target';
    // Scroll animation time.
    var ANIMATION_TIME = 800;
    // What kind of animation
    var ANIMATION_TYPE = 'swing';
  
    var scroll_to_target;
    scroll_to_target = function(ev) {
        var $e, $target, offset, _ref;
        ev.preventDefault();
        $e = $(ev.target).closest(LINK_SELECTOR);
        $target = $($e.attr('href'));
        if ($target.length) {
            position = typeof $target.position === "function" ? (_ref = $target.position()) != null ? _ref.top : void 0 : void 0;
            if (position) {
                $('html,body').animate({
                    scrollTop: offset - ADDED_OFFSET
                }, ANIMATION_TIME, ANIMATION_TYPE);
            }
        }
    };
    $('body').on('click', 'a'+LINK_SELECTOR, scroll_to_target);
});
