$(function(){

	handleEvents = function(hide) {
		var pastEvents = $('.past')
		pastEvents.each(function(i, event) {
			event = $(event);
			if (hide) {
				event.parent().parent().hide();
			} else {
				event.parent().parent().show();
			}
		});
	};

	var events = $('.event');

	events.each(function(i, event) {
		event = $(event);
		var date = event.data('date');
		var until = event.find('.until');
		date = moment(date, "YYYY-MM-DD h:mm a");
		until.html(date.fromNow());
		if (date.isBefore(moment())){
			event.parent().addClass('past');
		}
	});

	handleEvents(true);
	$('#event-slider').on('change', function() {
		if (this.checked) {
			handleEvents(true);
		} else {
			handleEvents(false);
		}
	});


})