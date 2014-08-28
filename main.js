var $ = require('jquery');

var bootstrap = require('bootstrap');
var fancybox = require('fancybox');

$(document).ready(function(){		

	$('#load_button').on('click', function(){
		var btn = $('#loading-example-btn');
		btn.button('loading');	    
	});	

	$('a#check_fancybox').fancybox();
});
