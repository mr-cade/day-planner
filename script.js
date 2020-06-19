// set today display
var today = moment().format('MMM DD, YYYY');
$("#currentDay").text(today);

for (var i = 8; i <= 18; i++) {
    var timeBlock = document.createElement("div");
    // formats based on # of digits
    if(i < 10) {
        $(timeBlock).text("0" + i + ":00");
    } else {
        $(timeBlock).text(i + ":00");
    }
    // sets id and classes for css 
    $(timeBlock).attr({
        "id": i,
        "class": "row time-block hour"
    });

    // conditional to assign past/present/future formatting
    var currentHour = parseInt(moment().startOf('hour').format('h'));
    console.log(currentHour);
    console.log(timeBlock.id);
    if (currentHour < timeBlock.id) {
        $(timeBlock).addClass("future")
    } else if (currentHour > timeBlock.id) {
        $(timeBlock).addClass("past")
    } else {
        $(timeBlock).addClass("present")
    }

    // adds text input box to each time block
    $(timeBlock).append("<textarea>")
    

    $(".container").append(timeBlock);

}

// make save button
var saveBtn = document.createElement("button")
$(saveBtn).text("Save");
$(saveBtn).attr("class", "saveBtn")
$(".container").append(saveBtn);

// save data to local storage function
function saveToLocal() {

}
