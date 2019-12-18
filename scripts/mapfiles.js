

function MapManager() {
    this.scaling = 1;
    this.selectedId = "Africa";
    this.width = imageFileMapping[this.selectedId].width;
    this.height = imageFileMapping[this.selectedId].height;

}

MapManager.prototype.selectMap = function(mapId) {

    this.selectedId  = mapId;
    this.width = imageFileMapping[this.selectedId].width;
    this.height = imageFileMapping[this.selectedId].height;


}

MapManager.prototype.scale = function(winWidth) {
//    this.scaling = winWidth > imageFileMapping[this.selectedId].width ? 1 : winWidth / imageFileMapping[this.selectedId].width  ;
 //   this.width   = Math.min(winWidth,imageFileMapping[this.selectedId].width*this.scaling );
 //   this.height  = imageFileMapping[this.selectedId].height*this.scaling;
    this.scaling=1;
}


MapManager.prototype.getImgWidth = function() {
    return this.width;
}

MapManager.prototype.getPointsFile = function(pointsId) {


    var dir = imageFileMapping[this.selectedId].dir;
    var pointsFile = "maps/"+dir+pointsId;
    return pointsFile;
}

MapManager.prototype.getHotspots = function() {
    return hotspotFileMapping[this.selectedId];
}

MapManager.prototype.getImagePath = function(selectedId, normal) {
    this.selectMap(selectedId);
    var dir = imageFileMapping[this.selectedId].dir;
    var fileName = normal ?
        imageFileMapping[this.selectedId].imgComp :
        imageFileMapping[this.selectedId].imgEmpty;

    return './maps/'+dir + fileName;;
}

var imageFileMapping = {
    "Africa" : { dir : "Africa/", imgComp : "Africa.jpg", imgEmpty : "Africm.jpg",height:1051, width : 1038} ,
    "Asia" : { dir : "Asia/", imgComp : "Asia.jpg", imgEmpty : "Asim.jpg",height:1316, width : 1062} ,
    "China" : { dir : "Asia/China/", imgComp : "China.jpg", imgEmpty : "Chinm.jpg",height:956, width : 978} ,
    "India" : { dir : "Asia/India/", imgComp : "India.jpg", imgEmpty : "Indim.jpg",height:1288, width : 1084} ,
    "Europe" : { dir : "Europe/", imgComp : "europe.jpg", imgEmpty : "europm.jpg", height:1364, width: 1054} ,
    "Austria" : { dir : "Europe/Austria/", imgComp : "Austria.jpg", imgEmpty : "Austrim.jpg", height:1105, width : 1563} ,
    "Belgium" : { dir : "Europe/Belgium/", imgComp : "belgio.jpg", imgEmpty : "belgim.jpg", height:1090, width : 1002} ,
	"Croatia" : { dir : "Europe/Croatia/", imgComp : "croatia.jpg", imgEmpty : "croatim.jpg",height:1216, width : 1036} ,
    "CzechRepublic" : { dir : "Europe/CzechRepublic/", imgComp : "CzechRepublic.jpg", imgEmpty : "CzechRepublim.jpg", height:1477, width : 1381} ,
    "Denmark" : { dir : "Europe/Denmark/", imgComp : "Denmark.jpg", imgEmpty : "Denmarm.jpg", height:1154, width : 1406} ,
    "Finland" : { dir : "Europe/Finland/", imgComp : "Finland.jpg", imgEmpty : "Finlanm.jpg", height:1190, width : 980} ,
    "France" : { dir : "Europe/France/", imgComp : "France.jpg", imgEmpty : "Francm.jpg",height:920, width : 930} ,
    "Germany" : { dir : "Europe/Germany/", imgComp : "Germany.jpg", imgEmpty : "Germanm.jpg", height:1600, width : 1309} ,
    "Greece" : { dir : "Europe/Greece/", imgComp : "greece.jpg", imgEmpty : "greecm.jpg", height:1054, width : 1098} ,
    "Italy" : { dir : "Europe/Italy/", imgComp : "Italy.jpg", imgEmpty : "Italm.jpg", height:1221, width : 983},
	"Japan1" : { dir : "Asia/Japan1/", imgComp : "japan.jpg", imgEmpty : "japam.jpg", height:1312, width : 1080},
	"Japan2" : { dir : "Asia/Japan2/", imgComp : "japan.jpg", imgEmpty : "japam.jpg", height:1306, width : 1080},
    "Netherlands" : { dir : "Europe/Netherlands/", imgComp : "Netherlands.jpg", imgEmpty : "Netherlandm.jpg", height:1148, width : 1008} ,
    "Norway" : { dir : "Europe/Norway/", imgComp : "Norway.jpg", imgEmpty : "Norwam.jpg", height:1220, width : 980},
    "Poland" : { dir : "Europe/Poland/", imgComp : "poland.jpg", imgEmpty : "polanm.jpg" , height:844, width : 848},
    "Romania" : { dir : "Europe/Romania/", imgComp : "romania.jpg", imgEmpty : "romanim.jpg" , height:1192, width : 1112},    
    "Russia" : { dir : "Europe/Russia/", imgComp : "russia.jpg", imgEmpty : "russim.jpg", height:1104, width : 1620} ,
    "Spain" : { dir : "Europe/Spain/", imgComp : "Spain.jpg", imgEmpty : "Spaim.jpg" , height:902, width : 1131},
    "Sweden" : { dir : "Europe/Sweden/", imgComp : "sweden.jpg", imgEmpty : "swedem.jpg" , height:1228, width : 988},
    "Ukraine" : { dir : "Europe/Ukraine/", imgComp : "ukraine.jpg", imgEmpty : "ukrainm.jpg", height:1045, width : 1000} ,
    "UnitedKingdom" : { dir : "Europe/UnitedKingdom/", imgComp : "uk.jpg", imgEmpty : "um.jpg", height:1216, width : 1000} ,
    "UnitedKingdom2" : { dir : "Europe/UnitedKingdom2/", imgComp : "uk2.jpg", imgEmpty : "ukm.jpg", height:1221, width : 1027},
    "Middle_East" : { dir : "Middle_East/", imgComp : "Middle_East.jpg", imgEmpty : "Middle_Easm.jpg", height:1227, width : 1053},
    "North_America" : { dir : "North_America/", imgComp : "North_America.jpg", imgEmpty : "North_Americm.jpg", height:1356, width : 1062},
    "Canada" : { dir : "North_America/Canada/", imgComp : "Canada.jpg", imgEmpty : "Canadm.jpg", height:920, width : 980},
    "Mexico" : { dir : "North_America/Mexico/", imgComp : "mexico.jpg", imgEmpty : "mexicm.jpg", height:981, width : 1200},
    "USA" : { dir : "North_America/USA/", imgComp : "usa.jpg", imgEmpty : "usm.jpg",height:993,  width : 1350},
    "Australia" : { dir : "Oceania/Australia/", imgComp : "Australia.jpg", imgEmpty : "Australim.jpg",height:1101,  width : 1025},
    "South_America" : { dir : "South_America/", imgComp : "South_America.jpg", imgEmpty : "South_Americm.jpg", height:1348, width : 1062},
    "Argentina" : { dir : "South_America/Argentina/", imgComp : "Argentina.jpg", imgEmpty : "Argentinm.jpg", height:1302, width : 1068},
	"Brazil" : { dir : "South_America/Brazil/", imgComp : "Brazil.jpg", imgEmpty : "Brazim.jpg", height:1430, width : 1307}
};


