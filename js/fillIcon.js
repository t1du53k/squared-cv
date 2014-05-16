var squaredIcon = $("#squaredicon"),
    kupa = $("#kupa");

        
function appendMiniBlocks() {
    for (var row = 0; row < 20; row += 1) {
        squaredRow = $("<div class='squaredRow'>");
        squaredIcon.append(squaredRow);
        for (var column = 0; column < 20; column += 1) {
            var filling = lightBulb2[row][column];
            switch (filling) {
            case 0:
                emptySquare = $("<div class='empty miniblock'></div>");
                squaredRow.append(emptySquare);
                break;
            case 1:
                emptySquare = $("<div class='filled miniblock'></div>");
                squaredRow.append(emptySquare);
                break;
            case 2:
                emptySquare = $("<div class='accent miniblock'></div>");
                squaredRow.append(emptySquare);
                break;
            case 3:
                emptySquare = $("<div class='progress miniblock'></div>");
                squaredRow.append(emptySquare);
                break;
            };
        };
    };
};
function displayProgress(progress) {
    for (var row = 20; row > 0; row -= 1) {
        for (var column = 0; column < 20; column += 1) {
            if (progress >= row) {
                
            }
        }
    }
};
appendMiniBlocks();