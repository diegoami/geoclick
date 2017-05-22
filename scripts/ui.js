
function HotspotFoundId(id) {
    this.id = id;
}


HotspotFoundId.prototype.reset = function() {
    $(this.id).html("");
}

HotspotFoundId.prototype.setValue = function(value) {
    $(this.id).html(value);
}

HotspotFoundId.prototype.value= function(value) {
    return $(this.id).html();
}