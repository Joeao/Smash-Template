$(document).ready(function() {
	var splitRankings = function(RankArray) {
		var rankList = document.getElementById('rank-list');

		for(var i=0;i<RankArray.length;i++) {
			var thumbnail = document.createElement('div'),
				img = document.createElement('img'),
				caption = document.createElement('div'),
				tag = document.createElement('h3'),
				name = document.createElement('h4'),
				bio = document.createElement('p'),
				meleeRank = document.createElement('span'),
				meleeTier = document.createElement('span');

			thumbnail.className = 'thumbnail ' + RankArray[i].meleeTier;
			img.src = '../img/players/' + RankArray[i].imgFileName;
			img.className = 'img-circle';
			caption.className = 'caption';
			meleeRank.className = 'rank';

			tag.innerHTML = RankArray[i].tag;			
			
			bio.innerHTML = RankArray[i].bio;

			meleeRank.innerHTML = RankArray[i].meleeRank;

			meleeTier.innerHTML = RankArray[i].meleeTier;

			caption.appendChild(tag);

			if(RankArray[i].name) {
				name.innerHTML = '<em>' + RankArray[i].name + '</em>';
				caption.appendChild(name);
			}

			caption.appendChild(bio);

			thumbnail.appendChild(img);
			thumbnail.appendChild(caption);
			thumbnail.appendChild(meleeRank);

			rankList.appendChild(thumbnail);
		}
	}

	$.get('../data/ranks.json', function(data) {
		splitRankings(data.ranking);
	});
});