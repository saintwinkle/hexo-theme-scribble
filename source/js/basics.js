$(function() {
  return $('body').keyup(function(event) {
    if (event.which === 37 && $('.paging .left > a').length) {
      return location.replace($('.paging .left >a').attr('href'));
    } else if (event.which === 39 && $('.paging .right > a').length) {
      return location.replace($('.paging .right >a').attr('href'));
    }
  });
});
