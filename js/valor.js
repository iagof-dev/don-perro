
rsvalor = Math.floor(Math.random() * 150);
centvalor = Math.floor(Math.random() * 99);

function setar(){

    txt = document.getElementById('valor');
    txt.innerText = "Valor Total: R$" + rsvalor + "," + centvalor;
}