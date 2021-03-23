const NUMBER = 10;
//code a executer des le chargement de la page
window.onload = function() {
    // declaration des variables 
    var AllLiens = document.querySelectorAll('li a');
    var button = document.querySelector('.moi button');
    var menu = document.querySelector('.menu');
    var icon = document.querySelector('li.icon');
    var main = document.querySelector('.corps');
    var hidden = document.querySelector('.hidden');
    var slogant = document.querySelector('.image');
    var sectionAbout = document.querySelector('section#about');
    var principal = document.querySelector('main');
    //appel des fonctions 

    buttonLoad(button);
    hash();
    //les events

    principal.addEventListener('scroll', function(e) {
        console.log(e);
    });

    hidden.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    main.addEventListener('click', function(e) {
        let hidden = document.querySelector('.hidden');
        let icon = document.querySelector('li.icon');
        let menu = document.querySelector('.menu');
        if (hidden.classList.contains('active')) {
            hidden.classList.remove('active');
            icon.querySelector('img').classList.toggle('icon');
            menu.classList.toggle('active');
        }
        e.stopPropagation();
    });
    menu.addEventListener('click', function(e) {
        let hidden = document.querySelector('.hidden');
        let icon = document.querySelector('li.icon');
        hidden.classList.toggle('active');
        icon.querySelector('img').classList.toggle('icon');
        this.classList.toggle('active');
        e.stopPropagation();
        aleatbtn(slogant, NUMBER);
    });
    icon.addEventListener('click', function(e) {
        let hidden = document.querySelector('.hidden');
        let menu = document.querySelector('.menu');
        this.querySelector('img').classList.toggle('icon');
        hidden.classList.toggle('active');
        menu.classList.toggle('active');
        e.stopPropagation();
        aleatbtn(slogant, NUMBER);
    });

    // executions d'autre script

    for (var lien of AllLiens) {
        lien.addEventListener('click', clickLien);
    }
};

// code a executer lors du resize

window.onresize = function() {
    var button = document.querySelector('.moi button');
    buttonLoad(button);
};

function hash() {
    if (location.hash)
        location.hash = '';
}

// declaration des fonctions


function buttonLoad(btn) {
    let parent = btn.parentNode;
    let left = (parent.clientWidth - btn.clientWidth) / 2;
    btn.style.marginLeft = left + 'px';
    btn.style.transition = '1s';
}

function clickLien() {
    var parent = this.parentNode;
    var grandParent = parent.parentNode;
    if (parent.classList.contains('active'))
        return false;
    grandParent.querySelector('li.active').classList.remove('active');
    parent.classList.add('active');
}

function aleatbtn(lieux, nombre) {
    let Max = 15;
    let AleatMax = lieux.offsetWidth - Max;
    let AleatHeight = lieux.offsetHeight - Max;
    if (!lieux.querySelector('.boule'))
        for (var i = 0; i < nombre; i++) {
            let element = document.createElement('div');
            let aleat = Math.random();
            (Math.round(Math.random())) ? element.classList.add('boule'): element.classList.add('bouleW');
            lieux.appendChild(element);
            element.style.height = aleat * Max + 'px';
            element.style.width = aleat * Max + 'px';
            element.style.top = Math.random() * AleatHeight + 'px';
            element.style.left = Math.random() * AleatMax + 'px';
        }
}