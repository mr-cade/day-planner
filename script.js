// set today display
var today = moment().format('MMM DD, YYYY');
var eventInput = $('textarea');
var localArr = [];

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
    var currentHour = parseInt(moment().startOf('hour').format('kk'));

    if (currentHour < timeBlock.id) {
        $(timeBlock).addClass("future")
    } else if (currentHour > timeBlock.id) {
        $(timeBlock).addClass("past")
    } else {
        $(timeBlock).addClass("present")
    }

    // adds text input box to each time block
    $(timeBlock).append("<textarea>")
    // adds entire time block to the container
    $(".container").append(timeBlock);
    // create save button
    var saveBtn = document.createElement("button")
    $(saveBtn).text("Save");
    $(saveBtn).attr({
        "id": i,
        "class": "saveBtn"
    })
    $(timeBlock).append(saveBtn);
}
console.log("current hour: " + currentHour);

// get previously saved local events


// save data to local storage function
function setLocal() {
    console.log(this.id);
    console.log(this.parentElement.children[0].value);

    var timeAndText = {
        time : event.target.id,
        text : this.parentElement.children[0].value
    }
    localArr.push(timeAndText);
    localStorage.setItem("events", JSON.stringify(localArr))
}

$(".saveBtn").on("click", setLocal);