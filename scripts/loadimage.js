


var hotSpotList = new HotSpotList();
var marker = new Marker('#marker');
var mapComboboxId = new MapComboboxId('#mapComboboxId')
var fileComboboxId = new FileComboboxId('#fileComboboxId')
var mapNormalCheckboxId = new MapNormalCheckboxId('#mapTypeNormal')
var mapManager    = new MapManager();
var testManager   = new TestManager();
var mapUI         = new MapUI('#mapImageId','#paragraphMapId','#hotspotMap' )

function addEventsToArea(area)  {
    area.mouseover( function() {
        $('#hotspotFoundId').html($(this).attr('alt'));
    });
    area.mousedown(function() {
        marker.hide();
    });
    area.mouseleave(function() {
        $('#hotspotFoundId').html("");
    });
    testManager.addEventsForArea(area);
}

function loadImageMapping() {
    var selectedImg =   mapManager.getImagePath(mapComboboxId.selectedMap(),mapNormalCheckboxId.isactive());
    mapUI.loadImage(selectedImg );
}

function changeImageEvent() {
    fileComboboxId.rememberIndex();
    $('#hotspotFoundId').html("");
    loadImageMapping();
}

function doParse() {
    hotSpotList.parsePointsFile($('#pointsAreaId').val());
    $('#hotspotComboboxId').empty();
    $('#hotspotMapId').empty();

    var winWidth = $(window).width()-50;
    mapManager.selectMap(mapComboboxId.selectedMap());
    mapManager.scale(winWidth);
    mapUI.setWidth(mapManager.getImgWidth());
    $.each(hotSpotList.hotspots, function(index, hotspot) {
        addOption('#hotspotComboboxId', hotspot.hotspotName);
        area = addArea('#hotspotMapId', hotspot, mapManager.scaling);
        addEventsToArea(area);
    }) ;
    marker.hide();
    $('#hotspotComboboxId').change(moveMarker);
    testManager.pickRandomHotspot();
}


function moveMarker() {
    var hotspotKey = $('#hotspotComboboxId').val();
    var hotspot = hotSpotList.findHotspot(hotspotKey);
    var cc= hotspot.getCenter(mapManager.scaling);
    marker.moveTo(cc[0]-60*mapManager.scaling, cc[1]-60*mapManager.scaling-$('#paragraphMapId').scrollTop());
    marker.show();

    if (hotspotKey ===  $('#hotspotFoundId').html() )
        testManager.pickRandomHotspot();
}

function changePointsEvent() {
    $('#pointsAreaId').load(mapManager.getPointsFile(fileComboboxId.val()),  doParse);
}

function fillFileComboBox() {
    var hotspotFiles = mapManager.getHotspots();
    fileComboboxId.fill(hotspotFiles);
    changePointsEvent();
}

function begin() {
    mapComboboxId.fill(Object.keys(imageFileMapping ));
    mapComboboxId.change( changeImageEvent);
    mapNormalCheckboxId.click(changeImageEvent);
    loadImageMapping();
    fillFileComboBox( );
}

function toggleTesting() {
    fileComboboxId.rememberIndex();
    testManager.toggleTesting();
    loadImageMapping();
}



