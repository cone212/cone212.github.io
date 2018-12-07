console.log("Radi");

// TEXT ISPOD MENIA ISPIS

var nizFree = ["Free Returns", "In-Stor Pick up-Returns", "Free Shippping"];
var free = "";
for (var i = 0; i < nizFree.length; i++) {
    free += "<div class='free'><i class='fas fa-check'></i> <b>" + nizFree[i] + "</b></div>";

}
document.querySelector("#freee").innerHTML = free;

// ISPIS SHORTS

var nizShouseWomen = ["images/women-shouse1.jpg", "images/women-shouse2.jpg", "images/women-shouse3.jpg", "images/women-shouse4.jpg", "images/women-shouse5.jpg", "images/women-shouse6.jpg", "images/women-shouse7.jpg", "images/women-shouse8.jpg", "images/women-shouse9.jpg", "images/women-shouse10.jpg", "images/women-shouse11.jpg", "images/women-shouse12.jpg", "images/women-shouse13.jpg", "images/women-shouse14.jpg", "images/women-shouse15.jpg", "images/women-shouse16.jpg", "images/women-shouse17.jpg", "images/women-shouse18.jpg"];
var ispis9 = "";
for (var i = 0; i < nizShouseWomen.length; i++) {
    ispis9 += "<article><a href='#'><img src='" + nizShouseWomen[i] + "' alt='jeans' width='280px'/></a> <p> FLAMINGO </p> <a href='#'><h2> FLAMINGO SKINY JEANS</h2></a><span> &euro;50,00</span></article>";
}
document.querySelector(".shouseWomen").innerHTML = ispis9;

// PAYMENTS ISPIS

var ispis = "";
for (var i = 1; i <= 5; i++) {
    ispis += "<div class='blok slika" + i + "'><a href='paymants.html'></a></div > ";
}
document.getElementById("paymants").innerHTML = ispis;