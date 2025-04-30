$(document).ready(function() {
    $('#mobile-bttn').on('click', function(){
        $('#mobile-cardapio').toggleClass('active');
        $('#mobile-bttn').find(i).toggleClass('fa-x');
    });
});
    const sections = $('section');
    const navitens = $('.nav-item');

    $(window).on('scroll', function(){
        const header = $('header');
        const scrollposition = $(window).scrollTop() - header.outerHeight();

        let activeSecctionIndex = 0
       
            if(scrollposition <= 0){
                header.css('box-shadow', 'none');
            }
            else {
                header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1)');

            }
            sections.each(function(i) {
                const section = $(this)
                const sectionTop = section.offset().top - 96;
                const sectionBottom = sectionTop + section.outerHeight();
                if (scrollposition >= sectionTop && scrollposition < sectionBottom){
                    activeSecctionIndex = i;
                    return false;
                }
            })
            navitens.removeClass('active');
            $(navitens[activeSecctionIndex]).addClass ('active');
    })
function enviarMsg(event){
    event.preventDefault()
}
