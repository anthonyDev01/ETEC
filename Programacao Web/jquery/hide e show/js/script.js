$(document).ready(function () {

  $("#show").click(function () {
    $("#elemento").show("slow");
  })

  $("#show2").click(function () {
    $("#elemento").show(2000);
  })

  $("#hide").click(function () {
    $("#elemento").hide("slow");
  })

  $("#hide2").click(function () {
    $("#elemento").hide(2000);
  })

  $("#toggle").click(function () {
    $("#elemento").toggle("slow");
  })

  $("#toggle2").click(function () {
    $("#elemento").toggle(2000);
  })


});