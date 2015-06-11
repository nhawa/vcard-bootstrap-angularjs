/**
 * @name firstJsAnimation
 * @desc The first sample animation function
 */
function firstJsAnimation() {
    /**
     * @name addClassAnimation
     * @desc The animation function called when a class is removed
     from the element
     * @param element - The element that will have the class
     removed
     * @param className - The name of the class that will be
     removed from the element
     * @param done - Callback function, it must be called to
     finish the animation
     */
    var addClassAnimation = function (element, className, done) {
        //Check if the class added is the one that triggers the animation
        if (className != 'animationClass') {
            return;
        }
        //Animate to slide up and then call done function
        jQuery(element).slideUp(300, done);
        // Here is the optional return function that treats completed or cancelled animations
        return function (isCancelled) {
            if (isCancelled) {
                element.stop();
            }
        };
    }
    /**
     * @name removeClassAnimation
     * @desc The animation function called when a class is
     removed from the element
     * @param element - The element that will have the
     class removed
     * @param className - The name of the class that will be
     removed from the element
     * @param done - Callback function, it must be called to
     finish the animation
     */
    var removeClassAnimation = function (element, className, done) {
        //Check if the class removed is the one that triggers the animation
        if (className != 'animationClass') {
            return;
        }
        //Animate to slide down and then call done function
        jQuery(element).slideDown(300, done);
        // Here is the optional return function that treats completed or cancelled animations
        return function (isCancelled) {
            if (isCancelled) {
                element.stop();
            }
        };
    }
    return {
        addClass: addClassAnimation,
        removeClass: removeClassAnimation
    };
}

/**
 * @name hideJsAnimation
 * @desc The ngHide sample animation function
 */
function hideJsAnimation() {
    function animateOpacity(element, done, opacity) {
        jQuery(element).animate({
            opacity: opacity,
            //height: ["toggle", "swing"]
        }, 3000, done);
    }
    /**
     * @name beforeAddClassAnimation
     * @desc The animation function called before a class is added to
     the element
     * @param element - The element that will have the class appended
     * @param className - The name of the class that will be appended
     to the element
     * @param done - Callback function, it must be called to finish the
     animation
     */
    var beforeAddClassAnimation = function (element, className, done)
    {
//Animate the opacity and style the height to display a curtain effect
        animateOpacity(element, done, 0);
// Here is the optional return function that treats completed or cancelled animations
        return function (isCancelled) {
            if (isCancelled) {
                element.stop();
            }
        };
    }
    /**
     * @name removeClassAnimation
     * @desc The animation function called when a class is removed from
     the element
     * @param element - The element that will have the class removed
     * @param className - The name of the class that will be removed
     from the element
     * @param done - Callback function, it must be called to finish the
     animation
     */
    var removeClassAnimation = function (element, className, done) {
        animateOpacity(element, done, 1);
// Here is the optional return function that treats completed or cancelled animations
        return function (isCancelled) {
            if (isCancelled) {
                element.stop();
            }
        };
    }
    return {
        beforeAddClass: beforeAddClassAnimation,
        removeClass: removeClassAnimation
    };
}

/**
 * @name ifJsAnimation
 * @desc The ngIf sample animation function
 */
function ifJsAnimation() {
    function animateOpacity(element, done, opacity) {
        jQuery(element).animate({
            opacity: opacity
        }, 3000, done);
    }
    /**
     * @name enterAnimation
     * @desc The enter animation function called when an element enters DOM
     * @param element - The element that is entering DOM
     * @param done - Callback function, it must be called to finish the animation
     */
    var enterAnimation = function (element, done) {
//Animate the opacity
        jQuery(element).css({ opacity: 0 });
        animateOpacity(element, done, 1);
// Here is the optional return function that treats completed or cancelled animations
        return function (isCancelled) {
            if (isCancelled) {
                element.stop();
            }
        };
    }
    /**
     * @name leaveAnimation
     * @desc The leave animation function called when an element leaves DOM
     * @param element - The element that is leaving DOM
     * @param done - Callback function, it must be called to finish the animation
     */
    var leaveAnimation = function (element, done) {
        animateOpacity(element, done, 0);
// Here is the optional return function that treats completed or cancelled animations
        return function (isCancelled) {
            if (isCancelled) {
                element.stop();
            }
        };
    }
    return {
        enter: enterAnimation,
        leave: leaveAnimation
    };
}

/**
 * @name repeatControllerFn
 * @desc Repeat sample controller
 */
function repeatControllerFn() {
    var rc = this;
    rc.items = [{ name: 'Adailton' }, { name: 'Claudioo' }, { name: 'Cleomar' },{ name: 'Davidd' }, { name: 'Filipe' }];
    /**
     * @name sortItems
     * @desc Sort items array
     **/
    rc.sortItems = function () {
        rc.items.sort(function (a, b) {
            return a[name] < b[name] ? -1 : 1
        });
    };
}
/**
 * @name repeatItemAnimation
 * @desc The ngRepeat sample animation function
 */
function repeatItemAnimation() {
    /**
     * @name moveAnimation
     * @desc The move animation function called when an element moves in DOM
     * @param element - The element that is moving in DOM
     * @param done - Callback function, it must be called to finish the animation
     */
    var moveAnimation = function (element, done) {
        jQuery(element).css({ opacity: 0 });
        jQuery(element).animate({
            opacity: 1
        }, 3000, done);
// Here is the optional return function that treats completed or cancelled animations
        return function (isCancelled) {
            if (isCancelled) {
                element.stop();
            }
        };
    }
    return {
        move: moveAnimation
    };
}

/**
 * @name ifJsAnimation
 * @desc The ngIf sample animation function
 */
function viewJsAnimation() {
    function animateOpacity(element, done, opacity) {
        jQuery(element).animate({
            opacity: opacity
        }, 1000, done);
    }
    /**
     * @name enterAnimation
     * @desc The enter animation function called when an element enters DOM
     * @param element - The element that is entering DOM
     * @param done - Callback function, it must be called to finish the animation
     */
    var enterAnimation = function (element, done) {
//Animate the opacity
        jQuery(element).css({ opacity: 0 });
        animateOpacity(element, done, 1);
// Here is the optional return function that treats completed or cancelled animations
        return function (isCancelled) {
            if (isCancelled) {
                element.stop();
            }
        };
    }
    /**
     * @name leaveAnimation
     * @desc The leave animation function called when an element leaves DOM
     * @param element - The element that is leaving DOM
     * @param done - Callback function, it must be called to finish the animation
     */
    var leaveAnimation = function (element, done) {
        //jQuery(element).css({ opacity: 1 });
        animateOpacity(element, done, 0);
// Here is the optional return function that treats completed or cancelled animations
        return function (isCancelled) {
            if (isCancelled) {
                element.stop();
            }
        };
    }
    return {
        enter: enterAnimation,
        leave: leaveAnimation
    };
}

var app = angular.module('app', ['ngRoute','ngAnimate'])
    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/First', {
                templateUrl: 'first.html'
            })
            .when('/Second', {
                templateUrl: 'resume.html'
            })
            .otherwise({
                redirectTo: '/First'
            });
    }]);
    app.animation(".firstJsAnimation", firstJsAnimation);
    app.animation(".hideJsAnimation", hideJsAnimation);
    app.animation(".ifJsAnimation", ifJsAnimation);
    app.animation(".viewJsAnimation", viewJsAnimation);
    app.controller("repeatController", repeatControllerFn)
    app.animation(".repeatItemAnimation", repeatItemAnimation);
