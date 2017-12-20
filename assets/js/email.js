$("#email-form").submit(function(e){
    $.post("http://hackcu-sendgrid-capture.herokuapp.com", $("#email-form").serialize(), function(data) {
    	console.log(data);
    	var j_data = JSON.parse(data);
    	console.log(j_data["new_count"]);
    	console.log(j_data["errors"]);

    	if(!j_data["errors"].length){
			$('#email-input').val('');
			$('#email-success').fadeIn().delay(3500).fadeOut();
    	}else{
    		$('#email-failure').fadeIn().delay(4500).fadeOut();
    	}

    });
    e.preventDefault();
})

