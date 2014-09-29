/**
 * Created by gmeszaros on 9/29/2014.
 */
function mockRows() {
    var row1 = new row("Row 1", [new box("Box 1"), new box("Box 2")], 3);
    var row2 = new row("Row 2", [new box("Box 1")], 2);
    var row3 = new row("Row 3", [new box("Box 1"), new box("Box 2"), new box("Box 3")], 5);

    return [row1, row2, row3];
}

$(document).ready(function () {
    ko.applyBindings(new container(mockRows()), $(".container")[0]);
});