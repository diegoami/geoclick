/**
 * Created with JetBrains WebStorm.
 * User: diego
 * Date: 07.10.12
 * Time: 18:35
 * To change this template use File | Settings | File Templates.
 */
var imageFileMapping = {
    "Africa" : { dir : "Africa/", imgComp : "Africa.jpg", imgEmpty : "Africm.jpg",width : 1038} ,
    "Asia" : { dir : "Asia/", imgComp : "Asia.jpg", imgEmpty : "Asim.jpg",width : 1062} ,
    "China" : { dir : "Asia/China/", imgComp : "China.jpg", imgEmpty : "Chinm.jpg",width : 978} ,
    "India" : { dir : "Asia/India/", imgComp : "India.jpg", imgEmpty : "Indim.jpg",width : 1084} ,
    "Europe" : { dir : "Europe/", imgComp : "europe.jpg", imgEmpty : "europm.jpg", width: 1054} ,
    "Austria" : { dir : "Europe/Austria/", imgComp : "Austria.jpg", imgEmpty : "Austrim.jpg", width : 1563} ,
    "Belgium" : { dir : "Europe/Belgium/", imgComp : "belgio.jpg", imgEmpty : "belgim.jpg", width : 1002} ,
    "CzechRepublic" : { dir : "Europe/CzechRepublic/", imgComp : "CzechRepublic.jpg", imgEmpty : "CzechRepublim.jpg", width : 1381} ,
    "Denmark" : { dir : "Europe/Denmark/", imgComp : "Denmark.jpg", imgEmpty : "Denmarm.jpg", width : 1406} ,
    "Finland" : { dir : "Europe/Finland/", imgComp : "Finland.jpg", imgEmpty : "Finlanm.jpg", width : 980} ,
    "France" : { dir : "Europe/France/", imgComp : "France.jpg", imgEmpty : "Francm.jpg",width : 930} ,
    "Germany" : { dir : "Europe/Germany/", imgComp : "Germany.jpg", imgEmpty : "Germanm.jpg", width : 1309} ,
    "Greece" : { dir : "Europe/Greece/", imgComp : "greece.jpg", imgEmpty : "greecm.jpg", width : 1098} ,
    "Italy" : { dir : "Europe/Italy/", imgComp : "Italy.jpg", imgEmpty : "Italm.jpg", width : 983},
    "Netherlands" : { dir : "Europe/Netherlands/", imgComp : "Netherlands.jpg", imgEmpty : "Netherlandm.jpg", width : 1008} ,
    "Norway" : { dir : "Europe/Norway/", imgComp : "Norway.jpg", imgEmpty : "Norwam.jpg", width : 980},
    "Poland" : { dir : "Europe/Poland/", imgComp : "poland.jpg", imgEmpty : "polanm.jpg" , width : 848},
    "Russia" : { dir : "Europe/Russia/", imgComp : "russia.jpg", imgEmpty : "russim.jpg", width : 1620} ,
    "Spain" : { dir : "Europe/Spain/", imgComp : "Spain.jpg", imgEmpty : "Spaim.jpg" , width : 1131},
    "Sweden" : { dir : "Europe/Sweden/", imgComp : "sweden.jpg", imgEmpty : "swedem.jpg" , width : 988},
    "Ukraine" : { dir : "Europe/Ukraine/", imgComp : "ukraine.jpg", imgEmpty : "ukrainm.jpg", width : 1000} ,
    "UnitedKingdom" : { dir : "Europe/UnitedKingdom/", imgComp : "uk.jpg", imgEmpty : "um.jpg", width : 1000} ,
    "UnitedKingdom2" : { dir : "Europe/UnitedKingdom2/", imgComp : "uk2.jpg", imgEmpty : "ukm.jpg", width : 1027},
    "Middle_East" : { dir : "Middle_East/", imgComp : "Middle_East.jpg", imgEmpty : "Middle_Easm.jpg", width : 1053},
    "North_America" : { dir : "North_America/", imgComp : "North_America.jpg", imgEmpty : "North_Americm.jpg", width : 1062},
    "Canada" : { dir : "North_America/Canada/", imgComp : "Canada.jpg", imgEmpty : "Canadm.jpg", width : 980},
    "USA" : { dir : "North_America/USA/", imgComp : "usa.jpg", imgEmpty : "usm.jpg", width : 1350},
    "Oceania" : { dir : "Oceania/Australia/", imgComp : "Australia.jpg", imgEmpty : "Australim.jpg", width : 1025},
    "South_America" : { dir : "South_America/", imgComp : "South_America.jpg", imgEmpty : "South_Americm.jpg", width : 1062},
    "Brazil" : { dir : "South_America/Brazil/", imgComp : "Brazil.jpg", imgEmpty : "Brazim.jpg", width : 1307}
};


var hotspotFileMapping = {
    "Africa" : ["countries.hsf", "towns.hsf", "rivers.hsf"] ,
    "Asia" : ["countries.hsf", "towns.hsf", "rivers.hsf"] ,
    "China" : ["regions.hsf", "towns.hsf"] ,
    "India" : ["countries.hsf", "towns.hsf", "rivers.hsf"] ,
    "Europe" : ["countries.hsf", "towns.hsf", "rivers.hsf"] ,
    "Austria" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "Belgium" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "CzechRepublic" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "Denmark" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "Finland" : ["countries.hsf", "towns.hsf"] ,
    "France" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "Germany" : ["lander.hsf", "towns.hsf", "rivers.hsf"] ,
    "Greece" : ["islands.hsf", "towns.hsf"] ,
    "Italy" :["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "Netherlands" : ["regions.hsf", "towns.hsf"] ,
    "Norway" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "Poland" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "Russia" : [ "towns.hsf", "rivers.hsf"] ,
    "Spain" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "Sweden" : ["lan.hsf", "towns.hsf", "rivers.hsf"] ,
    "Ukraine" : ["regions.hsf", "towns.hsf", "rivers.hsf"] ,
    "UnitedKingdom" : ["counties.hsf", "towns.hsf", ] ,
    "UnitedKingdom2" : ["counties.hsf", "towns.hsf", "rivers.hsf"],
    "Middle_East" : ["countries.hsf", "towns.hsf"] ,
    "North_America" : ["countries.hsf", "rivers.hsf","towns.hsf", ] ,
    "Canada" : ["states.hsf", "towns.hsf", "rivers.hsf"],
    "USA" : ["states.hsf", "towns.hsf", "rivers.hsf"],
    "Australia" : ["regions.hsf", "towns.hsf", "rivers.hsf"],
    "South_America" : ["countries.hsf", "rivers.hsf","towns.hsf"] ,
    "Brazil" : ["regions.hsf", "towns.hsf", "rivers.hsf", ]
}
