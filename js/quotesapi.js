// window.quoteGen = {
// 	getQuote : function(callback){
// 		// $.ajax({
// 		// 	type:'GET',
// 		// 	url: 'https://favqs.com/api/qotd',
// 		// 	success: function(response){
// 		// 		console.log(response);
// 		// 	}
// 		// });
// 		this.getJSON(callback);
// 	},

// 	getJSON : function(callback){
// 		$.ajax({
// 			type:'GET',
// 			url: 'https://favqs.com/api/qotd',
// 			success: function(response){
// 				$resp = response;
// 				console.log(response);
				
// 			}
// 		});
// 	}	
// };

$(function(){
	$.ajax({
			type:'GET',
			url: 'https://favqs.com/api/qotd',
			success: function(response){
				console.log(response['quote'].body);
				console.log(response['quote'].author);
				$quote = response['quote'].body;
				$author = response['quote'].author;
				$('#quote').append('<p>'+$quote+'</p><br>'+$author);
			}
		});
});