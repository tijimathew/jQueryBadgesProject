$(function() {

  // your code will go here
  $.ajax({
  	url: 'https://www.codeschool.com/users/3594343.json',
  	dataType:'jsonp',
  	success: function(response){
  		var completedCourses = response.courses.completed;
  		for (var i = 0; i < completedCourses.length; i++) {
  			$('#badges').append('<div class="course">' + completedCourses[i].title + '</div>');
  		}
  	}
  });

});
