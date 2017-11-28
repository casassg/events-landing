$("#email-submit").click(function(){        
    $.post("http://hackcu-sendgrid-capture.herokuapp.com", $("#email-form").serialize(), function(data) {
    	$(".response-info").html(data);
    });
});