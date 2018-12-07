console.log("Radi");

// TEXT ISPOD MENIA ISPIS

var nizFree = ["Free Returns", "In-Stor Pick up-Returns", "Free Shippping"];
var free = "";
for (var i = 0; i < nizFree.length; i++) {
    free += "<div class='free'><i class='fas fa-check'></i> <b>" + nizFree[i] + "</b></div>";

}
document.querySelector("#freee").innerHTML = free;

// ISPIS SHORTS

var niztShirtsWomen = ["images/women-t-shirts1.jpg", "images/women-t-shirts2.jpg", "images/women-t-shirts3.jpg", "images/women-t-shirts4.jpg", "images/women-t-shirts5.jpg", "images/women-t-shirts6.jpg", "images/women-t-shirts7.jpg", "images/women-t-shirts8.jpg", "images/women-t-shirts9.jpg", "images/women-t-shirts10.jpg", "images/women-t-shirts11.jpg", "images/women-t-shirts12.jpg", "images/women-t-shirts13.jpg", "images/women-t-shirts14.jpg", "images/women-t-shirts15.jpg", "images/women-t-shirts16.jpg", "images/women-t-shirts17.jpg", "images/women-t-shirts18.jpg", "images/women-t-shirts19.jpg", "images/women-t-shirts20.jpg"];
var ispis8 = "";
for (var i = 0; i < niztShirtsWomen.length; i++) {
    ispis8 += "<article><a href='#'><img src='" + niztShirtsWomen[i] + "' alt='jeans' width='280px'/></a> <p> FLAMINGO </p> <a href='#'><h2> FLAMINGO SKINY JEANS</h2></a><span> &euro;50,00</span></article>";
}
document.querySelector(".tShirtsWomen").innerHTML = ispis8;

// PAYMENTS ISPIS

var ispis = "";
for (var i = 1; i <= 5; i++) {
    ispis += "<div class='blok slika" + i + "'><a href='paymants.html'></a></div > ";
}
document.getElementById("paymants").innerHTML = ispis;