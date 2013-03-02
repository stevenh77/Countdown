$(function(){
	ts = (new Date()).getTime() + 60*999;
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
		}
	});	
});