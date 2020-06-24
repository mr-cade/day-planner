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

    // conditional to assign past/present/future color formatting
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
    $(saveBtn).text("");
    $(saveBtn).attr({
        "id": i,
        "class": "saveBtn far fa-save"
    })
    $(timeBlock).append(saveBtn);
}
console.log("current hour: " + currentHour);

// get previously saved local events
function getLocal() {
    var fromLocal = JSON.parse(localStorage.getItem("events"));
    if (fromLocal != null) {
        for (var i = 0; i < fromLocal.length; i++) {
            localArr.push(fromLocal[i]);
            console.log("get local time: " + localArr[i].time);
            console.log("get local event: " + localArr[i].text);
        } 
    }
}
getLocal()

// save data to local storage 
        
function setLocal() {
    console.log("set local time: " + this.id);
    console.log("set local event: " + this.parentElement.children[0].value);

    var timeAndText = {
        time : this.id,
        text : this.parentElement.children[0].value
    }
    localArr.push(timeAndText);
    localStorage.setItem("events", JSON.stringify(localArr))
}

$(".saveBtn").on("click", setLocal);