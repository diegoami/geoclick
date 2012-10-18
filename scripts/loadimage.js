/**
 * Created with JetBrains WebStorm.
 * User: diego
 * Date: 07.10.12
 * Time: 10:02
 * To change this template use File | Settings | File Templates.
 */



var actualPoints = [];

function addOption(id, value) {
    var option = $('<option />');
    option.attr('value', value).text(value);
    $(id).append(option);
}

function addArea(id, hotspot, scaling) {
    var area = $('<area/>');
    area.attr('alt', hotspot.hotspotName);

    area.attr('shape', hotspot.getShape());
    var coords = hotspot.getCoords(scaling);
    area.attr('coords', coords);
    area.mouseover( function() {
        $('#hotspotFoundId').html($(this).attr('alt'));
    })
    area.mouseleave(function() {
        $('#hotspotFoundId').html("");
    })
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


function loadImageMapping(selectedMap) {
    //$('#mapImageId').load(getImagePath(selectedMap));
    $('#mapImageId').attr('src',getImagePath(selectedMap));
}

function changeImageEvent() {
    $('#hotspotFoundId').html("");
    var selectedMap= $('#mapComboboxId').val();
    $('#mapImageId').onload = function() {
        fillFileComboBox();
    }
    loadImageMapping(selectedMap);
}


function doParse() {

    var hotspots = parsePointsFile($('#pointsAreaId').val());
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

}

function changePointsEvent() {
    var selectedMap= $('#mapComboboxId').val();
    var dir = imageFileMapping[selectedMap].dir;
    var selectedFile= $('#fileComboboxId').val();
    var pointsFile = dir+selectedFile;
    $('#pointsAreaId').load("maps/"+pointsFile,  doParse);
    $('#hotspotFoundId').html("");



}

function fillFileComboBox() {
    var selectedMap = $('#mapComboboxId').val();
    $('#fileComboboxId').empty();


    var hotspotFiles = hotspotFileMapping[selectedMap];
    $.each( hotspotFiles, function(index, value) {
            addOption('#fileComboboxId', value);
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

    loadImageMapping(firstKey);
    fillFileComboBox(firstKey );




}

function loadimage(imagePathArg) {
    var imagePath = './maps/'+imagePathArg;
    //$('#mapImageId').load(imagePath)

}


