
var numbers = [5,10,15,20,25,30];
for (var index = 0; index < numbers.length; index +=1) {
  console.log(numbers[index])
}


var num = 30
for (var i=0; i<=30; i+=3) {
  console.log(i)
}

$(document).ready(function() {
    $("#numbers").submit(function(event) {
      event.preventDefault();
      var num1 = parseInt($("#num1").val());
      var num2 = parseInt($("#num2").val());
      var total = 0;
      for (var j = num2; j<=num1; j+=num2) {
      console.log(j)
      total += 1;
      };

      $("#answer").text(total);
    });
});
