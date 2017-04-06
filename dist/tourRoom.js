class tourRoom {
	constructor(team){
		this.team = team;
		this.container = $('<div class="room"></div>');
		this.renderRoom(team);
	}
	renderRoom(team){
		var that = this;
		$('#room').find('.modal-body').empty();
		var room = $('<div class="side left_side"><ul><li>asdfasdf</li></ul></div><div class="side right_side"><ul><li>asdfasdf</li></ul></div>');
		$.each(team, function(index){
			if(index == 0){
				var side = $('<div class="side left_side"><ul></ul></div>');
			}else {
				var side = $('<div class="side right_side"><ul></ul></div>')
			}
			$.each(team[index], function(index_team, player_team){
				var player = $('<li>'+ player_team.name +'</li>');
				side.find('ul').append(player);
			})
			that.container.append(side);
			if(side.hasClass('left_side')){
				var time = 11;
				var center = $('<div class="center">Старт через <span><div class="time">'+ time +'</div> Секунд</span></div>').insertAfter(side);
				var timerId = setInterval(function() { center.find('.time').text(time); time--; }, 1000);
				setTimeout(function() {
				  clearInterval(timerId); 
				  center.text('Игра началась!');
				}, time + '000');
			}
		});
		$('#room').find('.modal-body').append(that.container);
		$('#room').modal('show') 
	}
}