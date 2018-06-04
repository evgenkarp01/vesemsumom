$( document ).ready(function() {
    
    
    
    $('select').each(function(){
        $(this).siblings('p').text( $(this).children('option:selected').text() );
    });
    $('select').change(function(){
        $(this).siblings('p').text( $(this).children('option:selected').text() );
    });

    
    
    
    $('#btn-menu').on('click', function(){
      $('body').toggleClass('open');
    });

    $(function(){
        $('[name="phone_cont"]').mask("+7(999) 999-99-99");
        $('[name="phone"]').mask("+7(999) 999-99-99");
        $('[name="phone_modal"]').mask("+7(999) 999-99-99");
    });
    
    wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 200,
            mobile: false,
            live: true
        })
    wow.init();
    
    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',
      callbacks: {
        beforeOpen: function() {
          if($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });
    
    $("a.ancLinks").click(function () { 
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;
			$('html,body').animate( { scrollTop: destination }, 400 );
			return false;
		});
    
    $(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.scrollup, .callme').fadeIn();
			}
			else {
				$('.scrollup, .callme').fadeOut();
			}
		});

		$('.scrollup').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});
    
    
    function call(ev) {
 	  var msg   = $(ev).closest('form').serialize();
        $.ajax({
          type: 'POST',
          url: '../php/send.php',
          data: msg,
          success: function(data) {
            $(ev).closest('.result').html(data);
            $(ev).slideUp('fast');
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
    }

    
    $('#btn_modal').on('click', function(){
        if(($('[name="name_modal"]').val()!='')&&($('[name="phone_modal"]').val()!='')&&($('[name="phone_modal"]').val()!='+7(___)___-__-__')){
             call(this);
           }
    });
    $('#btn_cont').on('click', function(){
        if(($('[name="name_cont"]').val()!='')&&($('[name="phone_cont"]').val()!='')&&($('[name="phone_cont"]').val()!='+7(___)___-__-__')){
             call(this);
           }
    });
    $('#btn_stock').on('click', function(){
        if(($('[name="phone"]').val()!='')&&($('[name="phone"]').val()!='+7(___)___-__-__')){
             call(this);
           }
    });
});