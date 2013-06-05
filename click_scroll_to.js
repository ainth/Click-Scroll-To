//
// Click Scroll To
// @Version: 0.1
// @Website: https://github.com/ainth/Click-Scroll-To
// @Author: Allen Hebden
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
// Full documentation can be found at https://github.com/ainth/Click-Scroll-To
// or in the README file.
//
(function ( $ ) {

    var defaults = {
        // How many pixels above the target link to scroll on.
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
            var $this, $target, scrollTarget, offset, _ref;
            ev.preventDefault();
            // If you click something within the link (eg an image) we still want $e
            //  to be the link (or whatever) itself.
            $this = $(ev.target).closest(selector);
            // The selector you want to scroll to, usually href of a link
            scrollTarget = $this.data('scroll-target') || $this.attr('href');
            // $target is that which we are scrolling to.
            $target = $(scrollTarget);
            if ($target.length) {
                // Distance between the top of document and the top of the $target
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
