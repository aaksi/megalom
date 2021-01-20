
$(function(){
    $('.questions__accordion-title').click(function(){
        const parent = $(this).parent();
        
        if(parent.hasClass('questions__accordion-item--active')){
            parent.removeClass('questions__accordion-item--active');
        }else{
            $('.questions__accordion-item').removeClass('questions__accordion-item--active')
            parent.addClass('questions__accordion-item--active')
        }
        

    });

    $('.blog__slider').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
    });
    
    
});
