

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
}