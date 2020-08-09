var dropmenu1 = document.getElementById('pakages-div');
var dropmenu2 = document.getElementById('drop-menu');
dropmenu1.style.display = "none";
dropmenu2.style.display = "none";

function mouseout1() {
    dropmenu1.style.display = "none";
}

function mouseover1() {
    dropmenu1.style.display = "block";
}

function mouseout2() {
    dropmenu2.style.display = "none";
}

function mouseover2() {
    dropmenu2.style.display = "block";
}


var f1 = document.getElementById('feature1');
var f2 = document.getElementById('feature2');
var f3 = document.getElementById('feature3');
var f4 = document.getElementById('feature4');
var f5 = document.getElementById('feature5');
f1.style.display = "block";
f2.style.display = "block";
f3.style.display = "block";
f4.style.display = "block";
f5.style.display = "block";

function featureshow(a) {
    var value = "f" + a;
    value.style.display = "block";
}