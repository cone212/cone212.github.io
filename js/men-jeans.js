// ISPIS MEN-JEANS
var nizMenJeans = ["images/men-jeans1.jpg", "images/men-jeans2.jpg", "images/men-jeans3.jpg", "images/men-jeans4.jpg", "images/men-jeans5.jpg", "images/men-jeans6.jpg", "images/men-jeans7.jpg", "images/men-jeans8.jpg", "images/men-jeans9.jpg", "images/men-jeans10.jpg", "images/men-jeans11.jpg", "images/men-jeans12.jpg", "images/men-jeans13.jpg", "images/men-jeans14.jpg", "images/men-jeans15.jpg", "images/men-jeans16.jpg", "images/men-jeans17.jpg", "images/men-jeans18.jpg", "images/men-jeans19.jpg", "images/men-jeans20.jpg"];
var ispis2 = "";
for (var i = 0; i < nizMenJeans.length; i++) {
    ispis2 += "<article><a href='#'><img src='" + nizMenJeans[i] + "' alt='jeans' width='280px'/></a> <p> FLAMINGO </p> <a href='#'><h2> FLAMINGO SKINY JEANS</h2></a><span> &euro;50,00</span></article>";
}
document.querySelector(".jeansMen").innerHTML = ispis2;

// TEXT ISPOD MENIA ISPIS

var nizFree = ["Free Returns", "In-Stor Pick up-Returns", "Free Shippping"];
var free = "";
for (var i = 0; i < nizFree.length; i++) {
    free += "<div class='free'><i class='fas fa-check'></i> <b>" + nizFree[i] + "</b></div>";

}
document.querySelector("#freee").innerHTML = free;

// PAYMENTS ISPIS

var ispis = "";
for (var i = 1; i <= 5; i++) {
    ispis += "<div class='blok slika" + i + "'><a href='paymants.html'></a></div > ";
}
document.getElementById("paymants").innerHTML = ispis;

