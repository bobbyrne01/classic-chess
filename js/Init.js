$(document).ready(function() {
	
	var piece = new BasePiece(1, 2, false) ;
	
	var pawn = new Pawn(3, 4, 5, true);
	
	// Create board
	var board = new Board();
	//board.setupNewGame();
	
	// Event handler for clicking squares on board
	$('body').on('mousedown', '#board td', function(e) {

		$('#debug').text("Clicked: " + $(this).children().attr('id'));
	});
});

// Set all images to draggable
$(function() {
    $('img').draggable({ containment: 'parent' });
});
