console.log("Radi");

// TEXT ISPOD MENIA ISPIS

var nizFree = ["Free Returns", "In-Stor Pick up-Returns", "Free Shippping"];
var free = "";
for (var i = 0; i < nizFree.length; i++) {
    free += "<div class='free'><i class='fas fa-check'></i> <b>" + nizFree[i] + "</b></div>";

}
document.querySelector("#freee").innerHTML = free;

// ISPIS SHORTS

var nizShortsSkirtsWomen = ["images/women-shorts-skirts1.jpg", "images/women-shorts-skirts2.jpg", "images/women-shorts-skirts3.jpg", "images/women-shorts-skirts4.jpg", "images/women-shorts-skirts5.jpg", "images/women-shorts-skirts6.jpg", "images/women-shorts-skirts7.jpg", "images/women-shorts-skirts8.jpg", "images/women-shorts-skirts9.jpg", "images/women-shorts-skirts10.jpg", "images/women-shorts-skirts11.jpg", "images/women-shorts-skirts12.jpg", "images/women-shorts-skirts13.jpg", "images/women-shorts-skirts14.jpg", "images/women-shorts-skirts15.jpg", "images/women-shorts-skirts16.jpg", "images/women-shorts-skirts17.jpg", "images/women-shorts-skirts18.jpg", "images/women-shorts-skirts19.jpg", "images/women-shorts-skirts20.jpg"];
var ispis7 = "";
for (var i = 0; i < nizShortsSkirtsWomen.length; i++) {
    ispis7 += "<article><a href='#'><img src='" + nizShortsSkirtsWomen[i] + "' alt='jeans' width='280px'/></a> <p> FLAMINGO </p> <a href='#'><h2> FLAMINGO SKINY JEANS</h2></a><span> &euro;50,00</span></article>";
}
document.querySelector(".shortsSkirtsWomen").innerHTML = ispis7;
// PAYMENTS ISPIS

var ispis = "";
for (var i = 1; i <= 5; i++) {
    ispis += "<div class='blok slika" + i + "'><a href='paymants.html'></a></div > ";
}
document.getElementById("paymants").innerHTML = ispis;