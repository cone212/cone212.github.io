// TEXT ISPOD MENIA ISPIS

var nizFree = ["Free Returns", "In-Stor Pick up-Returns", "Free Shippping"];
var free = "";
for (var i = 0; i < nizFree.length; i++) {
    free += "<div class='free'><i class='fas fa-check'></i> <b>" + nizFree[i] + "</b></div>";

}
document.querySelector("#freee").innerHTML = free; //PROMENI U HTMLU

// PAYMENTS ISPIS

var ispis = "";
for (var i = 1; i <= 5; i++) {
    ispis += "<div class='blok slika" + i + "'><a href='paymants.html'></a></div > ";
}
document.getElementById("paymants").innerHTML = ispis;

// ISPISIVANJE COLLECTION PHOTOSHUST

var ispis2 = "";
var nizCollection = ["images/photoshoot1.jpg", "images/photoshoot2.jpg", "images/photoshoot3.jpg", "images/photoshoot4.jpg", "images/photoshoot5.jpg", "images/photoshoot6.jpg", "images/photoshoot7.jpg", "images/photoshoot8.jpg", "images/photoshoot9.jpg", "images/photoshoot10.jpg", "images/photoshoot11.jpg", "images/photoshoot12.jpg", "images/photoshoot13.jpg", "images/photoshoot14.jpg"]
for (var i = 1; i < nizCollection.length; i++) {
    ispis2 += "<img src='" + nizCollection[i] + "' alt='photoshoot'/>";
}
document.getElementById("images").innerHTML = ispis2;

