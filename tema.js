var theme = localStorage.getItem('theme');
var tema = document.getElementById('tema_o');


if(theme === 'dark'){
    document.documentElement.setAttribute('data-bs-theme', 'dark')

}
tema.addEventListener('change', function(){
    if(tema.value !== 'dark'){
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme','dark');
        
    }else{
        document.documentElement.removeAttribute('data-bs-theme');
        localStorage.setItem('theme', 'light');
    }
    localStorage.setItem(document.documentElement.getAttribute('data-bs-theme'));
})
