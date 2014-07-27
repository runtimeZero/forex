angular.module('app')
  .controller('AlertsCtrl',['$scope','$modalInstance','AlertStore'
      ,function($scope,$modalInstance,AlertStore){

  $scope.alerts = AlertStore.retrieve();

}])

