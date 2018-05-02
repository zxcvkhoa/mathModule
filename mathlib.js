module.exports = function (){
    return {
        add: function(num1, num2) { 
            console.log("the sum is:", num1 + num2);
      },
        multiply: function(num1, num2) {
            console.log("the product is:", num1 * num2);
      },
        square: function(num) {
            console.log(num + "squared is:" + num*num)
      },
        random: function(num1, num2) {
            var x = Math.floor((Math.random() * num2) + num1);
            console.log("a random number between " + num1 + " and " + num2 + " is " + x)
      }
    }
  };