var hotspotFileMapping = {
    "Africa" : ["countries.hsf", "towns.hsf", "rivers.hsf"] ,
    "Asia" : ["countries.hsf", "towns.hsf", "rivers.hsf"] ,
    "China" : ["regions.hsf", "towns.hsf"] ,
    "India" : ["countries.hsf", "towns.hsf", "rivers.hsf"] ,
    "Europe" : ["countries.hsf", "towns.hsf", "rivers.hsf"] ,
    "Austria" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "Belgium" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
	"Croatia" : ["regions.hsf", "towns.hsf", "islands.hsf"] ,
    "CzechRepublic" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "Denmark" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "Finland" : ["countries.hsf", "towns.hsf"] ,
    "France" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "Germany" : ["lander.hsf", "towns.hsf", "rivers.hsf"] ,
    "Greece" : ["islands.hsf", "towns.hsf"] ,
    "Italy" :["regions.hsf", "towns.hsf", "rivers.hsf"] ,
	"Japan1" :["towns.hsf"] ,
	"Japan2" :["regions.hsf", "towns.hsf"] ,
    "Netherlands" : ["regions.hsf", "towns.hsf"] ,
    "Norway" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "Poland" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "Romania" : ["regions.hsf", "towns.hsf"] ,
    "Russia" : [ "towns.hsf", "rivers.hsf"] ,
    "Spain" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "Sweden" : ["lan.hsf", "towns.hsf", "rivers.hsf"] ,
    "Ukraine" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "UnitedKingdom" : ["counties.hsf", "towns.hsf", ] ,
    "UnitedKingdom2" : ["counties.hsf", "towns.hsf", "rivers.hsf"],
    "Middle_East" : ["countries.hsf", "towns.hsf"] ,
    "North_America" : ["countries.hsf", "rivers.hsf","towns.hsf", ] ,
    "Canada" : ["states.hsf", "towns.hsf", "rivers.hsf"],
    "Mexico" : ["regions.hsf", "towns.hsf"],
    "USA" : ["states.hsf", "towns.hsf", "rivers.hsf"],
    "Australia" : ["regions.hsf", "towns.hsf", "rivers.hsf"],
    "South_America" : ["countries.hsf", "rivers.hsf","towns.hsf"] ,
    "Argentina" : ["regions.hsf", "towns.hsf"],
    "Brazil" : ["regions.hsf", "towns.hsf", "rivers.hsf" ]
}

