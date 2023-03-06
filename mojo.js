const boton= document.querySelector('#boton');
const imagen1 =document.querySelector('#dado1');
const imagen2 =document.querySelector('#dado2');

function NumeroDado(numero) {

    if(numero==1){
        return "cara-1.png"
    }
    else if(numero==2){
        return "cara-2.jpg"
    }
    else if(numero==3){
        return "cara-3.jpg"
    }
    else if(numero==4){
        return "cara-4.jpg"
    }
    else if(numero==5){
        return "cara-5.png"
    }
    else if(numero==6){
        return "cara-6.jpg"
    }
  }


boton.addEventListener('click',()=>{

    console.log("bien");

    let numero1= Math.floor(Math.random() * (5) + 1);
    let numero2= Math.floor(Math.random() * (5) + 1);

    let imgdado1= NumeroDado(numero1);
    let imgdado2= NumeroDado(numero2);

    document.getElementById("dado1").src=imgdado1;
    document.getElementById("dado2").src=imgdado2;


    if(numero1==numero2){
        document.getElementById("mensaje").innerHTML="Ud ganó el juego";
    }
    else{
        document.getElementById("mensaje").innerHTML="";
    }



    //document.getElementById("boton").disabled = true;
    console.log(numero1);
    console.log(imgdado1);
  
})


