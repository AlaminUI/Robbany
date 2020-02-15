let input = $(".validation input");

function disableInput(){
    for (let a = 0; a < input.length; a++) {
    input.prop("disabled", true);
}
}
 disableInput()

$(".namefield").prop("disabled", false);


$(".namefield").on("keyup", function() {
    if ($(".namefield").value == "") {
        $(".radioButton").prop("disabled", true);
          $("#submit").prop("disabled", true); 
    } else {
        $(".radioButton").prop("disabled", false);
      
    }

});


$("input[type='radio']").click(function() {
    let radioValue = $("input[name='male']:checked").val();

    if (radioValue) {
        $(".checkButton").prop("disabled", false);
    }

});

$("input[type='checkbox']").click(function() {
    let radioValue = $("input[name='check']:checked").val();

    if (radioValue) {
        $("#submit").prop("disabled", false);
    }else{
        $("#submit").prop("disabled", true); 
    }

});
