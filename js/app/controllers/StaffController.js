function StaffController() {
  var vm = this;

  vm.name = "Matthew Staab";
  vm.email = "matthew.staab@iamatest.com";
  vm.phone = "98765432100"
}

angular
    .module('app')
    .controller('StaffController', StaffController)