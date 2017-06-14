window.quoteGen = {
	getQuote : function(callback){
		// $.ajax({
		// 	type:'GET',
		// 	url: 'https://favqs.com/api/qotd',
		// 	success: function(response){
		// 		console.log(response);
		// 	}
		// });
		this.getJSON(callback);
	},

	getJSON : function(callback){
		$.ajax({
			type:'GET',
			url: 'https://favqs.com/api/qotd',
			success: function(response){
				console.log(response);
			}
		});
	}	
};

// $(function(){
// 	$.ajax({
// 			type:'GET',
// 			url: 'https://favqs.com/api/qotd',
// 			success: function(response){
// 				console.log(response);
// 			}
// 		});
// });