$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });

   
     $("#button_effects1").click(function(){
        $('#button_effects1').hide('slow');
    });

    $("#button_effects1").click(function () {
        $('#par1').toggle(1000);
    });
    $("#button_effects2").click(function () {
        $('#par2').toggle(1000);
    });
    $("#button_effects3").click(function () {
        $('#par3').toggle(1000);
    });
    $("#button_effects4").click(function () {
        $('#par4').toggle(1000);
    });
    $("#button_effects5").click(function () {
        $('#par5').toggle(1000);
    });
    $("#button_effects6").click(function () {
        $('#par6').toggle(1000);
    });
}); 