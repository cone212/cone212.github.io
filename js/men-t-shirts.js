console.log("Radi");

// TEXT ISPOD MENIA ISPIS

var nizFree = ["Free Returns", "In-Stor Pick up-Returns", "Free Shippping"];
var free = "";
for (var i = 0; i < nizFree.length; i++) {
    free += "<div class='free'><i class='fas fa-check'></i> <b>" + nizFree[i] + "</b></div>";

}
document.querySelector("#freee").innerHTML = free;

// ISPIS MEN T-SHIRTS

var nizMenTShirts = ["images/men-t-shirts1.jpg", "images/men-t-shirts2.jpg", "images/men-t-shirts3.jpg", "images/men-t-shirts4.jpg", "images/men-t-shirts5.jpg", "images/men-t-shirts6.jpg", "images/men-t-shirts7.jpg", "images/men-t-shirts8.jpg", "images/men-t-shirts9.jpg", "images/men-t-shirts10.jpg", "images/men-t-shirts11.jpg", "images/men-t-shirts12.jpg", "images/men-t-shirts13.jpg", "images/men-t-shirts14.jpg", "images/men-t-shirts15.jpg", "images/men-t-shirts16.jpg", "images/men-t-shirts17.jpg", "images/men-t-shirts18.jpg", "images/men-t-shirts19.jpg", "images/men-t-shirts20.jpg", "images/men-t-shirts21.jpg", "images/men-t-shirts22.jpg", "images/men-t-shirts23.jpg"];
var ispis5 = "";
for (var i = 0; i < nizMenTShirts.length; i++) {
    ispis5 += "<article><a href='#'><img src='" + nizMenTShirts[i] + "' alt='jeans' width='280px'/></a> <p> FLAMINGO </p> <a href='#'><h2> FLAMINGO SKINY JEANS</h2></a><span> &euro;50,00</span></article>";
}
document.querySelector(".tShirtsMen").innerHTML = ispis5;

// PAYMENTS ISPIS

var ispis = "";
for (var i = 1; i <= 5; i++) {
    ispis += "<div class='blok slika" + i + "'><a href='paymants.html'></a></div > ";
}
document.getElementById("paymants").innerHTML = ispis;

