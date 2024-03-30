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
    boxe1.classList.toggle("boxActive",this.window.scrollY>1800)
    var boxe2 = document.querySelector(".active2");
    boxe2.classList.toggle("boxActive",this.window.scrollY>1800)
    var boxe3 = document.querySelector(".active3");
    boxe3.classList.toggle("boxActive",this.window.scrollY>1800)
    var boxe4 = document.querySelector(".active4");
    boxe4.classList.toggle("boxActive",this.window.scrollY>1800)
    var boxe5 = document.querySelector(".active5");
    boxe5.classList.toggle("boxActive",this.window.scrollY>1800)
    var boxe6 = document.querySelector(".active6");
    boxe6.classList.toggle("boxActive",this.window.scrollY>1800)
    var boxe7 = document.querySelector(".active7");
    boxe7.classList.toggle("boxActive",this.window.scrollY>1800)
    var boxe8 = document.querySelector(".active8");
    boxe8.classList.toggle("boxActive",this.window.scrollY>1800)
    var boxe9 = document.querySelector(".active9");
    boxe9.classList.toggle("boxActive",this.window.scrollY>1800)
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


////////////////////////////////////////////////////////

const post2Btn = document.querySelector(".art2");
const post2Info = document.querySelector(".informacion2");
const cerrar2 = document.querySelector(".close2");
const fondo2 = document.querySelector(".partFourVideo");
const cajas2 = document.querySelector(".partFourBoxes1");


post2Btn.addEventListener("click",abrirInfo2)
cerrar2.addEventListener("click",cerrarInfo2)

function abrirInfo2(){
    post2Info.classList.toggle("inactive")
    fondo2.classList.add("blur")
    cajas2.classList.add("blur")
}

function cerrarInfo2(){
    post2Info.classList.add("inactive")
    fondo2.classList.toggle("blur")
    cajas2.classList.toggle("blur")
}

////////////////////////////////////////////////

const post3Btn = document.querySelector(".art3");
const post3Info = document.querySelector(".informacion3");
const cerrar3 = document.querySelector(".close3");
const fondo3 = document.querySelector(".partFourVideo");
const cajas3 = document.querySelector(".partFourBoxes1");


post3Btn.addEventListener("click",abrirInfo3)
cerrar3.addEventListener("click",cerrarInfo3)

function abrirInfo3(){
    post3Info.classList.toggle("inactive")
    fondo3.classList.add("blur")
    cajas3.classList.add("blur")
}

function cerrarInfo3(){
    post3Info.classList.add("inactive")
    fondo3.classList.toggle("blur")
    cajas3.classList.toggle("blur")
}

//////////////////////////////////////////

const post4Btn = document.querySelector(".art4");
const post4Info = document.querySelector(".informacion4");
const cerrar4 = document.querySelector(".close4");
const fondo4 = document.querySelector(".partFourVideo");
const cajas4 = document.querySelector(".partFourBoxes1");


post4Btn.addEventListener("click",abrirInfo4)
cerrar4.addEventListener("click",cerrarInfo4)

function abrirInfo4(){
    post4Info.classList.toggle("inactive")
    fondo4.classList.add("blur")
    cajas4.classList.add("blur")
}

function cerrarInfo4(){
    post4Info.classList.add("inactive")
    fondo4.classList.toggle("blur")
    cajas4.classList.toggle("blur")
}

//////////////////////////////////////
const post5Btn = document.querySelector(".art5");
const post5Info = document.querySelector(".informacion5");
const cerrar5 = document.querySelector(".close5");
const fondo5 = document.querySelector(".partFourVideo");
const cajas5 = document.querySelector(".partFourBoxes1");


post5Btn.addEventListener("click",abrirInfo5)
cerrar5.addEventListener("click",cerrarInfo5)

function abrirInfo5(){
    post5Info.classList.toggle("inactive")
    fondo5.classList.add("blur")
    cajas5.classList.add("blur")
}

function cerrarInfo5(){
    post5Info.classList.add("inactive")
    fondo5.classList.toggle("blur")
    cajas5.classList.toggle("blur")
}
////////////////////////////////////////////////

const post6Btn = document.querySelector(".art6");
const post6Info = document.querySelector(".informacion6");
const cerrar6 = document.querySelector(".close6");
const fondo6 = document.querySelector(".partFourVideo");
const cajas6 = document.querySelector(".partFourBoxes1");


post6Btn.addEventListener("click",abrirInfo6)
cerrar6.addEventListener("click",cerrarInfo6)

function abrirInfo6(){
    post6Info.classList.toggle("inactive")
    fondo6.classList.add("blur")
    cajas6.classList.add("blur")
}

function cerrarInfo6(){
    post6Info.classList.add("inactive")
    fondo6.classList.toggle("blur")
    cajas6.classList.toggle("blur")
}
///////////////////////////////////////////////////////////


const post7Btn = document.querySelector(".art7");
const post7Info = document.querySelector(".informacion7");
const cerrar7 = document.querySelector(".close7");
const fondo7 = document.querySelector(".partFourVideo");
const cajas7 = document.querySelector(".partFourBoxes1");


post7Btn.addEventListener("click",abrirInfo7)
cerrar7.addEventListener("click",cerrarInfo7)

function abrirInfo7(){
    post7Info.classList.toggle("inactive")
    fondo7.classList.add("blur")
    cajas7.classList.add("blur")
}

function cerrarInfo7(){
    post7Info.classList.add("inactive")
    fondo7.classList.toggle("blur")
    cajas7.classList.toggle("blur")
}

///////////////////////////////////////////////////////////

const post8Btn = document.querySelector(".art8");
const post8Info = document.querySelector(".informacion8");
const cerrar8 = document.querySelector(".close8");
const fondo8 = document.querySelector(".partFourVideo");
const cajas8 = document.querySelector(".partFourBoxes1");


post8Btn.addEventListener("click",abrirInfo8)
cerrar8.addEventListener("click",cerrarInfo8)

function abrirInfo8(){
    post8Info.classList.toggle("inactive")
    fondo8.classList.add("blur")
    cajas8.classList.add("blur")
}

function cerrarInfo8(){
    post8Info.classList.add("inactive")
    fondo8.classList.toggle("blur")
    cajas8.classList.toggle("blur")
}

//////////////////////////////////////////////////////

const post9Btn = document.querySelector(".art9");
const post9Info = document.querySelector(".informacion9");
const cerrar9 = document.querySelector(".close9");
const fondo9 = document.querySelector(".partFourVideo");
const cajas9 = document.querySelector(".partFourBoxes1");


post9Btn.addEventListener("click",abrirInfo9)
cerrar9.addEventListener("click",cerrarInfo9)

function abrirInfo9(){
    post9Info.classList.toggle("inactive")
    fondo9.classList.add("blur")
    cajas9.classList.add("blur")
}

function cerrarInfo9(){
    post9Info.classList.add("inactive")
    fondo9.classList.toggle("blur")
    cajas9.classList.toggle("blur")
}