/**
 * Mensaje consola
 */

console.log("Sitio web desarrollado por Nicolas Gonzalez");

/**
 * botones de visibilidad CV
 */

document
  .getElementById("botonOcultarCompetencias")
  .addEventListener("click", function () {
    document.getElementById("textoCompetencias").style.display = "none";
    document.getElementById("botonOcultarCompetencias").style.display = "none";
    document.getElementById("botonMostrarCompetencias").style.display = "block";
  });

document
  .getElementById("botonMostrarCompetencias")
  .addEventListener("click", function () {
    document.getElementById("textoCompetencias").style.display = "block";
    document.getElementById("botonMostrarCompetencias").style.display = "none";
    document.getElementById("botonOcultarCompetencias").style.display = "block";
  });

document
  .getElementById("botonOcultarIdiomas")
  .addEventListener("click", function () {
    document.getElementById("textoIdiomas").style.display = "none";
    document.getElementById("botonOcultarIdiomas").style.display = "none";
    document.getElementById("botonMostrarIdiomas").style.display = "block";
  });

document
  .getElementById("botonMostrarIdiomas")
  .addEventListener("click", function () {
    document.getElementById("textoIdiomas").style.display = "block";
    document.getElementById("botonMostrarIdiomas").style.display = "none";
    document.getElementById("botonOcultarIdiomas").style.display = "block";
  });

document
  .getElementById("botonOcultarExp")
  .addEventListener("click", function () {
    document.getElementById("textoExp").style.display = "none";
    document.getElementById("botonOcultarExp").style.display = "none";
    document.getElementById("botonMostrarExp").style.display = "block";
  });

document
  .getElementById("botonMostrarExp")
  .addEventListener("click", function () {
    document.getElementById("textoExp").style.display = "block";
    document.getElementById("botonMostrarExp").style.display = "none";
    document.getElementById("botonOcultarExp").style.display = "block";
  });

document
  .getElementById("botonOcultarCursos")
  .addEventListener("click", function () {
    document.getElementById("textoCursos").style.display = "none";
    document.getElementById("botonOcultarCursos").style.display = "none";
    document.getElementById("botonMostrarCursos").style.display = "block";
  });

document
  .getElementById("botonMostrarCursos")
  .addEventListener("click", function () {
    document.getElementById("textoCursos").style.display = "block";
    document.getElementById("botonMostrarCursos").style.display = "none";
    document.getElementById("botonOcultarCursos").style.display = "block";
  });

document
  .getElementById("botonOcultarVol")
  .addEventListener("click", function () {
    document.getElementById("textoVol").style.display = "none";
    document.getElementById("botonOcultarVol").style.display = "none";
    document.getElementById("botonMostrarVol").style.display = "block";
  });

document
  .getElementById("botonMostrarVol")
  .addEventListener("click", function () {
    document.getElementById("textoVol").style.display = "block";
    document.getElementById("botonMostrarVol").style.display = "none";
    document.getElementById("botonOcultarVol").style.display = "block";
  });
