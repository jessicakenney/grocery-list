$(document).ready(function() {
  $("form").submit(function(event) {
    alert("hi");

    var inputIds = ["dairy", "meat"];
    var inputValues = [];

    inputIds.forEach(function(inputId){
      inputValue = $("input#" + inputId).val();
      alert(inputValue);
      inputValues.push(inputValue);
    });
    var sortedInputValues = inputValues.sort();
    alert(inputValues);

// need to debug from here
    var inputValuesUpper = sortedInputValues.map(function(sortedInputValue){
      inputValue.toUpperCase();
    });

    inputValuesUpper.foreach(function(inputValueUpper){
      $("#newList ul").append(inputValueUpper);
    });

    event.preventDefault();
  });
});
