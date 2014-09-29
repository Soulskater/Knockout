/**
 * Created by gmeszaros on 9/29/2014.
 */
function container(rows) {
    var self = this;

    this.rows = ko.observableArray(rows);

    this.addNewBox = function (box, row) {
        var currentRowIndex = self.rows().indexOf(row);
        var nextRowIndex = currentRowIndex + 1;

        //No rows left
        if (nextRowIndex >= self.rows().length) {
            return;
        }
        //Insert new item into the next row, after the last item
        self.rows()[nextRowIndex].onBoxClick(row.boxes().length, self);
    };

    this.getBoxIndex = function (box, row) {
        var boxIndex = row.boxes().indexOf(box);
        var rowIndex = self.rows().indexOf(row);
        var fullIndex = boxIndex;
        for (var i = 0; i < rowIndex; i++) {
            fullIndex += self.rows()[i].boxes().length;
        }
        return fullIndex;
    };
}

function row(name, boxes, boxCount) {
    var self = this;

    this.name = ko.observable(name);
    this.maxBoxCount = ko.observable(boxCount);
    this.boxes = ko.observableArray(boxes);

    this.onBoxClick = function (boxIndex, container) {
        var newBox = new box("New item");
        if (self.boxes().length === self.maxBoxCount()) {
            container.addNewBox(newBox, self);
        }
        else {
            self.boxes.splice(boxIndex + 1, 0, newBox);
        }
    };
}

function box(name) {
    var self = this;

    this.name = ko.observable(name);
}