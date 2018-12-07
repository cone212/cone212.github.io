console.log("Radi");

// TEXT ISPOD MENIA ISPIS

var nizFree = ["Free Returns", "In-Stor Pick up-Returns", "Free Shippping"];
var free = "";
for (var i = 0; i < nizFree.length; i++) {
    free += "<div class='free'><i class='fas fa-check'></i> <b>" + nizFree[i] + "</b></div>";
    
}
document.querySelector("#freee").innerHTML = free; //PROMENI U HTMLU

//ARTICLE ISPIS

var nizArticle = ["images/article-men1.jpg", "images/article-men2.jpg", "images/article-men3.jpg", "images/article-men4.jpg"];
var article = "";
for(var i = 0; i < nizArticle.length; i++) {
    article += "<article><a href='men-jeans.html'> <img src='" + nizArticle[i] + "'alt='jeans' width='280px/></a><p>FLAMINGO</p><a href='#'><h2>FLAMINGO SKINY JEANS </h2></a><span> &euro;50.00</span></article>";
}
document.getElementById("main-article").innerHTML = article;

// PAYMENTS ISPIS

var ispis = "";
for (var i = 1; i <= 5; i++) {
    ispis +=  "<div class='blok slika" + i + "'><a href='paymants.html'></a></div > ";
}
document.getElementById("paymants").innerHTML = ispis;




















