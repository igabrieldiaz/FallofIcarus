//labyrinth animation

   var $labyrinth = $('.labyrinth');

    $labyrinth.waypoint(function(direction) {
      if (direction == 'down'){
        $labyrinth.addClass('labyrinth-anim');
      } else {
        $labyrinth.removeClass('labyrinth-anim');{}
      }
    }, { offset: '80%'});


// sun animation
    var $sun = $('.sun');

    $sun.waypoint(function(direction) {
      if (direction == 'down'){
        $sun.addClass('sun-anim');
      } else {
        $labyrinth.removeClass('sun-anim');{}
      }
    }, { offset: '80%'});