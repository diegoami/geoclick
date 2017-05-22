


var hotSpotList = new HotSpotList();
var marker = new Marker('#marker');
var mapComboboxId = new MapComboboxId('#mapComboboxId')
var fileComboboxId = new FileComboboxId('#fileComboboxId')
var mapManager    = new MapManager();
var testManager   = new TestManager();




function addArea(id, hotspot, scaling) {
    var area = $('<area/>');
    area.attr('alt', hotspot.hotspotName);

    area.attr('shape', hotspot.getShape());
    var coords = hotspot.getCoords(scaling);
    area.attr('coords', coords);
    $(id).append(area);
    return area;
}

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
    $('#mapImageId').remove();

    var selectedMap= $('#mapComboboxId').val();
    mapManager.selectMap(selectedMap);
    var selectedImg =   mapManager.getImagePath(selectedMap,$('#mapTypeNormal').attr("checked"));
    var mapImageId = $('<img  id="mapImageId" onload="fillFileComboBox();" src="'+selectedImg+'" usemap="#hotspotMap">');
    $('#paragraphMapId').append(mapImageId);
}

function changeImageEvent() {
    fileComboboxId.rememberIndex();
    $('#hotspotFoundId').html("");
    loadImageMapping();
}

function doParse() {
    hotSpotList.parsePointsFile($('#pointsAreaId').val());
    $('#hotspotList').empty();
    $('#hotspotMapId').empty();

    var winWidth = $(window).width()-50;
    mapManager.selectMap(mapComboboxId.selectedMap());
    mapManager.scale(winWidth);
    $('#mapImageId').attr('width', Math.min(mapManager.getImgWidth()));

    $.each(hotSpotList.hotspots, function(index, hotspot) {
        addOption('#hotspotList', hotspot.hotspotName);
        area = addArea('#hotspotMapId', hotspot, mapManager.scaling);
        addEventsToArea(area);
    }) ;
    marker.hide();
    $('#hotspotList').change(moveMarker);
    testManager.pickRandomHotspot();
}


function moveMarker() {
    var hotspotKey = $('#hotspotList').val();
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
    $('#mapTypeNormal').click(changeImageEvent);
    loadImageMapping();
    fillFileComboBox( );
}

function toggleTesting() {
    fileComboboxId.rememberIndex();
    testManager.toggleTesting();
    loadImageMapping();
}



