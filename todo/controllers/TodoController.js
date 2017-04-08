(function() {
'use strict';

    angular
        .module('myApp.todo')
        .controller('TodoController', TodoController);

    TodoController.inject = [];

    function TodoController() {

        var vm = this;
        
        vm.todos = [
            { id : 1, todo: 'Leave apply'},
            { id : 2, todo: 'Timesheet'},
            { id : 3, todo: 'Shopping'},
            { id : 4, todo: 'Book Tickets'}
        ];

        vm.heading = 'My Todo list - V2';

    }

})();