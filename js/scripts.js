    var result;
var triangle = function(side1, side2, side3) {
  if ((side1 + side2 <= side3) || (side1 + side3 <= side2) || (side3 + side2 <= side1)) {
    result = "Not a triangle";
  } else if (side1 === side2 && side2 === side3 && side3 === side1) {
    result = "Equilateral";
  } else if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
    result = "Isosceles";
  } else if (side1 != side2 != side3) {
  result = "Scalene";
}
}

$(document).ready(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());


triangle (side1, side2, side3);

    $("#output").text(result);
  });
});
