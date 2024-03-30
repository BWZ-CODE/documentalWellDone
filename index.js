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
    var boxe1 = document.querySelector(".active1");
    boxe1.classList.toggle("boxActive",this.window.scrollY>1200)
    var boxe2 = document.querySelector(".active2");
    boxe2.classList.toggle("boxActive",this.window.scrollY>1200)
    var boxe3 = document.querySelector(".active3");
    boxe3.classList.toggle("boxActive",this.window.scrollY>1200)
    var boxe4 = document.querySelector(".active4");
    boxe4.classList.toggle("boxActive",this.window.scrollY>1200)
    var boxe5 = document.querySelector(".active5");
    boxe5.classList.toggle("boxActive",this.window.scrollY>1200)
    var boxe6 = document.querySelector(".active6");
    boxe6.classList.toggle("boxActive",this.window.scrollY>1200)
    var boxe7 = document.querySelector(".active7");
    boxe7.classList.toggle("boxActive",this.window.scrollY>1200)
    var boxe8 = document.querySelector(".active8");
    boxe8.classList.toggle("boxActive",this.window.scrollY>1200)
    var boxe9 = document.querySelector(".active9");
    boxe9.classList.toggle("boxActive",this.window.scrollY>1200)
})



window.addEventListener("scroll", function(){
    var boton2 = document.querySelector(".boton2");
    var boton1 = document.querySelector(".boton1");
    boton1.classList.toggle("boton1Active",this.window.scrollY>800)
    boton2.classList.toggle("boton1Active",this.window.scrollY>800)
})

const post1Btn = document.querySelector(".art1");
const post1Info = document.querySelector(".informacion1");
const cerrar = document.querySelector(".close1");
const fondo = document.querySelector(".partFourVideo");
const cajas = document.querySelector(".partFourBoxes1");


post1Btn.addEventListener("click",abrirInfo1)
cerrar.addEventListener("click",cerrarInfo1)

function abrirInfo1(){
    post1Info.classList.toggle("inactive")
    fondo.classList.add("blur")
    cajas.classList.add("blur")
}

function cerrarInfo1(){
    post1Info.classList.add("inactive")
    fondo.classList.toggle("blur")
    cajas.classList.toggle("blur")
}







// function partTwo(){
//     var partTwoText = document.querySelector(".partTwoText");
//     partTwoText.classList.add("partTwoTextActive")
// }


