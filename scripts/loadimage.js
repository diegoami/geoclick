


var hotSpotList = new HotSpotList();
var marker = new Marker('#marker');
var mapComboboxId = new MapComboboxId('#mapComboboxId')

var testing = false;
var fileIndex = 0;
var scaling = 1;

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

function getImagePath(selectedMap) {
    var dir = imageFileMapping[selectedMap].dir;
    var fileName = $('#mapTypeNormal').attr("checked") ?
        imageFileMapping[selectedMap].imgComp :
        imageFileMapping[selectedMap].imgEmpty;

    return './maps/'+dir + fileName;;
}


function loadImageMapping() {
    //  $('#paragraphMapId').remove('#mapImageId');
    $('#mapImageId').remove();
    var selectedMap= $('#mapComboboxId').val();
    var selectedImg =   getImagePath(selectedMap);
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
    var imgWidth = imageFileMapping[mapComboboxId.selectedMap()].width;

    scaling = winWidth > imgWidth ? 1 : winWidth / imgWidth ;
    if (imgWidth > winWidth ) {
        $('#mapImageId').attr('width', Math.min(imgWidth, winWidth));
    }

    $.each(hotSpotList.hotspots, function(index, hotspot) {
        addOption('#hotspotList', hotspot.hotspotName);
        area = addArea('#hotspotMapId', hotspot, scaling);
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
    var cc= hotspot.getCenter(scaling);
    marker.moveTo(cc[0]-60*scaling, cc[1]-60*scaling-$('#paragraphMapId').scrollTop());
    marker.show();
    if (testing) {
        if (hotspotKey ===  $('#hotspotFoundId').html() )
            pickRandomHotspot();
    }
}

function changePointsEvent() {
    var dir = imageFileMapping[mapComboboxId.selectedMap()].dir;
    var selectedFile= $('#fileComboboxId').val();
    var pointsFile = dir+selectedFile;
    $('#pointsAreaId').load("maps/"+pointsFile,  doParse);
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

    var hotspotFiles = hotspotFileMapping[mapComboboxId.selectedMap()];

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
    var randomIndex = Math.floor(Math.random()*hotspots.length);
    var findHotSpot = hotspots[randomIndex];
    var hotspotName = findHotSpot.hotspotName;
    $('#hotspotFoundId').html(hotspotName);
}

function loadimage(imagePathArg) {
    var imagePath = './maps/'+imagePathArg;
    //$('#mapImageId').load(imagePath)

}


