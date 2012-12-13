$(document).ready(function() {
	
	var piece = new BasePiece(1, 2, false) ;
	
	var pawn = new Pawn(3, 4, 5, true);
	var board = new Board();
});

// Set all images to draggable
$(function() {
    $('img').draggable({ containment: 'parent' });
    
});
