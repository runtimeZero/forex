angular.module('app')
.factory('Price',function(){

  // Returns a random number with precison upto four decimal places
  function genRandomNumber() {
    var temp = Math.floor((Math.random() * 99) + 1);
    temp = temp/10000;
    return temp;
  }

  // Converts a number to a string and ensures that it has atleast 6 digits
  function fixString(num){
    num = num.toString();
    if(num.length <6) {
      num += "0";
    }else {
      num = num.slice(0,6);
    }
    return num;
  }

  var getUpdatedPrice = function(currency){
    var val1 = genRandomNumber();
    var val2 = genRandomNumber();

    // Bid must be lower than ask
    if(val1 > val2) {
      val2 = [val1, val1=val2][0];
    }

    // proving different basis for different currency requirements
    switch(currency){
      case 'EUR/USD':
        val1 += 1.34;
        val2 += 1.34;
        break;
      case 'EUR/GBP':
        val1 += 1.26;
        val2 += 1.26;
        break;
      case 'USD/CAD':
        val1 += 1.08;
        val2 += 1.08;
        break;
      case 'AUD/CAD':
        val1 += 1.01;
        val2 += 1.01;
        break;
      case 'USD/JPY':
        val1 = val1 * 100;
        val2 = val2 * 100;
        val1 += 101;
        val2 += 101;
        break;

    }

    val1= fixString(val1);
    val2 = fixString(val2);
    return {bid: val1, ask: val2};

  };


  return {
    getUpdatedPrice : getUpdatedPrice,

  };

});
