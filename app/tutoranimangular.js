var app = angular.module('app',['ngRoute','ngAnimate','ngMessages']);

//ngShow, ngHide, ngIf animation
app.controller('animationsCtrl1', function ($scope) {
    $scope.fadeAnimation = true;
});

//ngRepeat animation
app.controller('animationsCtrl2', function ($scope) {
    $scope.items = [{ name: 'Richard' }, { name: 'Bruno' }
        , { name: 'Jobson' }];
    $scope.counter = 0;
    $scope.addItem = function () {
        var name = 'Item' + $scope.counter++;
        $scope.items.push({ name: name });
    };
    $scope.removeItem = function () {
        var length = $scope.items.length;
        var indexRemoved = Math.floor(Math.random() * length);
        $scope.items.splice(indexRemoved, 1);
    };
    $scope.sortItems = function () {
        $scope.items.sort(function (a, b) { return a[name]
        < b[name] ? -1 : 1 });
    };
});

//ngView animation
//need ngRoute model and angular-route.js
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

//ngSwitch animation
app.controller('animationsCtrl3', function ($scope) {
    $scope.ngSwitchItems = ['item1', 'item2', 'item3'];
});

//ngInclude animation
app.controller('animationsCtrl4', function ($scope) {
    $scope.ngIncludeTemplates = [{ name: 'first', url:
        'first.html' }, { name: 'second', url: 'resume.html' }];
})














