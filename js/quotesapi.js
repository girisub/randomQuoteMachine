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
	$('#quoteGen').on('click',function(){
		$.ajax({
			type:'GET',
			url: 'https://favqs.com/api/qotd',
			success: function(response){
				console.log(response['quote'].body);
				console.log(response['quote'].author);
				$quote = response['quote'].body;
				$author = response['quote'].author;
				$('#quote').html('<p>'+$quote+'</p><br>'+$author);
			}
		});
	});
	
});