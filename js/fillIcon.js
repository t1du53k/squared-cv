var squaredIcon = $("#squaredicon");
function appendMiniBlocks() {
    for (var row = 0; row < 20; row += 1) {
        squaredRow = $("<div class='squaredRow'>");
        squaredIcon.append(squaredRow);
        for (var column = 0; column < 20; column += 1) {
            var filling = ruby[row][column];
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
function attachNumber() {
    $('.squaredRow').each(function(index, value) {
        $(this).attr("class", "squaredRow row" + index);
    });
};
function displayProgress() {
    $("#squaredicon").click(function() {
        $(".row19").children().toggleClass("shining");
        $("#progressPercentage").text("5%");
        $(this).delay(100).queue(function(){
            $(".row18").children().toggleClass("shining");
            $("#progressPercentage").text("10%");
            $(this).dequeue();
        });
        $(this).delay(100).queue(function(){
            $(".row17").children().toggleClass("shining");
            $("#progressPercentage").text("15%");
            $(this).dequeue();
        });
        $(this).delay(100).queue(function(){
            $(".row16").children().toggleClass("shining");
            $("#progressPercentage").text("20%");
            $(this).dequeue();
        });
        $(this).delay(100).queue(function(){
            $(".row15").children().toggleClass("shining");
            $("#progressPercentage").text("25%");
            $(this).dequeue();
        });
        $(this).delay(100).queue(function(){
            $(".row14").children().toggleClass("shining");
            $("#progressPercentage").text("30%");
            $(this).dequeue();
        });
        $(this).delay(100).queue(function(){
            $(".row13").children().toggleClass("shining");
            $("#progressPercentage").text("35%");
            $(this).dequeue();
        });
        $(this).delay(100).queue(function(){
            $(".row12").children().toggleClass("shining");
            $("#progressPercentage").text("40%");
            $(this).dequeue();
        });
        $(this).delay(100).queue(function(){
            $(".row11").children().toggleClass("shining");
            $("#progressPercentage").text("45%");
            $(this).dequeue();
        });
        $(this).delay(100).queue(function(){
            $(".row10").children().toggleClass("shining");
            $("#progressPercentage").text("50%");
            $(this).dequeue();
        });
    });
};
appendMiniBlocks();
attachNumber();
displayProgress();
