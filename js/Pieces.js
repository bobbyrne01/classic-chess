function BasePiece(x, y, captured, team){
    this.x = x;
    this.y = y;
    this.captured = captured;
}
BasePiece.prototype.toString= function(){
    return 'BasePiece at ' + this.x + ', ' + this.y + ', ' + this.captured;
};


function Pawn(x, y, r, captured, team){
    BasePiece.call(this, x, y, captured, team); // invoke the base class's constructor function to take co-ords
    this.r = r;
}
Pawn.prototype = new BasePiece();
Pawn.prototype.toString= function(){
    return 'Pawn at ' + this.x + ', ' + this.y + ', ' + this.r + ', ' + this.captured;
};
Pawn.prototype.checkAvailableMoves = function(){
    //return 'Pawn at ' + this.x + ', ' + this.y + ', ' + this.r + ', ' + this.captured;
    
    // check square in front
    //if (this.y + 1 ===== isempty())
    
};
Pawn.prototype.move = function(x, y){
    //return 'Pawn at ' + this.x + ', ' + this.y + ', ' + this.r + ', ' + this.captured;
    this.x = x;
    this.y = y;
};


