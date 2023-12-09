const link = document.querySelectorAll('nav a');

function ativarLink(link){
    const href = link.href;
    const url = document.location.href;
    if(href === url){
        link.style.backgroundColor = "black";
        link.style.color = "#FFBB00";
    }
}

link.forEach(ativarLink);