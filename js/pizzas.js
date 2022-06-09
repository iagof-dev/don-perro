
select = 0;

rsvalor = Math.floor(Math.random() * 150);
centvalor = Math.floor(Math.random() * 99);

function setar(){

    txt = document.getElementById('valor');
    txt.innerText = "Valor Total: R$" + rsvalor + "," + centvalor;
}


function foto(n){
    imagem = document.getElementById('img123');
    switch (n){
        case '1':
            console.log("1");
            imagem.src = "https://cdn.discordapp.com/attachments/958777076213772348/982803025594822666/calabresa.jpg";
            break;
        case '2':
            console.log("2");
            imagem.src = "https://cdn.discordapp.com/attachments/958777076213772348/982803025863262278/mussarela.jpg";
            break;
        case '3':
            console.log("3");
            imagem.src = "https://cdn.discordapp.com/attachments/958777076213772348/982803026123317339/portugesa.webp";
            break;
        case '4':
            console.log("4");
            imagem.src = "https://cdn.discordapp.com/attachments/958777076213772348/982803125209554974/margherita.jpg";
            break;
        case '5':
            console.log("5");
            imagem.src = "https://cdn.discordapp.com/attachments/958777076213772348/982803248287187015/Pizza-4-queijos.jpg";
            break;
        case '6':
            console.log("6");
            imagem.src = "https://cdn.discordapp.com/attachments/958777076213772348/982803354021396540/frango-catupiry.webp";
            break;
    }
}
