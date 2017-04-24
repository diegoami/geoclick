/**
 * Created with JetBrains WebStorm.
 * User: diego
 * Date: 07.10.12
 * Time: 10:02
 * To change this template use File | Settings | File Templates.
 */



var actualPoints = [];
var testing = false;
var hotspots = [];
var fileIndex = 0;

function addOption(id, value, selected) {
    var option = $('<option />');
    option.attr('value', value).text(value);
    if (selected) {
        option.attr('selected', true)
    }
    $(id).append(option);
}

function addArea(id, hotspot, scaling) {
    var area = $('<area/>');
    area.attr('alt', hotspot.hotspotName);

    area.attr('shape', hotspot.getShape());
    var coords = hotspot.getCoords(scaling);
    area.attr('coords', coords);
    area.mouseover( function() {
        if (!testing) {
            $('#hotspotFoundId').html($(this).attr('alt'));
        }
    });
    area.mousedown(function() {
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
    $(id).append(area);
}

function getImagePath(selectedMap) {
    var dir = imageFileMapping[selectedMap].dir;
    var fileName = $('#mapTypeNormal').attr("checked") ?
        imageFileMapping[selectedMap].imgComp :
        imageFileMapping[selectedMap].imgEmpty;

    var imagePath = './maps/'+dir + fileName;
    return imagePath;
}


function loadImageMapping() {
    //  $('#paragraphMapId').remove('#mapImageId');
    $('#mapImageId').remove();
    var selectedMap= $('#mapComboboxId').val();
    var selectedImg =   getImagePath(selectedMap);

    var mapImageId = $('<img style="float : left; "   id="mapImageId" onload="fillFileComboBox();" src="'+selectedImg+'" usemap="#hotspotMap">');
    $('#paragraphMapId').append(mapImageId);


}

function changeImageEvent() {
    rememberIndexEvent();
    $('#hotspotFoundId').html("");
    loadImageMapping();
}


function doParse() {


    hotspots = parsePointsFile($('#pointsAreaId').val());
    $('#hotspotList').empty();
    $('#hotspotMapId').empty();

    var winWidth = $(window).width()-250;
    var selectedMap= $('#mapComboboxId').val();

    var imgWidth = imageFileMapping[selectedMap].width;


    var scaling = winWidth > imgWidth ? 1 : winWidth / imgWidth ;
    if (imgWidth > winWidth ) {
        $('#mapImageId').attr('width', Math.min(imgWidth, winWidth));
    }



    $.each(hotspots, function(index, hotspot) {
        addOption('#hotspotList', hotspot.hotspotName);
        addArea('#hotspotMapId', hotspot, scaling);
    }) ;

    if (testing) {
        pickRandomHotspot();
    }

}


function changePointsEvent() {

    var selectedMap= $('#mapComboboxId').val();
    var dir = imageFileMapping[selectedMap].dir;
    var selectedFile= $('#fileComboboxId').val();
    var pointsFile = dir+selectedFile;
    $('#pointsAreaId').load("maps/"+pointsFile,  doParse);
 //   $('#hotspotFoundId').html("");

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
    var selectedMap = $('#mapComboboxId').val();
    $('#fileComboboxId').empty();


    var hotspotFiles = hotspotFileMapping[selectedMap];

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


function fillMapComboBox() {
    var imageFileKeys = Object.keys(imageFileMapping );
    $.each( imageFileKeys, function(index, value) {
            addOption($('#mapComboboxId'), value);
        }
    )
    $('#mapComboboxId').change( changeImageEvent);
    $('#mapTypeNormal').click(changeImageEvent);
}

function begin() {
    var firstKey = Object.keys(imageFileMapping)[0];
    fillMapComboBox();

    loadImageMapping();
    fillFileComboBox( );
}

function toggleTesting() {
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


