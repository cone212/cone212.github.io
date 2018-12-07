console.log("Radi");

// TEXT ISPOD MENIA ISPIS

var nizFree = ["Free Returns", "In-Stor Pick up-Returns", "Free Shippping"];
var free = "";
for (var i = 0; i < nizFree.length; i++) {
    free += "<div class='free'><i class='fas fa-check'></i> <b>" + nizFree[i] + "</b></div>";

}
document.querySelector("#freee").innerHTML = free;

// ISPIS WOMEN JEANS

var nizWomenJeans = ["images/women-jeans1.jpg", "images/women-jeans2.jpg", "images/women-jeans3.jpg", "images/women-jeans4.jpg", "images/women-jeans5.jpg", "images/women-jeans6.jpg", "images/women-jeans7.jpg", "images/women-jeans8.jpg", "images/women-jeans9.jpg", "images/women-jeans10.jpg", "images/women-jeans11.jpg", "images/women-jeans12.jpg", "images/women-jeans13.jpg", "images/women-jeans14.jpg", "images/women-jeans15.jpg", "images/women-jeans16.jpg", "images/women-jeans17.jpg", "images/women-jeans18.jpg", "images/women-jeans19.jpg", "images/women-jeans20.jpg"];
var ispis6 = "";
for (var i = 0; i < nizWomenJeans.length; i++) {
    ispis6 += "<article><a href='#'><img src='" + nizWomenJeans[i] + "' alt='jeans' width='280px'/> <p> FLAMINGO </p> <h2> FLAMINGO SKINY JEANS</h2><span> &euro;50,00</span></article>";
}
document.querySelector(".jeansWomen").innerHTML = ispis6;

// PAYMENTS ISPIS

var ispis = "";
for (var i = 1; i <= 5; i++) {
    ispis += "<div class='blok slika" + i + "'><a href='paymants.html'></a></div > ";
}
document.getElementById("paymants").innerHTML = ispis;

