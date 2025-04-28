$(document).ready(function() {
    $('#mobile-bttn').on('click', function(){
        $('#mobile-cardapio').toggleClass('active');
        $('#mobile-bttn').find(i).toggleClass('fa-x');
    });
});
function enviarMsg(event){
    event.preventDefault()
}
