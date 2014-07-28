describe('Testing MainCtrl', function() {
  var $scope = null;
  var ctrl = null;


  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();

    mockPrice = {
      getUpdatedPrice: function() {
                    return {bid: 1.3456, ask: 1.3467};
                       }
    }


    ctrl = $controller('MainCtrl', {
      $scope: $scope,
      Price: mockPrice
    });
  }));

  it('should initialize a MainCtrl obj ', function() {
    expect(ctrl).toBeDefined();
  });

  it('should initialize bid and ask prices', function() {
    expect($scope.activeCurrency).toBe('EUR/USD');
    expect($scope.current.bidPrice).toBe(1.3456);
    expect($scope.current.askPrice).toBe(1.3467);
  });




});
