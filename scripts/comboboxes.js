
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