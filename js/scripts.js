var leapYear = function(year) {
  if (year % 100 === 0) {
    if (year % 400 ===  0) {
      return true;
    } else {
      return false;
    }
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $("#result").hide();
    $(".not").text("");

    $(".year").text(year);
    if (!result) {
      $(".not").text("not");
    }

    $("#result").show();
    event.preventDefault();
  });
});
