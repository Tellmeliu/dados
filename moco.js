const boton1= document.querySelector('#num1');
const boton2= document.querySelector('#num2');
const boton3= document.querySelector('#num3');
const boton4= document.querySelector('#num4');
const boton5= document.querySelector('#num5');
const boton6= document.querySelector('#num6');
const boton7= document.querySelector('#num7');
const boton8= document.querySelector('#num8');
const boton9= document.querySelector('#num9');

const boton= document.querySelector('#boton');

var arreglo_mio=[];

var arreglo_mio_resultado=[]

var arreglo_el=[];

var defi=["1",2,3,4,5,6,7,8,9];



boton1.addEventListener('click',pelo1)  

function pelo1(e){
        boton1.textContent="1";
        boton1.disabled = true;
        arreglo_mio.push('1');
        console.log(arreglo_mio);
        delete(defi[defi.indexOf("1")]);
        console.log(defi.length);
        boton1.removeEventListener("click", pelo1)
}



boton2.addEventListener('click',pelo2)

function pelo2(e){

    boton2.textContent="2";
    
    arreglo_mio.push('2');

    console.log(arreglo_mio);

    boton2.removeEventListener("click", pelo2)
        

   
}

boton3.addEventListener('click',pelo3)

function pelo3(e){

    boton3.textContent="3";
    arreglo_mio.push('3');
    console.log(arreglo_mio)
    boton3.removeEventListener("click", pelo3)



    
}

boton4.addEventListener('click',pelo4)

function pelo4(e){

    boton4.textContent="4";
    arreglo_mio.push('4');
    console.log(arreglo_mio)
    boton4.removeEventListener("click", pelo4)


    
}


boton5.addEventListener('click',pelo5)
function pelo5(e){

    boton5.textContent="5";
    arreglo_mio.push('5');
    console.log(arreglo_mio)
    boton5.removeEventListener("click", pelo5)
   
}

boton6.addEventListener('click',pelo6)

function pelo6(e){

    boton6.textContent="6";
    arreglo_mio.push('6');
    console.log(arreglo_mio);
    boton6.removeEventListener("click", pelo6)

}


boton7.addEventListener('click',pelo7)
function pelo7(e){

    boton7.textContent="7";
    arreglo_mio.push('7');
    console.log(arreglo_mio)
    boton7.removeEventListener("click", pelo7)

    
}

boton8.addEventListener('click',pelo8)
function pelo8(e){
    boton8.textContent="8";
    arreglo_mio.push('8');
    console.log(arreglo_mio)
    boton8.removeEventListener("click", pelo8)


}

boton9.addEventListener('click',pelo9)

function pelo9(e){

    boton9.textContent="9";
    arreglo_mio.push('9');
    console.log(arreglo_mio);
    boton9.removeEventListener("click", pelo9)
 
}



boton.addEventListener('click',()=>{

    let numero= Math.floor(Math.random() * (8) + 1);
    console.log("El numero es:");
    console.log(numero);

    numero=numero.toString()

    if(arreglo_mio.indexOf(numero)===-1  && arreglo_el.indexOf(numero)==-1){
        var cadenita="#num"+numero;
        document.querySelector(cadenita).textContent="X"
        arreglo_el.push(numero);
        console.log(arreglo_el);
   
    }
    else{




    }



   

})


