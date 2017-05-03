$(function() {

  // your code will go here
  $.ajax({
  	url: 'https://www.codeschool.com/users/3594343.json',
  	dataType:'jsonp',
  	success: function(response){
  		var completedCourses = response.courses.completed;
  		console.log(completedCourses[0]);
  		for (var i = 0; i < completedCourses.length; i++) {
  			$('#badges').append('<div></div>');
  			var course = $('#badges div:last-child');
  			course.addClass('course');
  			course.append('<h3>' + completedCourses[i].title +  '</h3>');
  			course.append('<img src="' + completedCourses[i].badge + '"/>');
  			course.append('<a class="btn btn-primary" href="' + completedCourses[i].url + '" target="_blank">See Course</a>');
  		}
  	}
  });

});
