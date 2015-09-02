(function () {
    'use strict';

    angular
        .module('userListApp')
        .controller('UserEditCtrl', ['$scope', '$location', '$routeParams', 'User', UserEditCtrl]);

    function UserEditCtrl($scope, $location, $routeParams, User) {
        var userId = $routeParams.userId;

        User.get({userId: userId}, function (data) {
            $scope.user = data;
        });

        $scope.submit = submit;

        function submit() {
            var user = {
                user_name: $scope.user.user_name,
                email: $scope.user.email,
                enabled: $scope.user.enabled
            };

            User.update({userId: userId}, user, function () {
                $location.url('/home');
            });
        };
    }
})();