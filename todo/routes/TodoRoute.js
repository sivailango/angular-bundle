(function() {
    'use strict';

    angular.module('myApp.todo')
        .config(TodoConfig);

    TodoConfig.inject = ['$stateProvider'];

    function TodoConfig($stateProvider) {

        $stateProvider
            .state('todo', {
                url: '/todo',
                templateUrl: '../todo/views/list.html',
                controller: 'TodoController',
                controllerAs: 'todoCtrl'
            });
    }

})();