
function changeImage() {
    var image = document.getElementById('perfil');
    if (image.src.match("img/perfilAnormal")) {
        image.src = "img/perfilNormal.jpg";
    } else {
        image.src = "img/perfilAnormal.jpg";
    }
}


      function darkMode() { 
        var cuerpoweb = document.body; 
        cuerpoweb.classList.toggle("oscuro"); 
        var modoOscuro = document.getElementById("icono");
        modoOscuro.classList.toggle("lamp");
        var modoOscuro1 = document.getElementById("icono1");
        modoOscuro1.classList.toggle("oscurillo");
        var modoOscuro2 = document.getElementById("icono2");
        modoOscuro2.classList.toggle("oscurillo");
        var modoOscuro3 = document.getElementById("icono3");
        modoOscuro3.classList.toggle("oscurillo");
        var modoOscuro4 = document.getElementById("icono4");
        modoOscuro4.classList.toggle("oscurillo");
        var modoOscuro5 = document.getElementById("icono5");
        modoOscuro5.classList.toggle("oscurillo");
        var modoOscuro6 = document.getElementById("icono6");
        modoOscuro6.classList.toggle("oscurillo");
        var modoOscuro7 = document.getElementById("icono7");
        modoOscuro7.classList.toggle("oscurillo");
        modoOscuro7.classList.toggle("oscurillo2");
        var modoOscuro8 = document.getElementById("menu-contacto");
        modoOscuro8.classList.toggle("oscurillo");
        var modoOscuro9 = document.getElementById("perfil");
        modoOscuro9.classList.toggle("oscurillo1");
        var modoOscuro0 = document.getElementById("modales");
        modoOscuro0.classList.toggle("black");
        var modoOscuro01 = document.getElementById("boton-colapsado");
        modoOscuro01.classList.toggle("oscuro");
        
      } 
