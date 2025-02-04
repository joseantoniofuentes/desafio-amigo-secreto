// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// definición de variables globales
let amigos= [];

// insertar en el DOM
const  ul = document.querySelector('#listaAmigos');
const resultado = document.querySelector('#resultado')
// validar solo letras, acentos, ñ, Ñ
const  pattern = new RegExp('^[a-zA-Z\u00C0-\u017F]+$'); 
 
// ingresa un amigo al input , valida que ingrese un nombre solo letras
function agregarAmigo()  { 
let nombreAmigo = document.getElementById('amigo').value;
if (nombreAmigo === '') { 
    alert('Debe ingresar un nombre de un amigo')     
}else if (!pattern.test(nombreAmigo)){
    alert(`${nombreAmigo}     No es un nombre valido. `)  
}
else{
    actualizarLista(nombreAmigo)
    console.log(amigos);
    limpiarinput();
}
return;
}

// Limpiar el campo del input
function limpiarinput(){
 document.getElementById('amigo').value = '';  
 return;
}

// Agrega amigos al arreglo 
function actualizarLista(nombreAmigo){
    amigos.push(nombreAmigo); 
    listarHTML()
    return;
}
// Sortea amigo , valida lista no vacia
  function sortearAmigo(){
    if (amigos.length > 0){
        sorteado = Math.floor(Math.random()*amigos.length)+1;
        resultadoHTML()
    }else{
        alert('Debe ingresar amigos')
    }  
  }

  // Muestra la lista de amigos en pantalla, HTML
  function listarHTML() {
    ul.innerHTML = '';
    for (let i = 0 ; i < amigos.length; i++){
        let li = document.createElement("li")
        li.innerHTML = amigos[i];
        ul.appendChild(li)
        
    }    
    return;
    }
    function resultadoHTML(){
     let li = document.createElement("li")
     li.innerHTML = `El amigo secreto es :  ${amigos[sorteado-1]}` ;
     resultado.appendChild(li)
    return;
    }
    