$(document).ready(function(){
  // $('.project-content').hide();
  $('.project-data').each(function(){
    $(this).click(function(){
      $(this).parent().find('.project-content').toggleClass('show');
      console.log('click');
    });
  });

  var colors = Array('#a1a1a1', '#cccccc', '#dedede', '#f0f0f0');
  $('div,main,section,p,a,body').each(function(){
    var color = colors[Math.floor(Math.random()*colors.length)];
    $(this).css({
      'background-color': color,
    });
  });

  $('.expand-text').each(function(){
    $(this).click(function(){
      $(this).parent().find('.text-extra').toggle();
      if($(this).parent().find('.text-extra').is(":visible")){
        $(this).text('read less ↑');
        $('.dots').hide();
      }else{
        $('.dots').show();
        $(this).text('read more ↓');
      }
    });
  });

});
