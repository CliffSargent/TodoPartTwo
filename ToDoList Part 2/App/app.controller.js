"use strict;"
function TodoController() {
    const vm = this;
    vm.tasks = [
    { task: "Make Coffee", completed: false },
    { task: "Drink Coffee", completed: true },
    { task: "Smell Coffee", completed: false },
    { task: "Say nice things to people", completed: true }
  ];
  vm.add = function (task) {
    task.completed = false;
    vm.tasks.push(angular.copy(task));
    console.log(vm.tasks); 
}

vm.removeTask = function($index){
    vm.tasks.splice($index, 1);
}

}

//for completed try ng-if, ng-class, ng-click

//filter video 


angular
    .module("todoApp")
    .controller("TodoController", TodoController);