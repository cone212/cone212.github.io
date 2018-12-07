console.log("Radi");

// TEXT ISPOD MENIA ISPIS

var nizFree = ["Free Returns", "In-Stor Pick up-Returns", "Free Shippping"];
var free = "";
for (var i = 0; i < nizFree.length; i++) {
    free += "<div class='free'><i class='fas fa-check'></i> <b>" + nizFree[i] + "</b></div>";

}
document.querySelector("#freee").innerHTML = free;

// ISPIS SHORTS

var nizJampsuitsWomen = ["images/women-jumpsuits1.jpg", "images/women-jumpsuits2.jpg", "images/women-jumpsuits3.jpg", "images/women-jumpsuits4.jpg", "images/women-jumpsuits5.jpg", "images/women-jumpsuits6.jpg", "images/women-jumpsuits7.jpg", "images/women-jumpsuits8.jpg", "images/women-jumpsuits9.jpg", "images/women-jumpsuits10.jpg", "images/women-jumpsuits11.jpg", "images/women-jumpsuits12.jpg", "images/women-jumpsuits13.jpg"];
var ispis7 = "";
for (var i = 0; i < nizJampsuitsWomen.length; i++) {
    ispis7 += "<article><a href='#'><img src='" + nizJampsuitsWomen[i] + "' alt='jeans' width='280px'/></a> <p> FLAMINGO </p> <a href='#'><h2> FLAMINGO SKINY JEANS</h2></a><span> &euro;50,00</span></article>";
}
document.querySelector(".jumpsuitsWomen").innerHTML = ispis7;

// PAYMENTS ISPIS

var ispis = "";
for (var i = 1; i <= 5; i++) {
    ispis += "<div class='blok slika" + i + "'><a href='paymants.html'></a></div > ";
}
document.getElementById("paymants").innerHTML = ispis;