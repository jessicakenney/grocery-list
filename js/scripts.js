$(document).ready(function() {
  $("form").submit(function(event) {

    //try to let Jquery get the input type text
    //var inputIds = ["dairy", "meat"];
    //var allInputs = $(":input");
    //BINGO! gets input text inputs  and their values!!!
    var inputValues = [];
    $("form input[type=text]").each(function() {
      input = $(this);
      value = input.val();
      inputValues.push(value);
    });

    // inputIds.forEach(function(inputId){
    //   inputValue = $("input#" + inputId).val();
    //   inputValues.push(inputValue);
    // });

    //sort 2 upper
    var inputValuesUpper = (inputValues.sort()).map(function(sortedInputValue){
      return sortedInputValue.toUpperCase();
    });

    $("#list > *").show();
    inputValuesUpper.forEach(function(inputValueUpper) {
      $("#list ul").append("<li>" + inputValueUpper + "</li>");
    });

    event.preventDefault();
  });
});
