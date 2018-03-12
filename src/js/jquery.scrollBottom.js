"use strict";
( function(){

    $(function(){

        $('.scroll-bottom').each( function() {
            new ScrollBottom( $(this) );
        } );

    });

    var ScrollBottom = function(obj) {

        //private properties
        var _obj = obj,
            _scrollBtn = _obj.find('.scroll-bottom__btn'),
            _container = $('html, body');

        //private methods
        var _addEvents = function() {

                _scrollBtn.on({
                    'click': function() {
                        var way = _obj.offset().top + _obj.outerHeight(),
                            curScroll = $(window).scrollTop(),
                            scrollingTime = 500*(way - curScroll)/way;

                        _container.animate({
                            scrollTop: way
                        }, scrollingTime);
                    }
                });

            },
            _init = function() {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

} )();