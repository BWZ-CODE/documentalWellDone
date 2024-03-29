window.addEventListener("scroll", function(){
    var text = document.querySelector(".inicioTexto");
    text.classList.toggle("abajo",this.window.scrollY>2)
})


window.addEventListener("scroll", function(){
    var text2 = document.querySelector(".partTwoText");
    text2.classList.toggle("partTwoTextActive",this.window.scrollY>250)
})

window.addEventListener("scroll", function(){
    var text3 = document.querySelector(".partThreeText");
    text3.classList.toggle("partThreeTextActive",this.window.scrollY>800)
})


window.addEventListener("scroll", function(){
    var boton2 = document.querySelector(".boton2");
    var boton1 = document.querySelector(".boton1");
    boton1.classList.toggle("boton1Active",this.window.scrollY>800)
    boton2.classList.toggle("boton1Active",this.window.scrollY>700)
})






// function partTwo(){
//     var partTwoText = document.querySelector(".partTwoText");
//     partTwoText.classList.add("partTwoTextActive")
// }


