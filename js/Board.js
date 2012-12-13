function Square(x, y, empty){
    this.x = x;
    this.y = y;
    this.empty = empty;
}
Square.prototype.toString = function(){
    return 'Square at ' + this.x + ', ' + this.y + ', Empty:' + this.empty;
};


function Board(){
    
    var board = new Array(8); 
  
    for (var i = 0; i < 8; i++){
    
   		board[i] = new Array(8);
    }
    
    $(function () {

		var $tbl = $('<table border="1">').attr('id', 'board');
		var $tbody = $('<tbody>').attr('id', 'tableBody');
		
		for (var i = 0; i < 8; i++) {

			var trow = $("<tr>").attr('id', 'row' + i); // New row
			
			for (var j = 0; j < 8; j++) {
			
				board[i][j] = new Square(i, j, true);
    			//alert(board[i][j].toString());
			
				//var $square = $("<div>");
				
				var $cell = $("<td>").attr('id', 'square');
				$cell.text(board[i][j].toString());
				
				//var $cell = $("<td>").append(canvasArray[tileCount]); // Each data cell will contain a separate <canvas> element
				$cell.appendTo(trow);
			}
			
			trow.appendTo($tbody);
		}

		$tbl.append($tbody);
		$('body').append($tbl);
	});
}
