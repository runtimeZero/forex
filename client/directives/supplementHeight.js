angular.module('app')
.directive('fixDisplay',function(){
  return {
    restrict: 'E',
    scope : {},
    template:'<span class="partA">{{partA}}</span><span class="partB">{{partB}}</span>',
    link:function(scope,element,attrs){
      scope.$on('valuesUpdated',function() {
        var temp = attrs.val;
        scope.partA = temp.slice(0,4);
        scope.partB = temp.slice(4,6);
      });

    },
  };
});
