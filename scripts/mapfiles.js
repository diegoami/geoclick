/**
 * Created with JetBrains WebStorm.
 * User: diego
 * Date: 07.10.12
 * Time: 18:35
 * To change this template use File | Settings | File Templates.
 */
var imageFileMapping = {
    "France" : { dir : "Europe/France/", imgComp : "France.jpg", imgEmpty : "Francm.jpg",width : 930} ,

    "USA" : { dir : "North_America/USA/", imgComp : "usa.jpg", imgEmpty : "usm.jpg", width : 1350},

    "Europe" : { dir : "Europe/", imgComp : "europe.jpg", imgEmpty : "europm.jpg", width: 1054} ,
    "Austria" : { dir : "Europe/Austria/", imgComp : "Austria.jpg", imgEmpty : "Austrim.jpg", width : 1563} ,
    "Belgium" : { dir : "Europe/Belgium/", imgComp : "belgio.jpg", imgEmpty : "belgim.jpg", width : 1002} ,
    "CzechRepublic" : { dir : "Europe/CzechRepublic/", imgComp : "CzechRepublic.jpg", imgEmpty : "CzechRepublim.jpg", width : 1381} ,
    "Denmark" : { dir : "Europe/Denmark/", imgComp : "Denmark.jpg", imgEmpty : "Denmarm.jpg", width : 1406} ,
    "Finland" : { dir : "Europe/Finland/", imgComp : "Finland.jpg", imgEmpty : "Finlandm.jpg", width : 980} ,
    "Germany" : { dir : "Europe/Germany/", imgComp : "Germany.jpg", imgEmpty : "Germanm.jpg", width : 1309} ,
    "Greece" : { dir : "Europe/Greece/", imgComp : "greece.jpg", imgEmpty : "greecm.jpg", width : 1098} ,
    "Italy" : { dir : "Europe/Italy/", imgComp : "Italy.jpg", imgEmpty : "Italm.jpg", width : 983},
    "Netherlands" : { dir : "Europe/Netherlands/", imgComp : "Netherlands.jpg", imgEmpty : "Netherlandm.jpg", width : 1008} ,
    "Norway" : { dir : "Europe/Norway/", imgComp : "Norway.jpg", imgEmpty : "Norwam.jpg", width : 980},
    "Poland" : { dir : "Europe/Poland/", imgComp : "poland.jpg", imgEmpty : "polanm.jpg" , width : 848},
    "Spain" : { dir : "Europe/Spain/", imgComp : "Spain.jpg", imgEmpty : "Spaim.jpg" , width : 1131},
    "Sweden" : { dir : "Europe/Sweden/", imgComp : "sweden.jpg", imgEmpty : "swedem.jpg" , width : 988},
    "UnitedKingdom" : { dir : "Europe/UnitedKingdom/", imgComp : "uk.jpg", imgEmpty : "um.jpg", width : 1000} ,
    "UnitedKingdom2" : { dir : "Europe/UnitedKingdom2/", imgComp : "uk2.jpg", imgEmpty : "ukm.jpg", width : 1027},
    "North_America" : { dir : "North_America/", imgComp : "North_America.jpg", imgEmpty : "North_Americm.jpg", width : 1062},
    "Canada" : { dir : "North_America/Canada/", imgComp : "Canada.jpg", imgEmpty : "Canadm.jpg", width : 980}

}


var hotspotFileMapping = {
    "France" : ["regions.hsf", "rivers.hsf", "towns.hsf"] ,

    "USA" : ["states.hsf", "rivers.hsf", "towns.hsf"],

    "Europe" : ["countries.hsf", "rivers.hsf", "towns.hsf"] ,
    "Austria" : ["regions.hsf", "rivers.hsf", "towns.hsf"] ,
    "Belgium" : ["regions.hsf", "rivers.hsf", "towns.hsf"] ,
    "CzechRepublic" : ["regions.hsf", "rivers.hsf", "towns.hsf"] ,
    "Denmark" : ["regions.hsf", "rivers.hsf", "towns.hsf"] ,
    "Finland" : ["countries.hsf", "towns.hsf"] ,
    "Germany" : ["lander.hsf", "rivers.hsf", "towns.hsf"] ,
    "Greece" : ["islands.hsf", "towns.hsf"] ,
    "Italy" :["regions.hsf", "rivers.hsf", "towns.hsf"] ,
    "Netherlands" : ["regions.hsf", "towns.hsf"] ,
    "Norway" : ["regions.hsf", "rivers.hsf", "towns.hsf"] ,
    "Poland" : ["regions.hsf", "rivers.hsf", "towns.hsf"] ,
    "Spain" : ["regions.hsf", "rivers.hsf", "towns.hsf"] ,
    "Sweden" : ["lan.hsf", "rivers.hsf", "towns.hsf"] ,
    "UnitedKingdom" : ["counties.hsf", "towns.hsf", ] ,
    "UnitedKingdom2" : ["counties.hsf", "rivers.hsf", "towns.hsf"],
    "North_America" : ["countries.hsf", "towns.hsf", "rivers.hsf"] ,
    "Canada" : ["states.hsf", "rivers.hsf", "towns.hsf"]


}
