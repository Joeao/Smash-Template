// Tier list = shortcode and real value
var tierList=[{tier:"ss",visual:"SS"},{tier:"s",visual:"S"},{tier:"aplus",visual:"A+"},{tier:"aminus",visual:"A-"},{tier:"b",visual:"B"},{tier:"cplus",visual:"C+"},{tier:"c",visual:"C"},{tier:"cminus",visual:"C-"},{tier:"d",visual:"D"},{tier:"e",visual:"E"},{tier:"f",visual:"F"}]

var splitRankings = function(RankArray, game) {
	var playerList = document.getElementById('player-list');

	for(var i=0;i<RankArray.length;i++) {
		if(RankArray[i][game]) {
			// Create player thumbnail elements
			var thumbnail = document.createElement('div'),
			img = document.createElement('img'),
			caption = document.createElement('div'),
			tag = document.createElement('h3'),
			name = document.createElement('h4'),
			main = document.createElement('h5'),
			bio = document.createElement('p'),
			rank = document.createElement('span'),
			tier = document.createElement('span');

			// Attach classes
			thumbnail.className = 'thumbnail ' + RankArray[i][game].tier;
			img.className = 'img-circle';
			caption.className = 'caption';
			rank.className = 'rank';
			tier.className = 'tier';

			// Setup Image
			img.src = '../img/players/' + RankArray[i].imgFileName;
			img.onerror = function() {
				this.src = '../img/players/fallback.png';
			}

			// Loop through tiers to get visually impressive version of the tier
			for(var j=0; tierList.length;j++) {
				if(RankArray[i][game].tier == tierList[j].tier) {
					var visual = tierList[j].visual;
					break;
				}
			}

			// Put text into elements
			tag.innerHTML = RankArray[i].tag;			
			bio.innerHTML = RankArray[i].bio;
			main.innerHTML = 'Main: ' + RankArray[i][game].main;
			rank.innerHTML = RankArray[i][game].rank;
			tier.innerHTML = visual;

			// Append children to caption
			caption.appendChild(tag);
			if(RankArray[i].name) {
				name.innerHTML = '<em>' + RankArray[i].name + '</em>';
				caption.appendChild(name);
			}
			caption.appendChild(main);
			caption.appendChild(bio);

			// Append children to thumbnail
			thumbnail.appendChild(img);
			thumbnail.appendChild(caption);
			thumbnail.appendChild(rank);
			thumbnail.appendChild(tier);

			// Append thumbnail to list of players
			playerList.appendChild(thumbnail);
		}
	}
}

/**
 * Events
**/
var gameList = document.getElementById('game-list').children;

for(var i=0; i<gameList.length;i++) {
	gameList[i].onclick = function() {
		document.getElementById('player-list').innerHTML = "";

		var game = this.getAttribute('data-game'),
			request = new XMLHttpRequest();

		request.open('GET', '../data/players.json', true);

		request.onreadystatechange = function() {
			if (this.readyState === 4) {
				var data = JSON.parse(this.responseText);

				splitRankings(data.players, game);
			}
		};

		request.send();
		request = null;
	}
}
