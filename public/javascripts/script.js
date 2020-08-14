$( document ).ready(function() {
    $('#cta2').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#c4').offset().top
          }, 500);
    })
    
    $('#cta3').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#c4').offset().top
          }, 500);
    })

    $('#f1').click(function(e){
      e.preventDefault();
      $("#viewport").show();
      $("#body").css("overflow", "hidden")
  
  })

  $('#f2').click(function(e){
    e.preventDefault();
    $("#viewport2").show();
    $("#body").css("overflow", "hidden")

})

$('#f3').click(function(e){
  e.preventDefault();
  $("#viewport3").show();
  $("#body").css("overflow", "hidden")

})

  $('#b51').click(function(e){
    e.preventDefault();
    $("#viewport").hide();
    $("#body").css("overflow", "auto")
})
$('#p51').click(function(e){
  e.preventDefault();
  $("#viewport").hide();
  $("#body").css("overflow", "auto")
})

$('#b52').click(function(e){
  e.preventDefault();
  $("#viewport2").hide();
  $("#body").css("overflow", "auto")
})
$('#p512').click(function(e){
e.preventDefault();
$("#viewport2").hide();
$("#body").css("overflow", "auto")
})

$('#b53').click(function(e){
  e.preventDefault();
  $("#viewport3").hide();
  $("#body").css("overflow", "auto")
})
$('#p513').click(function(e){
e.preventDefault();
$("#viewport3").hide();
$("#body").css("overflow", "auto")
})
  
    $("#c111").click(function(){
        $("#c12").show();
        $("#c16").show();
        $("#c14").hide();
        $("#c17").hide();
        $("#c19").hide();
        $("#c18").hide();
        $("#c21").hide();
        $("#c22").hide();
        console.log("show")
      });
    $("#c12").click(function(){
        $("#c12").hide();
        $("#c16").hide();
        console.log("hide")
      });
      $("#c113").click(function(){
        $("#c17").show();
        $("#c14").show();
        $("#c12").hide();
        $("#c16").hide();
        $("#c19").hide();
        $("#c18").hide();
        $("#c21").hide();
        $("#c22").hide();
        console.log("show")
      });
    $("#c14").click(function(){
        $("#c14").hide();
        $("#c17").hide();
        console.log("hide")
      });
      $("#c112").click(function(){
        $("#c18").show();
        $("#c19").show();
        $("#c12").hide();
        $("#c16").hide();
        $("#c14").hide();
        $("#c17").hide();
        $("#c21").hide();
        $("#c22").hide();
        console.log("show")
      });
    $("#c19").click(function(){
        $("#c19").hide();
        $("#c18").hide();
        console.log("hide")
      });
    $("#c114").click(function(){
        $("#c21").show();
        $("#c22").show();
        $("#c12").hide();
        $("#c16").hide();
        $("#c14").hide();
        $("#c17").hide();
        $("#c18").hide();
        $("#c19").hide();
        console.log("show")
      });
    $("#c22").click(function(){
        $("#c22").hide();
        $("#c21").hide();
        console.log("hide")
      });
});