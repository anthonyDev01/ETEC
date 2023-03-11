var button = document.getElementById("botao")

button.addEventListener("click", function click(e){

    let dog = document.getElementById("dogRight");  
    let posInicial = 0;
    let posFinal = 90;
    let intervalFrente = setInterval(andar, 50);

      function andar() {
        if (posInicial == posFinal) {       
          if (dog.src.match("dog")) {
            dog.src = "img/dogleft.gif";
            clearInterval(intervalFrente);
            voltar();
          }
        }
        else {
          posInicial++;
          dog.style.left = posInicial + "%";   
        }
      }
    
      function voltar() {
        posInicial = 90;
        posFinal = 0;
        let intervalTras = setInterval(andarParaTras, 50);
    
        function andarParaTras() {
          if (posInicial == posFinal) {
            if (dog.src.match("dog")) {
              dog.src = "img/dogright.gif";
    
              clearInterval(intervalTras);
              click();
            }
          }
          else { 
            posInicial--
            dog.style.left = posInicial + "%";
          }
        }
      }     
  button.removeEventListener("click", click);
})