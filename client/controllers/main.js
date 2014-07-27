angular.module('app')
.controller('MainCtrl',['$scope','$interval','Price','AlertStore','$modal',function($scope,$interval,Price,AlertStore,$modal){

      $scope.current = {};

      $scope.currencies = ['EUR/USD','EUR/GBP','USD/CAD','AUD/CAD','USD/JPY'];

      $scope.refreshPrice = function(){
        var tmp = Price.getUpdatedPrice($scope.activeCurrency);
        $scope.current.bidPrice = tmp.bid;
        $scope.current.askPrice = tmp.ask;
      };

      $scope.updateActiveCurrency = function(choice){
        $scope.activeCurrency = choice;
        $scope.refreshPrice();
      };

      $scope.alertModal = function(activity,price){
        var color;

        if(activity === 'Buy'){
          className = 'buy';
        }else{
          className  = 'sell';
        }

        AlertStore.add({
          activity: activity,
          price:price,
          currency: $scope.activeCurrency,
          className:className});

        var modalInstance = $modal.open({
          templateUrl: './views/alertsPanel.html',
            size: 'sm',
            controller: 'AlertsCtrl',
        });


      };

      $scope.init = function(){
        $scope.activeCurrency = $scope.currencies[0];
        $scope.refreshPrice();
        $interval($scope.refreshPrice,15000);
      };

      $scope.init();

    }]);
