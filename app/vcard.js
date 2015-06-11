//ngView animation
/**
* @name ifJsAnimation
* @desc The ngIf sample animation function
*/
function viewJsAnimation() {
    /**
     * @name enterAnimation
     * @desc The enter animation function called when an element enters DOM
     * @param element - The element that is entering DOM
     * @param done - Callback function, it must be called to finish the animation
     */
    var enterAnimation = function (element, done) {
//Animate the slidedown
        jQuery(element).slideDown(500, done);
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
        jQuery(element).slideUp(500, done);
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

var app = angular.module('app',['ngRoute','ngAnimate'])
//need ngRoute model and angular-route.js
app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/Profile', {
            templateUrl: 'profile.html',
            controller: 'active'
        })
        .when('/Resume', {
            templateUrl: 'resume.html',
            controller: 'active'
        })
        .when('/Portfolio', {
            templateUrl: 'portfolio.html',
            controller: 'active'
        })
        .when('/Contact', {
            templateUrl: 'contact.html',
            controller: 'active'
        })
        .otherwise({
            redirectTo: '/Profile',
            controller: 'active'
        });
}]);
app.animation(".viewJsAnimation", viewJsAnimation);

app.controller('active',function($scope){
    var hash =location.hash;
    if (hash=='#/Profile'){
        $('a:eq(0)').addClass('active');
        $('a:eq(1)').removeClass('active');
        $('a:eq(2)').removeClass('active');
        $('a:eq(3)').removeClass('active');
    }
    else if(hash=='#/Resume'){
        $('a:eq(0)').removeClass('active');
        $('a:eq(1)').addClass('active');
        $('a:eq(2)').removeClass('active');
        $('a:eq(3)').removeClass('active');
    }
    else if (hash=='#/Portfolio'){
        $('a:eq(0)').removeClass('active');
        $('a:eq(1)').removeClass('active');
        $('a:eq(2)').addClass('active');
        $('a:eq(3)').removeClass('active');
    }
    else{
        $('a:eq(0)').removeClass('active');
        $('a:eq(1)').removeClass('active');
        $('a:eq(2)').removeClass('active');
        $('a:eq(3)').addClass('active');
    }
});
