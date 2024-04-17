$(window).on("load", function () {

  // Preload

  $("#preload").fadeOut(500);

});

jQuery(document).ready(function () {

  // About Us Progressbar

  $('.progress-1').rProgressbar({
     percentage: 80,
     fillBackgroundColor: '#F44336',
     backgroundColor: '#BDBDBD',
     borderRadius: '0px',
     height: '10px',
     width: '100%'
  });
  $('.progress-2').rProgressbar({
     percentage: 90,
     fillBackgroundColor: '#F44336',
     backgroundColor: '#BDBDBD',
     borderRadius: '0px',
     height: '10px',
     width: '100%'
  });
  $('.progress-3').rProgressbar({
     percentage: 70,
     fillBackgroundColor: '#F44336',
     backgroundColor: '#BDBDBD',
     borderRadius: '0px',
     height: '10px',
     width: '100%'
  });

  // About Us Video

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
     disableOn: 700,
     type: 'iframe',
     mainClass: 'mfp-fade',
     removalDelay: 160,
     preloader: false,
     fixedContentPos: false
  });

  // Tabs Pricing

  $('.wrapper-pricing-list a').click(function (event) {
     event.preventDefault();
  });
  $('.wrapper-pricing-list a').each(function (i) {
     $(this).attr('data-tab', 'tab' + i);
  });
  $('.wrapper-pricing-content .single-pricing-content').each(function (i) {
     $(this).attr('data-tab', 'tab' + i);
  });
  $('.wrapper-pricing-list a').on('click', function () {
     var datatab = $(this).data('tab');
     $('.wrapper-pricing-list a').removeClass('active');
     $(this).addClass('active');
     $('.wrapper-pricing-content .single-pricing-content').hide();
     $('.wrapper-pricing-content .single-pricing-content[data-tab=' + datatab + ']').fadeIn();
  });

  // Gallery 

  $('.popup-gallery').magnificPopup({
     delegate: 'a',
     type: 'image',
     tLoading: 'Loading image #%curr%...',
     mainClass: 'mfp-img-mobile',
     gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
     },
     image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
           return item.el.attr('title') + '<small></small>';
        }
     }
  });

  // Testimonials

  $('.owl-carousel').owlCarousel({
     loop: true,
     margin: 20,
     nav: false,
     dots: true,
     responsive: {
        0: {
           items: 1
        },
        700: {
           items: 2
        },
        1000: {
           items: 2
        },
        1100: {
           items: 3
        }

     }
  })

  // Popup Appointment

  $('#openpopup').click(function (event) {
     event.preventDefault();
     $('#wrapper-popup').fadeIn();
  });
  $('#closepopup').click(function (event) {
     event.preventDefault();
     $('#wrapper-popup, .res-request').fadeOut();
  });
  $("#wrapper-popup").mouseup(function (e) {
     var div = $(".popup-content");
     if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        $("#wrapper-popup, .res-request").fadeOut();
     }
  });

  // Scroll Top Button

  $('#scroll-top').click(function () {
     $('body,html').animate({
        scrollTop: 0
     }, 800);
     return false;
  });

  // Scroll Top

  $('#scroll-top').hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 50) {
        $('#scroll-top').fadeIn();
     } else {
        $('#scroll-top').fadeOut();
     }
  });

  // Scroll Menu

  $(".menu li").on("click", "a", function (event) {
     event.preventDefault();
     var id = $(this).attr('href'),
        top = $(id).offset().top;
     $('body,html').animate({
        scrollTop: top
     }, 1500);
  });
  $("#logo, .wrapper-header-content a").on("click", function (event) {
     event.preventDefault();
     var id = $(this).attr('href'),
        top = $(id).offset().top;
     $('body,html').animate({
        scrollTop: top
     }, 1500);
  });

  // Scroll Fixed Menu

  $(window).scroll(function () {
     var headerTop = $('.header-top').height();
     if ($(this).scrollTop() >= headerTop) {
        $('.header-bottom').addClass('fixed');
     } else {
        $('.header-bottom').removeClass('fixed');
     }
  });

  // Mobile Menu

  $('#openmenu').click(function (event) {
     event.preventDefault();
     $('#wrapper-menu').animate({
        'left': 0
     }, 800);
  });
  $('#closemenu').click(function (event) {
     event.preventDefault();
     $('#wrapper-menu').animate({
        'left': '-300px'
     }, 800);
  });
  $('#wrapper-menu a').on("click", function () {
     $("#wrapper-menu").animate({
        'left': '-300px'
     }, 800);
  });

  // Request Appointment Ajax

  $('#send-appointment').click(function (event) {
     event.preventDefault();
     var popupname = $('input[name="popupname"]').val();
     var popupphone = $('input[name="popupphone"]').val();
     var popupdate = $('input[name="popupdate"]').val();
     if (popupname == '' || popupphone == '' || popupdate == '') {
        $('.res-request').fadeIn().html('<span class="error">All fields must be filled.</span>');
        $('input').focus(function () {
           $('.res-request').fadeOut();
        });
     } else {
        $.ajax({
           url: '../request.php',
           type: 'POST',
           data: {
              popupname: popupname,
              popupphone: popupphone,
              popupdate: popupdate
           },
           dataType: 'html',
           success: function (data) {
              if (data == 'Send') {
                 $('.res-request').fadeIn().html('<span class="send">Thanks. We will contact you shortly.</span>');
                 $('input[name="popupname"]').val('');
                 $('input[name="popupphone"]').val('');
                 $('input[name="popupdate"]').val('');

              }
           }
        });
     }
  });

  // Contact Form Ajax

  $('#contact-send').click(function (event) {
     event.preventDefault();
     var contactname = $('input[name="contactname"]').val();
     var contactphone = $('input[name="contactphone"]').val();
     var contactemail = $('input[name="contactemail"]').val();
     var contactsubject = $('input[name="contactsubject"]').val();
     var contactmessage = $('textarea[name="contactmessage"]').val();
     if (contactname == '' || contactphone == '' || contactsubject == '' || contactmessage == '') {
        $('.res').fadeIn().html('<span class="error">All fields must be filled.</span>');
        $('input, textarea').focus(function () {
           $('.res').fadeOut();
        });
     } else {
        $.ajax({
           url: '../contact.php',
           type: 'POST',
           data: {
              contactname: contactname,
              contactphone: contactphone,
              contactemail: contactemail,
              contactsubject: contactsubject,
              contactmessage: contactmessage
           },
           dataType: 'html',
           success: function (data) {
              if (data == 'Send') {
                 $('.res').fadeIn().html('<span class="send">Thanks. We will contact you shortly.</span>');
                 $('input[name="contactname"]').val('');
                 $('input[name="contactphone"]').val('');
                 $('input[name="contactemail"]').val('');
                 $('input[name="contactsubject"]').val('');
                 $('textarea[name="contactmessage"]').val('');
              }
           }
        });
     }

  });

}); // ready