$("#email-form").submit(function(e){
    $.post("http://hackcu-sendgrid-capture.herokuapp.com", $("#email-form").serialize(), function(data) {
    	var j_data = JSON.parse(data);
    	if(!j_data["errors"].length){
			$('#email-input').val('');
			$('#email-success').fadeIn().delay(3500).fadeOut();
    	}else{
    		$('#email-failure').fadeIn().delay(4500).fadeOut();
    	}

    });
    e.preventDefault();
})

