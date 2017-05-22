/**
 * Created by Admin on 2017-05-22.
 */


function TestManager() {
    this.istesting = false;
}

TestManager.prototype.addEventsForArea = function(area) {
    that = this;
    if (this.istesting) {
        area.unbind();

    }
    if (true) {

        area.mousedown(function () {
            marker.hide();
            if (that.istesting) {
                $('#clickedOnId').html($(this).attr('alt'));
                if ($(this).attr('alt') === $('#hotspotFoundId').html()) {
                    $('#hotspotFoundId').html("OK!!!");
                    window.setTimeout(that.pickRandomHotspot, 1000, that);
                }
            }
        });


    }

}

TestManager.prototype.pickRandomHotspot = function (that) {
    if ((this && this.istesting) ||  (that && that.istesting)) {
        $('#clickedOnId').html("");
        var randomIndex = Math.floor(Math.random() * hotSpotList.hotspots.length);
        var findHotSpot = hotSpotList.hotspots[randomIndex];
        var hotspotName = findHotSpot.hotspotName;
        $('#hotspotFoundId').html(hotspotName);
    }
}

TestManager.prototype.toggleTesting = function() {
    if (!this.istesting) {
        this.istesting = true;
        $('#mapTypeNormal').attr("checked", false);
        $('#toggleTestButton').html("Browse");
        $('#whereisId').html("Where is...");
        $('#clickedOnId').html("");
        this.pickRandomHotspot();
    } else {
        this.istesting = false;
        $('#mapTypeNormal').attr("checked", true);
        $('#toggleTestButton').html("Test");
        $('#whereisId').html("Hovering on ...");
        $('#hotspotFoundId').html("");
        $('#clickedOnId').html("");
    }
}