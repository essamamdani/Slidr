/**
 * Created by essamamdani on 11/09/15.
 */
(function ($) {
    $.fn.slider = function (options) {

        //Setting Properties
        var setting = $.extend({
            animSpeed: 5000,
            activeClass: "active",
            fadeOutSpeed: "slow",
            fadeInSpeed: 1000

        }, options);


        //Require Variables and method
        var uList = this,
            $listItems = this.find("li"),
            activeClass = setting.activeClass;
        var runnerSlider = function () {
            if ($listItems.hasClass(activeClass)) {
                var $current = uList.find("." + activeClass);
                $listItems.removeClass(activeClass).fadeOut(setting.fadeOutSpeed).delay(setting.fadeOutSpeed);
                $current.next().addClass(activeClass).fadeIn(setting.fadeInSpeed);
            }
            if (!$listItems.hasClass(activeClass)) {
                $listItems.first().addClass(activeClass).fadeIn(setting.fadeInSpeed);
            }
        };

        //removeAll List Class of Active
        $listItems.removeClass(activeClass);
        runnerSlider();

        setInterval(function () {
            runnerSlider()
        }, setting.animSpeed);

        //return this object as it is.
        return this;
    };
}(jQuery));