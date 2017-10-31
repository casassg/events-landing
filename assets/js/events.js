$(function(){
	var events = $('.event');

	events.each(function(i,event){
		event = $(event);
		var date = event.data('date');
		var until = event.find('.until');
		date = moment(date, "YYYY-MM-DD h:mm a");
		until.html(date.fromNow());
		if (date.isBefore(moment())){
			event.parent().addClass('past');
		}
	})
})