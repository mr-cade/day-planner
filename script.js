// set today display
var today = moment().format('MMM DD, YYYY');
$("#currentDay").text(today);

for (var i = 8; i <= 18; i++) {
    var timeBlock = document.createElement("div");
    if(i < 10) {
        $(timeBlock).text("0"+i);
    } else {
        $(timeBlock).text(i);
    }
    $(timeBlock).append("<textarea>")
    $(timeBlock).attr({
        "id": i,
        "class": "row time-block hour"
    });
    $(".container").append(timeBlock);
    
    // conditional to assign past/present/future formatting

}


