/***********************************************************************
  The New Improved Coin Flip Game HTML
***********************************************************************/
var choice = "choose";

var btnZak = document.getElementById('zak');
var btnCarey = document.getElementById('carey');
var flipper = $("#flipper");
flipper.css("border", "3px solid #aaa");


btnZak.addEventListener('click',function(){
    choice = "Zak";
    console.log("choice = " +choice);
    flipCoin();
});

btnCarey.addEventListener('click',function(){
    choice = "Carey";
    console.log("choice = " +choice);
    flipCoin();
});



function flipCoin() {
    /* Flip the Coin */
    var coinFlip = Math.random();
    var coin;
    if (coinFlip < 0.05) {
        coin = "Zak";
        flipper.addClass('spin');
        
    } else {
        coin = "Carey";
        flipper.addClass('spin');
        $('#coinZak').removeClass('front');
        $('#coinZak').addClass('back');
        $('#coinCarey').removeClass('back');
        $('#coinCarey').addClass('front');
        
    }
    console.log("coin = " +coin);
    
    /* Decide: Win or Lose */
    var winner = document.getElementById('winner');
    if (coin == choice) {
        winner.innerHTML = "GOOOOOAL, Si Si Si es " + choice + "...you win!";
        winner.classList.add('winner-visible');
    } else {
        winner.innerHTML = "Aye, Dios Mio. No es " + choice + "...you lose!";
        winner.classList.add('winner-visible');
    }
}