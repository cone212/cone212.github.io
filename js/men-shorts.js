console.log("Radi");

// TEXT ISPOD MENIA ISPIS

var nizFree = ["Free Returns", "In-Stor Pick up-Returns", "Free Shippping"];
var free = "";
for (var i = 0; i < nizFree.length; i++) {
    free += "<div class='free'><i class='fas fa-check'></i> <b>" + nizFree[i] + "</b></div>";

}
document.querySelector("#freee").innerHTML = free;

// ISPIS SHORTS

var nizMenShorts = ["images/men-shorts1.jpg", "images/men-shorts2.jpg", "images/men-shorts3.jpg", "images/men-shorts4.jpg", "images/men-shorts5.jpg", "images/men-shorts6.jpg", "images/men-shorts7.jpg", "images/men-shorts8.jpg", "images/men-shorts9.jpg", "images/men-shorts10.jpg", "images/men-shorts11.jpg", "images/men-shorts12.jpg", "images/men-shorts13.jpg", "images/men-shorts14.jpg", "images/men-shorts15.jpg", "images/men-shorts16.jpg", "images/men-shorts17.jpg", "images/men-shorts18.jpg", "images/men-shorts19.jpg", "images/men-shorts20.jpg"];
var ispis3 = "";
for (var i = 0; i < nizMenShorts.length; i++) {
    ispis3 += "<article><a href='#'><img src='" + nizMenShorts[i] + "' alt='jeans' width='280px'/></a> <p> FLAMINGO </p> <a href='#'><h2> FLAMINGO SKINY JEANS</h2></a><span> &euro;50,00</span></article>";
}
document.querySelector(".shortsMen").innerHTML = ispis3;

// PAYMENTS ISPIS

var ispis = "";
for (var i = 1; i <= 5; i++) {
    ispis += "<div class='blok slika" + i + "'><a href='paymants.html'></a></div > ";
}
document.getElementById("paymants").innerHTML = ispis;

