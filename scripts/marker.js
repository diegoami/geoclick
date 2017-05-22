

function Marker(id) {
    this.id = id;
}


Marker.prototype.hide = function() {
    $(this.id).css("visibility","hidden")

}

Marker.prototype.show= function() {
    $(this.id).css("visibility", "visible")
}

Marker.prototype.moveTo = function(left,top) {
    $(this.id).css("top",top)
    $(this.id).css("left",left)

    $(this.id).css("visibility", "visible");
}

Marker.prototype.arrowUp= function() {
    $(this.id).attr('src', "images/arrowup.png")
}

Marker.prototype.arrowDown= function() {
    $(this.id).attr('src', "images/arrowdown.png")
}

Marker.prototype.defaultMarker= function() {
    $(this.id).attr('src', "images/marker.png")
}

Marker.prototype.moveRoutine= function(ccx,ccy) {
    if (ccy > 50 && ccy < $(window).height()-50) {
        this.moveTo(ccx, ccy);
        this.defaultMarker()
    } else if (ccy > 50 ) {
        this.moveTo(ccx, $(window).height() - 200 );
        this.arrowDown();
    } else {
        this.moveTo(ccx, 200 );
        this.arrowUp();
    }
}
