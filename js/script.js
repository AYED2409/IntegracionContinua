$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });

$('.subir').click(function(){
    $('body,html').animate({
        scrollTop:'0px'
    });
});

$(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
        $('.subir').slideDown(300);
    }else {
        $('.subir').slideUp(300);
    }
});


$(window).scroll(function(){
    if($(this).scrollTop() > 1800){
        console.log("aumentar")
        $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
            {
              duration: 1000,
              easing:'linear',
              step:function() {
                $this.text(Math.floor(this.countNum));
              },
              complete:function() {
                $this.text(this.countNum);
              }
            });
          });
    }
})


