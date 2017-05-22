var hotSpotList = new HotSpotList();
var marker = new Marker('#marker');
var mapComboboxId = new MapComboboxId('#mapComboboxId')
var fileComboboxId = new FileComboboxId('#fileComboboxId')
var hotspotComboboxId = new HotspotComboboxId('#hotspotComboboxId')
var mapNormalCheckboxId = new MapNormalCheckboxId('#mapTypeNormal')
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

function loadImageMapping() {
    var selectedImg =   mapManager.getImagePath(mapComboboxId.selectedMap(),mapNormalCheckboxId.isactive());
    mapUI.loadImage(selectedImg , mapManager.height, mapManager.width);
}

function changeImageEvent() {
    fileComboboxId.rememberIndex();
    hotspotFoundId.reset();
    loadImageMapping();
}

function doParse() {
    hotspotComboboxId.reset();
    mapUI.reset();
    var winWidth = $(window).width()-50;
    mapManager.selectMap(mapComboboxId.selectedMap());
    mapManager.scale(winWidth);
    //mapUI.setWidth(mapManager.width);
    hotSpotList.parsePointsFile($('#pointsAreaId').val());
    $.each(hotSpotList.hotspots, function(index, hotspot) {
        addOption('#hotspotComboboxId', hotspot.hotspotName);
        var area = addArea('#hotspotMapId', hotspot, mapManager.scaling);
        addEventsToArea(area);
    }) ;
    marker.hide();
    hotspotComboboxId.change(moveMarker);
    testManager.pickRandomHotspot(testManager);
}

function moveMarker() {
    var hotspot = hotSpotList.findHotspot(hotspotFoundId.value());
    var cc= hotspot.getCenter(mapManager.scaling);
    var ccx = cc[0]-60*mapManager.scaling , ccy = cc[1]-60*mapManager.scaling-mapUI.scrollTop();
    //$("html, body").animate({scrollTop: ccy},0.1, function() { marker.moveTo(ccx, ccy);} );
    //window.scrollBy(0,ccy-mapUI.scrollTop());
    testManager.pickRandomHotspot(testManager);
    marker.moveRoutine(ccx,ccy);


}

function changePointsEvent() {
    $('#pointsAreaId').load(mapManager.getPointsFile(fileComboboxId.val()),  doParse);
}

function fillFileComboBox() {
    this.istesting = true;
    var hotspotFiles = mapManager.getHotspots();
    fileComboboxId.fill(hotspotFiles);
    changePointsEvent();


}

function begin() {
    this.istesting = true;
    mapComboboxId.fill(Object.keys(imageFileMapping ));
    mapComboboxId.change( changeImageEvent);
    mapNormalCheckboxId.click(changeImageEvent);
    loadImageMapping();
    fillFileComboBox( );

}

function helpMe() {
    moveMarker();
}

function startQuiz() {
    testManager.pickRandomHotspot(testManager);
}


