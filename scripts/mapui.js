/**
 * Created by Admin on 2017-05-22.
 */


function addArea(id, hotspot, scaling) {
    var area = $('<area/>');
    area.attr('alt', hotspot.hotspotName);

    area.attr('shape', hotspot.getShape());
    var coords = hotspot.getCoords(scaling);
    area.attr('coords', coords);
    $(id).append(area);
    return area;
}

function MapUI(mapImageId,paragraphMapId, hotspotMap) {
    this.mapImageId = mapImageId;
    this.paragraphMapId = paragraphMapId;
    this.hotspotMap = hotspotMap;
}

MapUI.prototype.loadImage = function(selectedImg){
    $(this.mapImageId).remove();
    var mapImageId = $('<img  id="mapImageId" onload="fillFileComboBox();" src="'+selectedImg+'" usemap="' +this.hotspotMap+'">');
    $(this.paragraphMapId).append(mapImageId);
}

MapUI.prototype.setWidth= function(width) {
    $(this.mapImageId).attr('width', Math.min(width));
}