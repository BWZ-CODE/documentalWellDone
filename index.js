window.addEventListener("scroll", function(){
    var text = document.querySelector(".inicioTexto");
    text.classList.toggle("abajo",this.window.scrollY>2)
})


window.addEventListener("scroll", function(){
    var text2 = document.querySelector(".partTwoText");
    text2.classList.toggle("partTwoTextActive",this.window.scrollY>250)
})






// function partTwo(){
//     var partTwoText = document.querySelector(".partTwoText");
//     partTwoText.classList.add("partTwoTextActive")
// }


