$(document).ready(function(){

	var $memberNameInput = $('.memberNameInput');
	var $memberCityInput = $('.memberCityInput');
	var $addMembers = $('.addMembers');
	var $addCity = $('.addCity');
	var $membersList = $('#members');
	var membersListItems = $('.memberItem');

	
	
	$memberNameInput.focus();
	window.onload = sizeRows();

	$addButton = $('.addButton');
	$addButton.on('click', function(){
		$addMembers.toggle();
		$memberNameInput.focus();
	})


	$memberNameInput.keydown(function(event){
		if(event.which == 13){
			$addMembers.toggle();
			$addCity.toggle();
			console.log('keydown');
		}
	})

	$memberCityInput.keydown(function(event){
		if(event.which == 13){
			
			$addCity.toggle();

			sizeRows
		}
	})
	
	

	function sizeRows() {
		
		var listLen = $('.members').length;
		var newHeight = (100/listLen).toString() + 'vh';
		

		var i;
		var shade = 1
		for (i = 0; i < listLen; i++){
			var memberID = $('.memberItem')[i]; 
			var $item = $(memberID);
			var rgbVal = 'rgba(0,0,0,' + shade + ')';
			$item.css({'backgroundColor': rgbVal,
						'height': newHeight});

			shade -= 0.15
		}

		
	}

})