var demoApp = angular.module('demoApp',[]);

demoApp.controller('SimpleController',function ($scope){

    $scope.customers = [
        {name:'Dave Jones', city:'Phoenix'},
        {name:'Joni Dee', city:'Racoon'},
        {name:'John Dae', city:'Seatle'},
        {name:'John Doe', city:'New York'}
    ];
});

demoApp.controller('SpicyController',function ($scope){
    $scope.spice = 'very';

    $scope.chiliSpicy = function() {
        $scope.spice = 'chili';
    };

    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };
});
demoApp.controller('greetingController',function ($scope){
    $scope.greeting = "asdasdasd asdasd";
});
