function buttn(){

var ran= Math.random();
ran = Math.floor(ran*6)+1;


if(ran===1){
    image1 = "./dice" + ran + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", image1);
}
if(ran===2){
    image1 = "./dice" + ran + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", image1);
}
if(ran===3){
    image1 = "./dice" + ran + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", image1);
}
if(ran===4){
    image1 = "./dice" + ran + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", image1);
}
if(ran===5){
    image1 = "./dice" + ran + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", image1);
}
if(ran===6){
    image1 = "./dice" + ran + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", image1);
}



var ran2= Math.random();
ran2 = Math.floor(ran2*6)+1;

if(ran2===1){
    image2 = "./dice" + ran2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", image2);
}
if(ran2===2){
    image2 = "./dice" + ran2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", image2);
}
if(ran2===3){
    image2 = "./dice" + ran2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", image2);
}
if(ran2===4){
    image2 = "./dice" + ran2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", image2);
}
if(ran2===5){
    image2 = "./dice" + ran2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", image2);
}
if(ran2===6){
    image2 = "./dice" + ran2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", image2);
}


if (ran > ran2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (ran2 > ran) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = " It's a Draw!";
  }

}
