
function addOption(id, value, selected) {
    var option = $('<option />');
    option.attr('value', value).text(value);
    if (selected) {
        option.attr('selected', true)
    }
    $(id).append(option);
}

function MapComboboxId(id) {
    this.id = id;
}


MapComboboxId.prototype.selectedMap = function() {
    return $(this.id).val();
}

MapComboboxId.prototype.change= function(changeFunction) {
    $(this.id).change(changeFunction);
}

MapComboboxId.prototype.fill = function(imageFileKeys, changeImageEvent) {
    that = this;
    $.each( imageFileKeys, function(index, value) {
            addOption($(that.id), value);
        }
    )
}

function FileComboboxId(id) {
    this.id = id;
    this.fileIndex = 0;
}

FileComboboxId.prototype.rememberIndex = function() {
    this.fileIndex = $(this.id+" option:selected").index();
}

FileComboboxId.prototype.retrieveIndex = function() {
    var fileSize = $(this.id+' option').size()
    if (this.fileIndex < fileSize) {
        $(this.id+' option')[this.fileIndex].selected
    } else {
        $(this.id+' option')[fileSize - 1].selected
    }
}

FileComboboxId.prototype.fill = function(hotspotFiles) {
    $(this.id).empty();
    that  = this;
    if (this.fileIndex >= hotspotFiles.length) {
        this.fileIndex = hotspotFiles.length - 1
    }
    $.each(hotspotFiles, function (index, value) {
            addOption($(that.id), value, this.fileIndex == index);
        }
    )
    $(this.id).change(changePointsEvent);
}

FileComboboxId.prototype.val = function() {
    return $(this.id).val();
}

function MapNormalCheckboxId(id) {
    this.id = id;
}


MapNormalCheckboxId.prototype.isactive = function() {
    return $(this.id).prop('checked') ;
}

MapNormalCheckboxId.prototype.click= function(changeFunction) {
    $(this.id).click(changeFunction);
}


function HotspotComboboxId(id) {
    this.id = id;
}


HotspotComboboxId.prototype.reset = function() {
    $(this.id).empty();
}

HotspotComboboxId.prototype.change= function(event) {
    $(this.id).change(event);
}

HotspotComboboxId.prototype.val = function() {
    return $(this.id).val();
}