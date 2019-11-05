// Appel de la librairie Jquery
$(function(){
  // Fonction pour changer la largeur de l'image lors d'un double click
  $('#image').dblclick(function(){
    $('#image').css('width', '500px');
  });
});
