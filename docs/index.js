var Randomnumber1 = Math.floor(Math.random()*6)+1;

var randomdiceimage1 = "dice"+Randomnumber1+".png";

var randomimagesource1 = randomdiceimage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource1);


var Randomnumber2 = Math.floor(Math.random()*6)+1;

var randomdiceimage2 = "dice"+Randomnumber2+".png";

var randomimagesource2 = randomdiceimage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimagesource2);

if(Randomnumber1 > Randomnumber2){
    document.querySelector("h1").innerHTML="🏆 Player 1 wins!"
}
else if(Randomnumber2 > Randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 wins! 🏆"
}
else{
    document.querySelector("h1").innerHTML="🏆 Draw 🏆"
}