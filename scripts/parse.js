/**
 * Created with JetBrains WebStorm.
 * User: diego
 * Date: 07.10.12
 * Time: 18:36
 * To change this template use File | Settings | File Templates.
 */



var hotspots = [];

function HotSpot(lineHotSpot) {
    var pointRegExp = /([\w\.]+)\/([\w\s\'\d\-]+)\=([\d\-]+);([\d,;]+);/;

    var groups = pointRegExp.exec(lineHotSpot);
    if (groups != null && typeof(groups) != undefined) {
        this.file = groups[1];
        this.hotspotName = groups[2];
        this.hotspotType = groups[3];
        this.hotpointString = groups[4];
        this.hotspots = this.hotpointString.split(';');
        this.defined = true;
    } else {
        this.defined = false;

    }
}

HotSpot.prototype.isDefined = function() {
    return this.defined;
}

HotSpot.prototype.getShape = function() {
    if (this.hotspotType == -3) {
        return "circle";
    } else {
        return "poly";
    }

}


HotSpot.prototype.getCenter = function(scaling) {
    var xmax=0, ymax = 0, xmin = 10000000, ymin = 10000000;
    thl = this.hotspots.length;
    for(var i=0; i < thl; i++){
        var c = this.hotspots[i].split(',');
        if (c[0] > xmax) {
            xmax= Number(c[0])
        }
        if (c[0] < xmin) {
            xmin= Number(c[0])
        }
        if (c[1] > ymax) {
            ymax= Number(c[1])
        }
        if (c[1] < ymin) {
            ymin= Number(c[1])
        }

    }
    var xres = xmin + (xmax-xmin)/2
    var yres = ymin + (ymax-ymin)/2
    var rlist = [xres,yres]
    return rlist
}



HotSpot.prototype.getCoords = function(scaling) {
    if (scaling != 1) {
        for (var i = 0 ; i < this.hotspots.length; i++) {
            var hotSpotXY =  this.hotspots[i].split(',');
            this.hotspots[i] = hotSpotXY[0]*scaling+"," +hotSpotXY[1]*scaling;
        };
    }
    if (this.hotspotType == "-3") {

        var firstPoint =  this.hotspots[0].split(',');
        var secondPoint =  this.hotspots[1].split(',');
        var centerPoint = [
            (Number(firstPoint[0])+Number(secondPoint[0]))/2,
            (Number(firstPoint[1])+Number(secondPoint[1]))/2
        ];

        var radius =
            Math.max(
                Math.abs((firstPoint[0]-secondPoint[0])/2),
                Math.abs((firstPoint[1]-secondPoint[1])/2 )
            );



        return centerPoint[0]+","+centerPoint[1]+"," +radius ;
    } else {
        return this.hotspots.join(',');
    }
}

//HotSpot.hotPointRegExp = /([\d]+)([\w]+)\=([\d\-]+);([\d,]+)/g;

function parsePointsFile(pointsFile) {
    var hotspots = [];
    var pointLines = pointsFile .split("\n");
    $.each(pointLines, function(index, value) {
        var hotspot = new HotSpot(value);
        if (hotspot.isDefined()) {
            hotspots.push(hotspot);
        } else {
           // alert("Could not parse : "+$(this));
        }
    });
    return hotspots;


}

function findHotspot(hotspotName) {
    for (var i = 0 ; i < hotspots.length; i++) {
        if (hotspots[i].hotspotName == hotspotName) {
            return hotspots[i];
        }
    }
}