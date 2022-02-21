fetch("http://www.raydelto.org/agenda.php")
.then(function(contactos){
    return contactos.json();
}).then(function(contactos){
    var cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML =  JSON.stringify(contactos) 
});
     

function cargarContactos(){
    var formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', e =>{
        e.preventDefault();
        fetch("http://www.raydelto.org/agenda.php")
        .then(function(contactos){
            return contactos.json();
        }).then(function(contactos){
            var cuerpo = document.getElementById("cuerpo");
            cuerpo.innerHTML =  JSON.stringify(contactos);
            
        });

        var datos = new FormData(formulario);
        var cuerpo = document.getElementById("cuerpo");

        peticion = {
            method: 'post',
            body:datos,
        }
        fetch("http://www.raydelto.org/agenda.php", peticion)
        .then(function(contactos){
            return contactos.json();
         })
        .then(function(contactos){
            var cuerpo = document.getElementById("cuerpo");
            cuerpo.innerHTML =  JSON.stringify(contactos) 
            
        });
    })
}