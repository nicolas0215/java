function openMenu(){
    document.getElementById("mainMenu").style.width="480px";//abri menu opciones en celular
    document.getElementById("mainMenu").style.width="flex";//abri menu opciones en celular
    document.getElementById("mainMenu").style.width="1000px";//abri menu opciones en celular
    document.getElementById("openmenu").style.width="none";//abri menu opciones en celular
}
function closeNav(){
    document.getElementById("mainMenu").style.width="0px";//cerrar menu opciones en celular
    document.getElementById("mainMenu").style.width="0.9s all";//cerrar menu opciones en celular
    window.location.reload();//recargar web
}