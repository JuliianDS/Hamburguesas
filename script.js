

function cambiarFondo(){
    var fondof = document.getElementById('cambiar_fondo'); 
    var htmlElement = document.documentElement;
    if(fondof.value != 'oscuro'){
        htmlElement.setAttribute('data-bs-theme', 'light');
    }else{
        htmlElement.setAttribute('data-bs-theme', 'dark');
        
    }
}

function cambiarIdioma(){
    var idioma = document.getElementById('select_idioma'); 
    var htmlElement = document.documentElement;
    if(idioma.value == 'esp'){
        htmlElement.setAttribute('lang', 'es');
    }else{
        htmlElement.setAttribute('lang', 'en');
        
    }
}
localStorage.setItem()
