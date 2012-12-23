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

		var $tbl = $('<table border="1">').attr('id', 'board'),
			$tbody = $('<tbody>').attr('id', 'tableBody'),
			boardColourOdd = 0,
			boardColourEven = 1;
		
		for (var i = 0; i < 8; i++) {

			var trow = $("<tr>").attr('id', 'row' + i); // New row
			
			for (var j = 0; j < 8; j++) {
			
				board[i][j] = new Square(i, j, true);
    			//alert(board[i][j].toString());
				
				var $cell = $("<td>").attr('id', 'col' + j);
				//$cell.attr('width', '60px');
				
				
				if (boardColourEven % 2 == 0){
					
					if (boardColourOdd % 2 == 0)
						$cell.addClass("oddSquare");
					else
						$cell.addClass("evenSquare");
				}else{
					
					if (boardColourOdd % 2 == 0)
						$cell.addClass("evenSquare");
					else
						$cell.addClass("oddSquare");
				}
				
				//var $img = $("<img>").attr('src', 'images/pawnBlack.png');
				
				//$cell.append("<img src=\"\" id=\"pawnBlack0\" width=\"60px\">");
				//$img.appendTo($cell);
				$cell.text(board[i][j].toString());

				$cell.appendTo(trow);
				
				boardColourOdd++;
			}
			
			trow.appendTo($tbody);
			boardColourEven++;
		}

		$tbl.append($tbody);
		$('body').append($tbl);
	});
}
