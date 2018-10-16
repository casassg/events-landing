---
---

$("#email-form").submit(function(e){
    $.post("{{site.email-url}}", $("#email-form").serialize(), function(data) {
    	if(data["ok"]){
			$('#email-input').val('');
			$('#email-success').fadeIn().delay(3500).fadeOut();
    	}else{
    		$('#email-failure').fadeIn().delay(4500).fadeOut();
    	}

    });
    e.preventDefault();
})

