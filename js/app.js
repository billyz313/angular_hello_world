(function () {
    var app = angular.module('myfirstapp', []);
    app.controller("headingController", function ($scope) {
        $scope.greetingMessage = "hello world!";
    });
})();
