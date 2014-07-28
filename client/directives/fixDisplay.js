angular.module('app')
.directive('fixDisplay',function(){
  return {
    restrict: 'E',
    scope : {
      val: '='
    },
    template:'<span class="partA">{{partA}}</span><span class="partB">{{partB}}</span>',
    link:function(scope,element,attrs){
      scope.$watch('val',function(newVal) {
        if(!newVal) { return;}
        var temp = scope.val;
        scope.partA = temp.slice(0,4);
        scope.partB = temp.slice(4,6);
      });

    },
  };
});
