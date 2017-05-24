var hotSpotList = new HotSpotList();
var marker = new Marker('#marker');
var mapManager    = new MapManager();
var testManager   = new TestManager(true);
var mapUI         = new MapUI('#mapImageId','#paragraphMapId','#hotspotMap','#hotspotMapId'  )
var hotspotFoundId         = new HotspotFoundId('#hotspotFoundId')

function addEventsToArea(area)  {
    area.mousedown(function() {
        marker.hide();
    });

    testManager.addEventsForArea(area);
}

function loadImageMapping(selectedMap) {
    mapManager.selectMap(selectedMap);
    var selectedImg =   mapManager.getImagePath(selectedMap,false);
    mapUI.loadImage(selectedImg , mapManager.height, mapManager.width);
}

function doParse() {
    mapUI.reset();
    var winWidth = $(window).width()-50;

    mapManager.scale(winWidth);

    hotSpotList.parsePointsFile($('#pointsAreaId').val());
    $.each(hotSpotList.hotspots, function(index, hotspot) {
        var area = addArea('#hotspotMapId', hotspot, mapManager.scaling);
        addEventsToArea(area);
    }) ;
    marker.hide();

}

function moveMarker() {
    var hotspot = hotSpotList.findHotspot(hotspotFoundId.value());
    var cc= hotspot.getCenter(mapManager.scaling);
    var ccx = cc[0]-60*mapManager.scaling , ccy = cc[1]-60*mapManager.scaling-mapUI.scrollTop();
    marker.moveRoutine(ccx,ccy);
    setTimeout(function() {marker.hide()},1000);


}

function loadPoints(pointsValue) {
    $('#pointsAreaId').load(mapManager.getPointsFile(pointsValue),  doParse);
}

function fillFileComboBox() {
    
}

$.urlParam = function(name, url) {
    if (!url) {
        url = window.location.href;
    }
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
    if (!results) {
        return undefined;
    }
    return results[1] || undefined;
}

function begin() {
    this.istesting = true;
    loadImageMapping($.urlParam('mapComboboxId'));
    loadPoints($.urlParam('fileComboboxId') );


}

function helpMe() {
    moveMarker();
}

function startQuiz() {
    testManager.pickRandomHotspot(testManager);
}


