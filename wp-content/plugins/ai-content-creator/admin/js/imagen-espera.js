function mostrarEspera() {
    var elementoBotonCrear = document.getElementById("botoncrear");
    if(elementoBotonCrear) {
      elementoBotonCrear.style.display = "none";
    }
    var elementoEspera = document.getElementById("espera");
    if(elementoEspera) {
      elementoEspera.style.display = "block";
    }
    var elementoGenerar = document.getElementById("generar");
    if (elementoGenerar) {
      elementoGenerar.style.display = "none";
    }
    var elementoCreacion = document.getElementById("creacion");
    if (elementoCreacion) {
      elementoCreacion.style.display = "none";
    }
  }
  