// set today display
var today = moment().format('MMM DD, YYYY');
var eventInput = $('textarea');
var localArr = [];

$("#currentDay").text(today);
setInterval (function() {
    $("#currentTime").text(moment().format('hh:mm:ss'))
}, 500);

// create timeblocks for display
for (var i = 8; i <= 18; i++) {
    var timeBlock = document.createElement("div");
    
    var hourDisplay = document.createElement("div");

    $(hourDisplay).attr({"class": "col-1"})

    // formats based on # of digits
    if(i < 10) {
        $(hourDisplay).text("0" + i + ":00");
    } else {
        $(hourDisplay).text(i + ":00");
    }
    $(timeBlock).append(hourDisplay);

    // sets id and classes for css 
    $(timeBlock).attr({
        "id": i,
        "class": "row time-block "
    })

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
    var textArea = $("<textarea>")
    $(textArea).attr({
        "class": "col-8"
    })
    $(timeBlock).append(textArea)
    
    // create save button
    var saveBtn = document.createElement("button")
    $(saveBtn).text("");
    $(saveBtn).attr({
        "id": i,
        "class": "saveBtn far fa-save col-2"
    })
    $(timeBlock).append(saveBtn);
    // adds entire time block to the container
    $(".container").append(timeBlock);

}

// get previously saved local events
function getLocal() {
    var fromLocal = JSON.parse(localStorage.getItem("events"));
    if (fromLocal != null) {
        for (var i = 0; i < fromLocal.length; i++) {
            localArr.push(fromLocal[i]);
            console.log($("."+fromLocal[i].time))    
            $("."+fromLocal[i].time ).val(fromLocal[i].text)
        } 
        console.log(localArr);
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