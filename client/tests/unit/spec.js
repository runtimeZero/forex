describe('Testing MainCtrl', function() {
  var $scope = null;
  var ctrl = null;


  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();

    ctrl = $controller('MainCtrl', {
      $scope: $scope
    });
  }));

  it('should initialize a MainCtrl obj ', function() {
    expect(ctrl).toBeDefined();
  });

  xit('should initialize variables ', function() {
    expect($scope.variable1).toBe("One");
    expect($scope.variable2).toBe("Two");
  });




});
