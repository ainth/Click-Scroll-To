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
    <a href="#contact" class="scroll-to-target">Contact</a>
    $('.scroll-to-target').clickScrollTo() 

    What happens when you click on this link now:
    1) Default link behaviour is prevented.
    2) It tries to find `$('#contact')`. If it can't, nothing happens.
    3) It scrolls the page to $('#contact').

*/
(function ( $ ) {

    var defaults = {
        // How many pixels above the target link to  on.
        addedOffset: 50,
        // Scroll animation time.
        animationTime: 800,
        // What kind of animation.
        animationType: 'swing'
    };

    $.fn.clickScrollTo = function( options ) {
        if (options == null) { options = {}; }
        options  = $.extend({}, defaults, options);
        selector = this.selector; 

        var scroll_to_target = function (ev) {
            var $e, $target, offset, _ref;
            ev.preventDefault();
            $e = $(ev.target).closest(selector);
            $target = $($e.attr('href'));
            if ($target.length) {
                offset = typeof $target.offset === "function" ? (_ref = $target.offset()) != null ? _ref.top : void 0 : void 0;
                if (offset) {
                    $('html,body').animate({
                        scrollTop: offset - options.addedOffset
                    }, options.animationTime, options.animationType);
                }
            }
        };

        this.on('click', scroll_to_target);
        return this;
    };

}(jQuery));
