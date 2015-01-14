$(document).ready(function() {
	/*$.get('/assets/header.html', function(data) {
		$('#wrap').append(data);
	})*/

	var splitRankings = function(RankArray) {
		var rankList = document.getElementByID('rank-list');

		for(var i=0;i<RankArray.length;i++) {
			var thumbnail = document.createElement('div'),
				img = document.createElement('img'),
				caption = document.createElement('div'),
				header = document.createElement('h3'),
				bio = document.createElement('p');

			thumbnail.className = 'thumbnail';
			img.src = RankArray[i].img;
			caption.className = 'caption';
			header.innerHTML = RankArray[i].tag + '<em>' + RankArray.name + '</em>';
			bio.innerHTML = RankArray[i].bio;

			caption.appendChild(header);
			caption.appendChild(bio);

			thumbnail.appendChild(img);
			thumbnail.appendChild(caption);

			rankList.appendChild(thumbnail);
		}
	}

	$.get('../data/ranks.json', function(data) {
		splitRankings(data.ranking);
	});
});