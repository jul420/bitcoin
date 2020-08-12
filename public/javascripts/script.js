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
    $("#c11").click(function(){
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
      $("#c13").click(function(){
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
      $("#c15").click(function(){
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
    $("#c20").click(function(){
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