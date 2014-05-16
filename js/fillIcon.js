var squaredIcon = $("#squaredicon");
for (var row = 0; row < 20; row += 1) {
    for (var column = 0; column < 20; column += 1) {
        var filling = lightBulb[row][column];
        if (filling == 0) {
            if (row == 0) {
                if (column == 0) {
                    emptySquare = $("<div class='empty top left miniblock'></div>");
                    squaredIcon.append(emptySquare);
                } else if (column == 19) {
                    emptySquare = $("<div class='empty top right miniblock'></div>");
                    squaredIcon.append(emptySquare);
                } else {
                    emptySquare = $("<div class='empty top miniblock'></div>");
                    squaredIcon.append(emptySquare);
                }
            }   else {
                if (column == 0) {
                    emptySquare = $("<div class='empty left miniblock'></div>");
                    squaredIcon.append(emptySquare);
                } else if (column == 19) {
                    emptySquare = $("<div class='empty right miniblock'></div>");
                    squaredIcon.append(emptySquare);
                } else {
                    emptySquare = $("<div class='empty miniblock'></div>");
                    squaredIcon.append(emptySquare);
                }
            }
        } else if (filling == 2) {
            filledSquare = $("<div class='semifilled filled miniblock'></div>");
            squaredIcon.append(filledSquare);
        } else if (filling == 2) {
            filledSquare = $("<div class='semifilled filled miniblock'></div>");
            squaredIcon.append(filledSquare);
        } else {
            if (row == 0) {
                if (column == 0) {
                    filledSquare = $("<div class='filled top left miniblock'></div>");
                    squaredIcon.append(filledSquare);
                } else if (column == 19) {
                    filledSquare = $("<div class='filled top right miniblock'></div>");
                    squaredIcon.append(filledSquare);
                } else {
                    filledSquare = $("<div class='filled top miniblock'></div>");
                    squaredIcon.append(filledSquare);
                }
            } else {
                if (column == 0) {
                    filledSquare = $("<div class='filled left miniblock'></div>");
                    squaredIcon.append(filledSquare);
                } else if (column == 19) {
                    filledSquare = $("<div class='filled right miniblock'></div>");
                    squaredIcon.append(filledSquare);
                } else {
                    filledSquare = $("<div class='filled miniblock'></div>");
                    squaredIcon.append(filledSquare);
                }
            }
        }
    };
};
