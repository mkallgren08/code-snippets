$(document).ready(function () {
  $("#temp-submit").on("click", function () {
    event.preventDefault();
    let convFunction = $("#temp-options option:selected").val()
    console.log(convFunction)

    let temp = $("#temp-input").val();
    let a;

    switch (convFunction) {
      case "CtoK":
        a = celsiusToKelvin(temp)
        break;
      case "FtoK":
        a = farenheitToKelvin(temp)
        break;
      case "CtoF":
        a = celsiusToFarenheit(temp)
        break;
      case "FtoC":
        a = farenheitToCelsius(temp)
        break;
      case "KtoC":
        a = kelvinToCelsius(temp)
        break;
      case "KtoF":
        a = kelvinToFarenheit(temp)
        break;
    }
    $("#temp-output").val(a).toFixed(2);
  });
});
