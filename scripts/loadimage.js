


var hotSpotList = new HotSpotList();
var marker = new Marker('#marker');
var mapComboboxId = new MapComboboxId('#mapComboboxId')
var mapManager    = new MapManager();
var testing = false;
var fileIndex = 0;


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
        if (!testing) {
            $('#hotspotFoundId').html($(this).attr('alt'));
        }
    });
    area.mousedown(function() {
        marker.hide()
        if (testing) {
            $('#clickedOnId').html($(this).attr('alt'));
            if ($(this).attr('alt') ===  $('#hotspotFoundId').html() ) {
                $('#hotspotFoundId').html("OK!!!");
                window.setTimeout(pickRandomHotspot, 1000);
            }
        }
    });
    area.mouseleave(function() {
        if (!testing) {
            $('#hotspotFoundId').html("");
        }
    });

}

function loadImageMapping() {
    $('#mapImageId').remove();

    var selectedMap= $('#mapComboboxId').val();
    mapManager.selectMap(selectedMap);
    var selectedImg =   getImagePath(selectedMap,$('#mapTypeNormal').attr("checked"));
    var mapImageId = $('<img  id="mapImageId" onload="fillFileComboBox();" src="'+selectedImg+'" usemap="#hotspotMap">');
    $('#paragraphMapId').append(mapImageId);
}

function changeImageEvent() {
    rememberIndexEvent();
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
    if (testing) {
        pickRandomHotspot();
    }

}


function moveMarker() {
    var hotspotKey = $('#hotspotList').val();
    var hotspot = hotSpotList.findHotspot(hotspotKey);
    var cc= hotspot.getCenter(mapManager.scaling);
    marker.moveTo(cc[0]-60*mapManager.scaling, cc[1]-60*mapManager.scaling-$('#paragraphMapId').scrollTop());
    marker.show();
    if (testing) {
        if (hotspotKey ===  $('#hotspotFoundId').html() )
            pickRandomHotspot();
    }
}

function changePointsEvent() {

    $('#pointsAreaId').load(mapManager.getPointsFile($('#fileComboboxId').val()),  doParse);
}

function rememberIndexEvent() {
    fileIndex = $("#fileComboboxId option:selected").index();
}

function retrieveIndexEvent() {
    var fileSize = $('#fileComboboxId option').size()

    if (fileIndex < fileSize) {
        $('#fileComboboxId option')[fileIndex].selected
    } else {
        $('#fileComboboxId option')[fileSize - 1].selected
    }
}

function fillFileComboBox() {

    $('#fileComboboxId').empty();

    var hotspotFiles = mapManager.getHotspots();

    if (fileIndex >= hotspotFiles.length) {
        fileIndex = hotspotFiles.length-1
    }

    $.each( hotspotFiles, function(index, value) {
            addOption('#fileComboboxId', value, fileIndex == index);
        }
    )

    $('#fileComboboxId').change(changePointsEvent );
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
    rememberIndexEvent();
    if (!testing) {
        testing = true;
        $('#mapTypeNormal').attr("checked", false);
        $('#toggleTestButtonId').html("Browse");
        $('#whereisId').html("Where is...");
        $('#clickedOnId').html("");
    } else {
        testing = false;
        $('#mapTypeNormal').attr("checked", true);
        $('#toggleTestButtonId').html("Test");
        $('#whereisId').html("Hovering on ...");
        $('#hotspotFoundId').html("");
        $('#clickedOnId').html("");
    }
    loadImageMapping();
}

function pickRandomHotspot() {
    $('#clickedOnId').html("");
    var randomIndex = Math.floor(Math.random()*hotSpotList.hotspots.length);
    var findHotSpot = hotSpotList.hotspots[randomIndex];
    var hotspotName = findHotSpot.hotspotName;
    $('#hotspotFoundId').html(hotspotName);
}


