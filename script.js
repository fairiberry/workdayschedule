var currentDay = moment().format("dddd. MMMM Do, YYYY");
var hour = moment().format("hh");
var saveBtn = $(".saveBtn")
saveBtn.on("click", save)
function save() {
    var id = $(this).attr("data-id");
    var textBox = $("#" + id).text();
    localStorage.setItem(id, textBox);
    refresh();
}

function refresh() {
    for(var i=9; i < 18; i++) {
        var textBox = localStorage.getItem(i);
        $("#" + i).text(textBox);
    }
}
refresh()

$("#currentDay").html(currentDay);
$("#hour").html(hour);


//for(var i = 0; i < 9; i++) {
//    $(".container").append("");
//}