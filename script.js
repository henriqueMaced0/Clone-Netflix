let one = document.getElementById("questions")
let two = document.getElementById("response")
let image= document.getElementById("img-question")

function abre() {
    if (two.style.display == "none") {
        two.style.display = "block"
        image.id= "img-question-girar"
    }else{
        two.style.display= "none"
          image.id="img-question"
    }

}

one.botaoaddEventListener("click", abre)