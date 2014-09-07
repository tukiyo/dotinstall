// 高機能プレイヤー時のみ動作
var document = document;
if (document.getElementsByTagName('video').length) {
	var player = document.getElementsByTagName('video')[0];
	var scroll_y = 160;
	player.play();
	player_zoom();
	window.scroll(0, scroll_y);
	
	window.addEventListener('keydown',  function(e) {
		var key_h = 72; //show help
		var key_j = 74; //volume down
		var key_k = 75; //volume up
		var key_m = 77; //volume mute
		var key_n = 78; //next
		var key_p = 80; //prev
		var key_d = 68; //done
		var key_f = 70; //play
		var key_s = 83; //pause
		var btn_controll = document.getElementsByClassName('lh24');
		var btn_next = btn_controll[get_btn_num("next")];
		var btn_prev = btn_controll[get_btn_num("prev")];
		var btn_done = btn_controll[get_btn_num("done")];
		if (e.keyCode == key_h) { alert (" h:ヘルプ\n k:音量-, j:音量+, m:ミュート切替 \n n:次へ, p:前へ\n document:完了\n f:再生, s:一時停止"); }
		if (e.keyCode == key_k) { player.volume += 0.1; }
		if (e.keyCode == key_j) { player.volume -= 0.1; }
		if (e.keyCode == key_m) { player.muted = !player.muted; }
		if (e.keyCode == key_n) { btn_next.click(); }
		if (e.keyCode == key_p) { btn_prev.click(); }
		if (e.keyCode == key_d) { btn_done.click(); }
		if (e.keyCode == key_f) { player.play(); window.scroll(0, scroll_y); }
		if (e.keyCode == key_s) { player.pause(); }
	
		//再生完了時、完了を押して次に進む。動画をシークした場合、発動されない。
		player.addEventListener("ended", function(){
			if(!btn_done.innerText.match(/完了済/)) {
				btn_done.click();
			}
			btn_next.click();
		}, false);
	
	}, false);
	
	function player_zoom() {
		document.getElementsByClassName('mt60')[0].classList.remove('container');
		document.getElementsByClassName('mt60')[0].classList.add('container-fluid');
		document.getElementById('main').classList.remove('span11');
		document.getElementById('main').classList.add('span18');
		document.getElementById('videojs_player').style.width = '960px';
		document.getElementById('videojs_player').style.height = '540px';
		if (document.getElementById('caption') !== null) {
			document.getElementById('caption').style.height = '250px';
		}
	}

	// プレミアム動画と一般動画で配列の番号が異なったため作った
	function get_btn_num(name) {
		btn = document.getElementsByClassName('lh24');
		for(var i=0; i<btn.length; i++) {
			if (btn[i].innerText.match(/前へ/) && name == "prev") { return i; }
			if (btn[i].innerText.match(/次へ/) && name == "next") { return i; }
			if (btn[i].innerText.match(/完了/) && name == "done") { return i; }
		}
	}
}
