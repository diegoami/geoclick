

function HotSpotList() {
    this.hotspots = [];
}

HotSpotList.prototype.parsePointsFile = function (pointsFile) {
    this.hotspots = [];
    var that = this;
    var pointLines = pointsFile .split("\n");
    $.each(pointLines, function(index, value) {
        var hotspot = new HotSpot(value);
        if (hotspot.isDefined()) {
            that.hotspots.push(hotspot);
        } else {
            // alert("Could not parse : "+$(this));
        }
    });
    return this.hotspots;

}

HotSpotList.prototype.findHotspot = function(hotspotName) {
    for (var i = 0 ; i < this.hotspots.length; i++) {
        if (this.hotspots[i].hotspotName == hotspotName) {
            return this.hotspots[i];
        }
    }
}
