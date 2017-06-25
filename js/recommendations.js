$(document).ready(function(e) {
	$.getJSON('data/recommendations.json', function(data) {
		// Populate recommendations-container from json file
		$.each(data.placements, function(i, f) {
			// append title
			$('<h2>'+ f.message +'</h2>').appendTo('.recom-title');

			// Localizing currency using the country ISO code in linkURL (not all possible countries are listed)
			var firstProductUrlSubStrings = f.items[0].linkURL.split("/"),
				local = firstProductUrlSubStrings[3],
				localCurrency;
			switch(local) {
				case 'gb':
					localCurrency = '&#163;'	// UK - £
					break;
				case 'fr':
					localCurrency = '&#128;'	// FR - €
					break;
				default:
					localCurrency = '&#036;'	// ROW - $
			}

			// append products
			for (var i = 0; i < f.items.length; i++) {
				var recomProducts = '<div id="'+ f.items[i].id +'" class="recom-product"><a href="'+ f.items[i].linkURL +'"><img src="'+ f.items[i].imageURL +'"></a><div class="product-name"><a href="'+ f.items[i].linkURL +'">'+ f.items[i].name +'</a></div><div>'+ localCurrency + f.items[i].price +'</div></div>';
				$(recomProducts).appendTo('.recom-product-wrapper');
			}
		});
		// Initialize Slick carousel after recommendations-container is populted
		$('.recom-product-wrapper').slick();
	});
});