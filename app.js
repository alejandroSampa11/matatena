document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
    scrollNav();
}

function scrollNav(){
    const enlaces = document.querySelectorAll('nav a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click',function(e){
            e.preventDefault();
            const seccionScroll= e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: 'smooth'});
        });
    });
}

function crearGaleria() {
    const galeria = document.querySelector('.fotos');
    for(let i=1;i<=10;i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `<img loading="lazy" width="290" height="290" src="img/matatena${i}.jpg" alt="imagen galeria">`
        imagen.onclick = function(){
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }
}
function mostrarImagen(id){
    const imagen = document.createElement('picture');
        imagen.innerHTML = `<img loading="lazy" width="290" height="290" src="img/matatena${id}.jpg" alt="imagen galeria">`;

        //CREAMOS EL OVERLAY
        const overlay = document.createElement('div');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');
        overlay.onclick =function(){
            overlay.remove();
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
        }

        //BOTON CERRAR EL OVERLAY
        const cerrarFoto = document.createElement('p');
        cerrarFoto.textContent="X";
        cerrarFoto.classList.add('btn-cerrar');
        cerrarFoto.onclick = function(){
            overlay.remove();
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
        }

        overlay.appendChild(cerrarFoto);


        //AÑADIRLO A HTML
        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar-body');
}
