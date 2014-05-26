var squaredIcon = $(".squaredicon"),
    currentIcon,
    currentIconID,
    currentIconClass;

function appendMiniBlocks() {
    squaredIcon.each(function () {
        currentIcon = $(this);
        currentIconID = currentIcon.attr("id");
        currentIconClass = currentIcon.attr("class");
        var n = currentIconClass.search("progress"),
            progress = currentIconClass.slice(n + 8, n + 10);
        for (var row = 19, rowIndex = 0; row >= 0; row -= 1, rowIndex += 1) {
            var squaredRow = $("<div class='squaredRow squaredRow" + row + "'>");
            currentIcon.append(squaredRow);
            squaredRow = $("#" + currentIconID + " .squaredRow" + row);
            for (var column = 0; column < 20; column += 1) {
                var filling = tables[currentIconID][rowIndex][column];
                switch (filling) {
                case 0:
                    if (row >= progress) {
                        var emptySquare = $("<div class='empty miniblock'></div>");
                    } else {
                        var emptySquare = $("<div class='progresss miniblock'></div>");
                    }
                    squaredRow.append(emptySquare);
                    break;
                case 1:
                    var emptySquare = $("<div class='filled miniblock'></div>");
                    squaredRow.append(emptySquare);
                    break;
                case 2:
                    var emptySquare = $("<div class='accent miniblock'></div>");
                    squaredRow.append(emptySquare);
                    break;
                };
            };
        };
    });
};


function displayProgresss() {
    squaredIcon.each(function (index) {
        //$(this).on("click", (function () {
            currentIcon = $(this);
            currentIconID = currentIcon.attr("id");
            currentIconClass = currentIcon.attr("class");
            var n = currentIconClass.search("progress"),
                progress = currentIconClass.slice(n + 8, n + 10),
                currentIconProgressPercentage = $("." + currentIconID + "ProgressPercentage");
            console.log(currentIconID);
            fillIcon(currentIconID, progress, currentIconProgressPercentage);
        //})
    });

        function fillIcon(currentlyFilledIconID, currentlyFilledIconProgress, currentTextName) {
            var timesRun = 0,
                interval = setInterval(function () {
                    timesRun += 1;
                if (timesRun >= currentlyFilledIconProgress) {
                    clearInterval(interval);
                }
                var currentlyFilledRowIndex = timesRun-1,
                    currentlyFilledRow = $("#" + currentlyFilledIconID + " .squaredRow" + currentlyFilledRowIndex),
                    currentBoxes = currentlyFilledRow.children();
                currentBoxes.addClass("shining");
                currentTextName.text(timesRun*5 + "%");
            }, 50);
        }
    };
//);
//};
appendMiniBlocks();

function fromTop() {
    var iconOffset = $(".squaredicon").offset().top,
        windowHeight = $(window).height(),
        skillsTimesShown = 0;
    $(window).scroll(function() {
        if (skillsTimesShown == 1) {
        }
        else {
            if ($(this).scrollTop() + windowHeight > iconOffset) {
                displayProgresss();
                skillsTimesShown = 1;
            } else {
                console.log("NIE ŁADUJE KUR");
            }
        }
    });
};
fromTop();