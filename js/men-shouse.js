console.log("Radi");

// TEXT ISPOD MENIA ISPIS

var nizFree = ["Free Returns", "In-Stor Pick up-Returns", "Free Shippping"];
var free = "";
for (var i = 0; i < nizFree.length; i++) {
    free += "<div class='free'><i class='fas fa-check'></i> <b>" + nizFree[i] + "</b></div>";

}
document.querySelector("#freee").innerHTML = free;

// ISPIS SHORTS

var nizMenShouse = ["images/men-shouse1.jpg", "images/men-shouse2.jpg", "images/men-shouse3.jpg", "images/men-shouse4.jpg", "images/men-shouse5.jpg", "images/men-shouse6.jpg", "images/men-shouse7.jpg", "images/men-shouse8.jpg", "images/men-shouse9.jpg", "images/men-shouse10.jpg", "images/men-shouse11.jpg", "images/men-shouse12.jpg", "images/men-shouse13.jpg", "images/men-shouse14.jpg", "images/men-shouse15.jpg", "images/men-shouse16.jpg"];
var ispis4 = "";
for (var i = 0; i < nizMenShouse.length; i++) {
    ispis4 += "<article><a href='#'><img src='" + nizMenShouse[i] + "' alt='jeans' width='280px'/></a> <p> FLAMINGO </p> <a href='#'><h2> FLAMINGO SKINY JEANS</h2></a><span> &euro;50,00</span></article>";
}
document.querySelector(".shouseMen").innerHTML = ispis4;

// PAYMENTS ISPIS

var ispis = "";
for (var i = 1; i <= 5; i++) {
    ispis += "<div class='blok slika" + i + "'><a href='paymants.html'></a></div > ";
}
document.getElementById("paymants").innerHTML = ispis;

