angular.module('app')
.factory('AlertStore',function(){
  var activityStore = [];

  function add(obj){
    activityStore.unshift(obj);
  }

  return {
    add : add,
    retrieve:function(){
      return activityStore;
    }

  };

});

