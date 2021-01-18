
$(function(){
    $('.questions__accordion-title').click(function(){
        const parent = $(this).parent();

        if(parent.hasClass('questions__accordion-item--active')){
            parent.removeClass('questions__accordion-item--active');
        }else{
            $('.questions__accordion-item').removeClass('questions__accordion-item--active')
            parent.addClass('questions__accordion-item--active')
        }
        
        // $(".questions__accordion-descr").show(400);   
    });
    


   

});



// $(this).parent('.questions__accordion-item').toggleClass('questions__accordion-item--active');